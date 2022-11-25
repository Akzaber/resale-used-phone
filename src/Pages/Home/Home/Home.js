import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import IphoneCategory from "../IphoneCategory/IphoneCategory";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <IphoneCategory></IphoneCategory>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
