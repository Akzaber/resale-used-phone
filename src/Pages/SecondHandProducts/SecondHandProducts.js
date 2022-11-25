import React from "react";
import { useLoaderData } from "react-router-dom";

const SecondHandProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl text-center font-bold uppercase my-4">
        Used {products[0].categoryName} Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        {products[0].data.map((product, i) => (
          <div key={i} className="card lg:card-side shadow hover:shadow-lg">
            <figure>
              <img src={product.img} alt="Album" className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">{product.name}</h2>
              <p>Location: {product.location}</p>
              <span>
                <strong>Resale Price: ${product.resalePrice}</strong>
              </span>
              <span>
                <strong>Original Price: ${product.originalPrice}</strong>
              </span>
              <p>Year of use: {product.yearOfUse}year</p>
              <p>Seller_Name: Json Unknown</p>
              <p>
                <small>posted-time: {product.postedTime}</small>
              </p>
              <div className="card-actions justify-end">
                <button className="btn">Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondHandProducts;
