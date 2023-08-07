import heroImage from "../../assets/images/home/hero-1.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-5 h-[490px] md:h-[450px] xl:h-[550px]">
        <div
          className="bg-cover col-span-3 bg-center bg-no-repeat border-b-2 md:border-r-2"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h2 className="text-3xl lg:text-5xl xl:text-6xl text-ace-black p-10">
            Transform Your Ideas Into Stunning Visual Stories
          </h2>
        </div>

        <div
          className="col-span-2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {" "}
          <h2 className="text-3xl lg:text-5xl xl:text-6xl text-white p-5 pr-10 text-right mt-[120px] lg:mt-[200px]">
            With Our Creative Video Production
          </h2>
        </div>
      </div>

      <div className="border-b-2 border-ace-black p-4 pr-10 flex items-center justify-end gap-1">
        <h5 className="text-right text-[22px]">Get Started</h5>
        <ArrowDownRight size={30} />
      </div>
    </div>
  );
};

export default Hero;
