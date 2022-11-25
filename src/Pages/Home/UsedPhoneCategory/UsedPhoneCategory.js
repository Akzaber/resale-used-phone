import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UsedPhoneCategory = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["usedphonecategory"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/usedphonecategory");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-6">
        All second-hand Phones Categories!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link to={`usedphonecategory/${category._id}`} key={category._id}>
            <div className="card hover:shadow-lg shadow">
              <figure>
                <img src={category.img} className="h-64 w-full" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{category.categoryName}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsedPhoneCategory;
