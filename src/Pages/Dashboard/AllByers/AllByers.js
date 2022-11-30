import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllByers = () => {
  const {
    data: byers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["byers"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-beta.vercel.app/users?userType=user"
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

  // const handleMakeAdmin = (type) => {
  //   if (type === "user") {
  //     fetch(`https://used-products-resale-server-beta.vercel.app/users?userType=${type}`, {
  //       method: "PUT",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }
  // };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Byer Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {byers.length &&
            byers.map((byer, i) => (
              <tr key={byer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="" src={byer.photoURL} />
                    </div>
                  </div>
                </td>
                <td>{byer.name}</td>
                <td>{byer.email}</td>
                <td>
                  <button
                    // onClick={() => handleMakeAdmin(byer.userType)}
                    className="btn btn-xs"
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(byer._id)}
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

export default AllByers;
