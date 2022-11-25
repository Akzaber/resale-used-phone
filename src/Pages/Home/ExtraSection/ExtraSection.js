import React from "react";

const ExtraSection = () => {
  return (
    <div className="hero my-6">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/1MQ6TP2/xiaomi-11t-pro-5g-samsung-s21-fe-oneplus-9rt.jpg"
          className="rounded-lg w-full lg:w-1/2"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">
            Buy Your Choiceable Second-hand Mobile Phone
          </h1>
          <p className="py-6">
            Find second-hand mobile phones for sale near you at the best price.
            Explore the wide range of used mobile phones from top brands like
            Apple, Samsung, Oneplus.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
