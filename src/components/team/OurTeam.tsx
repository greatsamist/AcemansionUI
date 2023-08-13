import { useRef, useState } from "react";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Instagram,
  Twitter,
} from "lucide-react";
import SectionHeader from "../utils/SectionHeader";
import { cn } from "../../lib/utils";
import { SwiperBreakpoints, TEAMS_DATA } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const [activeMember, setActiveMember] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleMemberClick = (index: number) => {
    setActiveMember(index);
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <SectionHeader title="Meet Our Team" />

          <div className="flex items-center gap-2 sm:mt-[80px] md:mt-[120px] mb-[40px]">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer"
            >
              <ArrowLeftCircle size="40" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
            >
              <ArrowRightCircle size="40" />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        breakpoints={SwiperBreakpoints}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="swiper-review"
      >
        {TEAMS_DATA.map(({ id, image }, index) => {
          return (
            <SwiperSlide
              className="swiper-slide cursor-pointer"
              key={id}
              onClick={() => handleMemberClick(index)}
            >
              <div
                className={cn(
                  activeMember == index
                    ? "border-8 border-ace-gold"
                    : "grayscale-[80%]",
                  "overflow-hidden h-[400px]"
                )}
              >
                <img
                  src={image}
                  className="transition-all object-cover w-full h-full delay-150 duration-300 ease-in-out hover:scale-105"
                  alt="name"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="container mx-auto px-4 mb-28">
        <div className="border-2 border-ace-black p-10 mt-10 text-center">
          <h4 className="text-2xl">{`${TEAMS_DATA[activeMember].name}., ${TEAMS_DATA[activeMember].job}`}</h4>
          <p className="w-10/12 lg:w-8/12 mx-auto mt-3 text-lg">
            {TEAMS_DATA[activeMember].text}
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link
              to={`${TEAMS_DATA[activeMember]?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
