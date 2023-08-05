import heroImage from "../../assets/images/home/homeHero.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import ArrowRightDownIcon from "../../assets/icons/ArrowRightDownIcon";

const Hero = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-5 h-[250px] md:h-[400px] xl:h-[500px]">
        <div
          className="bg-cover col-span-3 bg-center bg-no-repeat border-r-2"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h2 className=" text-5xl xl:text-6xl text-ace-black p-10">
            Transform Your Ideas Into Stunning Visual Stories
          </h2>
        </div>

        <div
          className="col-span-2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {" "}
          <h2 className=" text-5xl xl:text-6xl text-white p-5 pr-10 text-right mt-[200px]">
            With Our Creative Video Production
          </h2>
        </div>
      </div>

      <div className="border-b-2 border-ace-black p-5 pr-10 flex items-center justify-end gap-1">
        <h5 className="text-right">Get Started</h5>
        <ArrowRightDownIcon className="fill-ace-black" />
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
