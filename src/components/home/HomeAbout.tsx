import PageTitle from "../utils/PageTitle";
import heroImage from "../../assets/images/home/homeHero.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import ArrowRightDownIcon from "../../assets/icons/ArrowRightDownIcon";

const HomeAbout = () => {
  return (
    <div className="container mx-auto">
      <PageTitle title="About Ace Mansion Studio" />

      <div className="grid grid-cols-8 grid-rows-2 gap-x-4 mb-5">
        <div className="col-span-4 row-span-2">
          <img className="object-cover w-full h-full" src={heroImage} />
        </div>
        <div className="col-span-2 row-span-1"></div>
        <div className="col-span-2 row-span-1 border-2 p-6 border-ace-black">
          <h5>1,200%</h5>
          <p className="mt-2 text-sm">
            By such a percentage our video increase the sales of our customers
          </p>
        </div>

        <div className="col-span-4 row-span-2 border-2 p-6 border-ace-black">
          <h5>4 Years</h5>
          <p className="mt-2 text-sm">
            Our video production team as been in operation, and we have a team
            of experienced professionals who are passionate about creating
            high-quality videos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-4 border-2 p-6 border-ace-black">
          <h5 className="leading-none">
            {`>`}685 <span className="block">Projects</span>
          </h5>
          <p className="mt-2 text-sm">
            We specialize in a variety of video types, including corporate
            videos, promotional videos, event coverage, music videos, live
            streaming and more.
          </p>
        </div>

        <div className="bg-ace-black col-span-3 flex items-center justify-center">
          <h5 className="text-ace-gold ">Meet Our Team</h5>
          <ArrowRightDownIcon className="fill-ace-gold" />
        </div>

        <div
          className="bg-cover bg-center bg-no-repeat border-r-2 col-span-3"
          style={{ backgroundImage: `url(${goldBg})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomeAbout;
