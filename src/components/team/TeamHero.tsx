import heroImage from "../../assets/images/home/cases-1.jpg";
import { CardHeroTitle } from "../utils/Card";

const TeamHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5  h-[500px] 2xl:h-[450px]">
      <div className="bg-cover sm:h-[350px] md:h-[500px] 2xl:h-[450px] col-span-3">
        <img className="object-cover w-full h-full" src={heroImage} />
      </div>

      <div className="col-span-2 border-b-2 border-ace-black flex flex-col justify-center pl-8 py-6 pr-4">
        <CardHeroTitle>
          <span className="md:block">Creating </span>
          <span className="md:block md:pl-20">Compelling </span>
          <span className="">Videos for </span>
          <span className="md:block md:pl-20">Businesses </span>
          <span className="md:block">And Individuals</span>
        </CardHeroTitle>
      </div>
    </div>
  );
};

export default TeamHero;
