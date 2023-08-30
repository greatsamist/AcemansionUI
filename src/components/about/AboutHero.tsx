import aboutHero from "../../assets/images/about/aboutHero.jpg";
import { CardHeroTitle } from "../utils/Card";

const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 h-[500px] 2xl:h-[450px]">
      <div className="bg-cover sm:h-[350px] md:h-[500px] 2xl:h-[450px] col-span-4">
        <img className="object-cover w-full h-full" src={aboutHero} />
      </div>

      <div className="col-span-3 border-b-2 border-ace-black flex flex-col justify-center pl-8 py-6 pr-4">
        <CardHeroTitle>
          <span className="md:block">Crafting </span>
          <span className="md:block md:pl-20">Visual Stories, </span>
          <span className="">One Frame </span>
          <span className="md:block md:pl-20">at a time</span>
        </CardHeroTitle>
      </div>
    </div>
  );
};

export default AboutHero;
