import { ArrowDownRight } from "lucide-react";
import casesImage from "../../assets/images/home/cases-1.jpg";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
const HomeCases = () => {
  return (
    <>
      <div className="bg-ace-black text-white mt-[80px] md:mt-[120px] px-4 py-24">
        <div className="container mx-auto">
          <h2 className="text-[30px] md:text-[40px] mb-4">
            We are proud of the work{" "}
            <span className="md:block">we've done for our clients</span>
          </h2>
          <p>
            Here are some examples of how we've helped business and{" "}
            <span className="md:block">
              individuals bring their vision to life through video:
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-3 lg:gap-3 mt-10 ">
            <div
              className="col-span-3 border-2 border-bg-white bg-cover bg-center bg-no-repeat overflow-hidden h-auto"
              style={{ backgroundImage: `url(${casesImage})` }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=w27q1JukvJY"
                width="100%"
                controls
              />
            </div>

            <div className="col-span-2 bg-white text-ace-black p-8 flex flex-col gap-3">
              <h5 className="text-2xl">Music Videos for Veekie Royce</h5>
              <p>
                Wanted to enhance their brand image and effectively communicate
                their product offerings to their target audience
              </p>
              <p>
                The professionally produced video effectively the client's brand
                message, enhanced their market presence, and contributed to
                their overall business success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-ace-black py-5 px-4">
        <Link to="cases">
          <div className="container mx-auto flex items-center justify-end gap-1">
            <h5 className="text-right">See More Cases</h5>
            <ArrowDownRight size={30} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeCases;
