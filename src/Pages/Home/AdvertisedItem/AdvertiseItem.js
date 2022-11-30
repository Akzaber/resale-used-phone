import { useQuery } from "@tanstack/react-query";
import React from "react";

const AdvertiseItem = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["alladvertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-beta.vercel.app/alladvertise"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.length && (
        <h2 className="text-4xl font-bold my-4">Advertise Product</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products?.length &&
          products.map((product) => (
            <div key={product._id}>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={product.image} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.productName}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdvertiseItem;
