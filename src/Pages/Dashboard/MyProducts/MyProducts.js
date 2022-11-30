import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const MyProducts = () => {
  const [handleBtn, setHandleBtn] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addproducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://used-products-resale-server-beta.vercel.app/addproducts/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleadvertise = (id) => {
    const advertiseItem = products.find((item) => item?._id === id);
    console.log(advertiseItem);

    fetch(
      "https://used-products-resale-server-beta.vercel.app/advertiseproducts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(advertiseItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged === true) {
          console.log(data);
          toast.success("Advertise Item Added Successfully");
          setHandleBtn(true);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(
      `https://used-products-resale-server-beta.vercel.app/addproducts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Deleted Successfully");
        }
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {products.length === 0 && (
          <p className="text-5xl font-bold text-primary text-center">
            No Products added
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.length &&
          products?.map((product) => (
            <div key={product?._id}>
              <div className="card w-full shadow hover:shadow-xl">
                <figure>
                  <img src={product?.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.productName}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{product.description}</p>
                  <p>Location: {product.location}</p>
                  <p>product uses: {product.yearOfUse} year</p>
                  <p>
                    seller name: <strong>{product?.sellerName}</strong>
                  </p>
                  <div className="card-actions">
                    <div className="badge badge-outline">
                      product condition-{product?.productCondition}
                    </div>
                    <div className="card-actions justify-between">
                      <div className="badge badge-outline">
                        original price{" "}
                        <strong> ${product?.originalPrice}</strong>
                      </div>
                      <div className="badge badge-outline">
                        resale price <strong> ${product?.resalePrice}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      disabled={handleBtn}
                      onClick={() => handleadvertise(product?._id)}
                      className="btn btn-xs"
                    >
                      Advertise
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyProducts;
