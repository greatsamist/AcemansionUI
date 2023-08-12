import aboutImage from "../../assets/images/home/services-3.jpg";
import { CardHeroTitle } from "../utils/Card";

const ServicesHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 h-[500px] 2xl:h-[450px]">
      <div className="bg-cover sm:h-[350px] md:h-[500px] 2xl:h-[450px] col-span-4">
        <img className="object-cover w-full h-full" src={aboutImage} />
      </div>

      <div className="col-span-3 border-b-2 border-ace-black flex flex-col justify-center px-4 md:px-8 py-6">
        <CardHeroTitle>
          <span className="md:block">Transforming </span>
          <span className="md:block md:pl-20">Visions into </span>
          <span className="">Mesmerizing </span>
          <span className="md:block md:pl-20">Videos</span>
        </CardHeroTitle>
      </div>
    </div>
  );
};

export default ServicesHero;
