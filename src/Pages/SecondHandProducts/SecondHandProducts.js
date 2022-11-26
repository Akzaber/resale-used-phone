import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "./BookNowModal/BookNowModal";

const SecondHandProducts = () => {
  const [productName, setProductName] = useState([]);
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
                <label
                  onClick={() =>
                    setProductName({
                      name: product?.name,
                      price: product?.resalePrice,
                    })
                  }
                  htmlFor="booking-modal"
                  className="btn"
                >
                  Book now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookNowModal productName={productName}></BookNowModal>
    </div>
  );
};

export default SecondHandProducts;
