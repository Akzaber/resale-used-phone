import React from "react";
import { useQuery } from "@tanstack/react-query";

const IphoneCategory = () => {
  const { data: iphones, isLoading } = useQuery({
    queryKey: ["iphoneCollection"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-beta.vercel.app/iphoneCollection"
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
      <h2 className="text-3xl font-bold mb-4">iphone Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {iphones.map((iphone) => (
          <div key={iphone._id}>
            <div className="card lg:card-side shadow-lg">
              <figure>
                <img src={iphone.img} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl uppercase">{iphone.name}</h2>
                <p>Resale Price: ${iphone.resalePrice}</p>
                <p>Get more products enter category explore more!!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IphoneCategory;
