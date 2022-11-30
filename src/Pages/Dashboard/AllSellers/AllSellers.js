import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-beta.vercel.app/users?userType=seller"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://used-products-resale-server-beta.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Successfully deleted");
        }
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, i) => (
            <tr key={seller._id}>
              <th>{i + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img alt="" src={seller.photoURL} />
                  </div>
                </div>
              </td>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(seller._id)}
                  className="btn btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
