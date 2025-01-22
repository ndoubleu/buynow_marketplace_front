import React from "react";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import BestSeller from "./BestSeller";

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
