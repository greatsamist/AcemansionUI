import Hero from "../components/home/Hero";
import HomeContactUs from "../components/home/ContactUs";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeTeam from "../components/home/HomeTeam";
import Testimonials from "../components/home/Testimonials";

import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <HomeTeam />
      <Testimonials />
      <HomeContactUs />
    </>
  );
};

export default Homepage;
