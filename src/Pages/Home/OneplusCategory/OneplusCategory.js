import React from "react";
import { useQuery } from "@tanstack/react-query";

const OneplusCategory = () => {
  const { data: onepluses = [] } = useQuery({
    queryKey: ["onepluscollection"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/onepluscollection");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-4">Oneplus Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {onepluses.map((oneplus) => (
          <div key={oneplus._id}>
            <div className="card lg:card-side shadow-lg">
              <figure>
                <img src={oneplus.img} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl uppercase">
                  {oneplus.name}
                </h2>
                <p>Resale Price: ${oneplus.resalePrice}</p>
                <p>Get more products enter category explore more!!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneplusCategory;
