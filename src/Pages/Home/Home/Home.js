import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import IphoneCategory from "../IphoneCategory/IphoneCategory";
import OneplusCategory from "../OneplusCategory/OneplusCategory";
import SamsungCategory from "../SamsungCategory/SamsungCategory";
import UsedPhoneCategory from "../UsedPhoneCategory/UsedPhoneCategory";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <UsedPhoneCategory></UsedPhoneCategory>
      <IphoneCategory></IphoneCategory>
      <SamsungCategory></SamsungCategory>
      <OneplusCategory></OneplusCategory>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
