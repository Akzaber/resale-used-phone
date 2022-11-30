import React from "react";
import { useQuery } from "@tanstack/react-query";

const SamsungCategory = () => {
  const { data: samsungs, isLoading } = useQuery({
    queryKey: ["samsungcollection"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-beta.vercel.app/samsungcollection"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-4">Samsung Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {samsungs.map((samsung) => (
          <div key={samsung._id}>
            <div className="card lg:card-side shadow-lg">
              <figure>
                <img src={samsung.img} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl uppercase">
                  {samsung.name}
                </h2>
                <p>Resale Price: ${samsung.resalePrice}</p>
                <p>Get more products enter category explore more!!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamsungCategory;
