import { ArrowDownRight } from "lucide-react";
import casesImage from "../../assets/images/home/cases-1.jpg";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { Reveal } from "../utils/Reveal";
const HomeCases = () => {
  return (
    <>
      <div className="bg-ace-black text-white mt-[80px] md:mt-[120px] px-4 py-24">
        <div className="container mx-auto">
          <Reveal>
            <h2 className="text-[30px] md:text-[40px] mb-4">
              We are proud of the work{" "}
              <span className="md:block">we've done for our clients</span>
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Here are some examples of how we've helped business and{" "}
              <span className="md:block">
                individuals bring their vision to life through video:
              </span>
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-3 lg:gap-3 mt-10 ">
            <div
              className="col-span-3 border-2 border-bg-white bg-cover bg-center bg-no-repeat overflow-hidden h-[350px] lg:h-auto"
              style={{ backgroundImage: `url(${casesImage})` }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=w27q1JukvJY"
                width="100%"
                height="100%"
                controls
              />
            </div>

            <div className="col-span-2 bg-white text-ace-black p-8 flex flex-col gap-3">
              <Reveal>
                <h5 className="text-2xl">Music Videos for Veeki Royce</h5>
              </Reveal>
              <Reveal>
                <p>
                  Wanted to visually depict a strong and unwavering commitment,
                  both spiritually and emotionally. The goal was to capture the
                  essence of a devoted individual's journey with a higher power,
                  emphasizing the idea of a lasting and unbreakable bond. The
                  video aimed to convey a sense of loyalty, determination, and
                  willingness to go the distance in this profound connection.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  The project yielded a visually engaging music video that
                  effectively conveyed the themes of dedication, loyalty, and
                  spiritual devotion present in the lyrics. Through a
                  combination of visual storytelling and emotive aesthetics, the
                  video successfully brought the song's sentiments to life.
                </p>
              </Reveal>
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
