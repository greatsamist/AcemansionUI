import heroImage from "../../assets/images/home/hero-1.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-5 h-[550px] md:h-[450px] xl:h-[550px]">
        <div
          className="bg-cover col-span-3 bg-ace-gold bg-center bg-no-repeat border-b-2 md:border-r-2"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-[45px] xl:text-[52.6px] 2xl:text-[63px] text-ace-black pl-8 pr-4 xl:pl-14 pt-14">
            Transform Your Ideas Into Stunning Visual Stories
          </h2>
        </div>

        <div
          className="col-span-2 bg-ace-black bg-cover bg-center bg-no-repeat flex items-end xl:pb-14 justify-end"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-[45px] xl:text-[52.6px] 2xl:text-[63px] text-white p-5 pr-8 xl:pr-14 text-right">
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
