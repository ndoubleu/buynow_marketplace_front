import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      {/* <Hero /> */}
      <Categories />
      <NewArrival />
      {/* <PromoBanner /> */}
      <BestSeller />
      {/* <CounDown /> */}
      {/* <Testimonials /> */}
    </main>
  );
};

export default Home;
