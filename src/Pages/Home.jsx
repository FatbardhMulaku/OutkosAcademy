import React from "react";
import Banner from "../Components/Pages/Home/Banner";
import Features from "../Components/Pages/Home/Features";
import WhatWeOffer from "../Components/Pages/Home/WhatWeOffer";
import Header from "../Components/Shared/Header/Header";
import UseFeature from "../Components/Shared/UseFeature/UseFeature";
import img1 from '../Assets/Home/use-feature.jpg';
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <WhatWeOffer />
      <UseFeature to="/" link="Apply Now" title="Start Learning New Things" styles="sm bg-primary" img={img1}/>
    </>
  );
};

export default Home;
