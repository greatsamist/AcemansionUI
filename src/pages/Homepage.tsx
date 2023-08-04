import Hero from "../components/home/Hero";
import HomeContactUs from "../components/home/HomeContactUs";
import HomePortfolio from "../components/home/HomePortfolio";
import WhatWeDo from "../components/home/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HomePortfolio />
      <HomeContactUs />
    </>
  );
};

export default Homepage;
