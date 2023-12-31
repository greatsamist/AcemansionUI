import heroImage from "../../assets/images/home/hero-1.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../utils/Reveal";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-7 h-[500px] 2xl:h-[450px]">
        <div
          className="bg-cover col-span-4 bg-ace-gold bg-center bg-no-repeat border-b-2 md:border-r-2"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-[45px] xl:text-[52.6px] 2xl:text-[63px] text-ace-black pl-8 pr-4 xl:pl-14 mt-14">
              Transform Your Ideas Into Stunning Visual Stories
            </h2>
          </Reveal>
        </div>

        <div
          className="col-span-3 bg-ace-black bg-cover bg-center bg-no-repeat flex items-end pb-8 justify-end"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-[36px] lg:text-[48px]  2xl:text-[70px] text-white pr-8 xl:pr-14 text-right">
              With Our <span className="block">Creative Video</span> Production
            </h2>
          </Reveal>
        </div>
      </div>

      <Link
        to="cases"
        className="border-b-2 border-ace-black p-4 pr-10 flex items-center justify-end gap-1"
      >
        <h5 className="text-right text-[22px]">Get Started</h5>
        <ArrowDownRight size={30} />
      </Link>
    </div>
  );
};

export default Hero;
