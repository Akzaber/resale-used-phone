import React from "react";

const BannerItem = ({ banner }) => {
  const { image, prev, id, next } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="gradiant-image">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-1/4">
        <h1 className="text-6xl hidden lg:block font-bold text-white">
          Find used <br />
          mobile phones <br /> at lowest price
        </h1>
      </div>
      <div className="absolute w-2/5 flex  text-white text-lg justify-end transform -translate-y-1/2 left-10 top-1/2">
        <p className="hidden lg:block">
          Find second-hand mobile phones for sale near you at the best price.
          Explore the wide range of used mobile phones from top brands like
          Apple, Samsung, Oneplus.
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-3/4">
        <button className="btn">Learn more</button>
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
