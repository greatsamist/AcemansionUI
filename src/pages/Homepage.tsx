import Hero from "../components/home/Hero";
import HomeContactUs from "../components/home/HomeContactUs";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeTeam from "../components/home/HomeTeam";
import Testimonials from "../components/home/Testimonials";
import WhatWeDo from "../components/home/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HomePortfolio />
      <HomeTeam />
      <Testimonials />
      <HomeContactUs />
    </>
  );
};

export default Homepage;
