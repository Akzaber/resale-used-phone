import React from "react";

const BannerItem = ({ banner }) => {
  const { image, prev, id, next } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="gradiant-image">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Find used <br />
          mobile phones <br /> at lowest price
        </h1>
      </div>
      <div className="absolute w-1/2 flex text-white text-lg justify-end transform -translate-y-1/2 left-10 top-1/2">
        <p>
          Best used mobile phone and second hand mobile phones at lowest price.
          Get the best deals on used android and Samsung, Oneplus, Xiaomi
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-3/4">
        <button className="btn btn-secondary">Learn more</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-5">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
