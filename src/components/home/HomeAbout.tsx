import SectionHeader from "../utils/SectionHeader";
import aboutImage from "../../assets/images/home/hero-2.jpg";
import goldBg from "../../assets/images/gold-bg.jpg";
import { ArrowDownRight } from "lucide-react";
import { COLORS } from "../../lib/utils";
import { Link } from "react-router-dom";
import { Reveal } from "../utils/Reveal";

const HomeAbout = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeader title="About Ace Mansion Studio" />
      <div className="grid grid-cols-1 lg:grid-cols-8 grid-rows-1 lg:grid-rows-17 gap-y-4 lg:gap-y-0 lg:gap-x-4 mb-5">
        <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-17">
          <Reveal position="left">
            <img className="object-cover w-full h-full" src={aboutImage} />
          </Reveal>
        </div>

        <div className="hidden lg:block lg:col-span-2 row-span-1 lg:row-span-8"></div>
        <div className="lg:col-span-2 lg:row-span-8 border-2 p-8 border-ace-black">
          <Reveal>
            <h5>1,200%</h5>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-sm">
              By such a percentage our video increase the sales of our customers
            </p>
          </Reveal>
        </div>

        <div></div>
        <div className="col-span-1 lg:col-span-4 row-span-2 lg:row-span-8 border-2 p-6 border-ace-black">
          <Reveal>
            <h5>3 Years</h5>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-sm">
              Our video production team as been in operation, and we have a team
              of experienced professionals who are passionate about creating
              high-quality videos.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-4">
        <div className="col-span-1 lg:col-span-4 border-2 p-8 border-ace-black">
          <Reveal>
            <h5>
              {`>`}285 <span className="block">Projects</span>
            </h5>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-sm">
              We specialize in a variety of video types, including corporate
              videos, promotional videos, event coverage, music videos, live
              streaming and more.
            </p>
          </Reveal>
        </div>

        <Link
          to="team"
          className="min-h-[200px] bg-ace-black col-span-1 lg:col-span-3 flex items-center justify-center"
        >
          <Reveal>
            <h5 className="text-ace-gold ">Meet Our Team</h5>
          </Reveal>
          <ArrowDownRight size={35} color={COLORS.aceGold} />
        </Link>

        <div
          className="min-h-[200px]  bg-cover bg-center bg-no-repeat border-r-2 col-span-1 lg:col-span-3"
          style={{ backgroundImage: `url(${goldBg})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomeAbout;
