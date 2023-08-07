import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import Process from "../components/home/Process";
import HomeCases from "../components/home/HomeCases";
import HomeReview from "../components/home/HomeReview";
import HomeFaqs from "../components/home/HomeFaqs";
import HomeContactUs from "../components/home/HomeContactUs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Process />
      <HomeCases />
      <HomeReview />
      <HomeFaqs />
      <HomeContactUs />
    </>
  );
};

export default Homepage;
