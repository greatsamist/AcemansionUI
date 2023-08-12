import { useRef, useState } from "react";
import { SwiperBreakpoints } from "../../constants";
import { CASES_DATA } from "../../constants/cases";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { COLORS, cn } from "../../lib/utils";
import SectionHeader from "../utils/SectionHeader";
import ReactPlayer from "react-player/youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CasesContactUs from "./CasesContactUs";

const Cases = () => {
  const [activeCase, setActiveCase] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleCaseClick = (index: number) => {
    setActiveCase(index);
  };

  return (
    <div className="bg-ace-black text-white pb-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <SectionHeader title="Cases" />

          <div className="flex items-center gap-2 mt-[80px] md:mt-[120px] mb-[40px]">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className={"cursor-pointer"}
            >
              <ArrowLeftCircle
                color={activeCase == 0 ? "gray" : COLORS.aceGold}
                size="40"
              />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
            >
              <ArrowRightCircle
                color={
                  activeCase == CASES_DATA.length - 1 ? "gray" : COLORS.aceGold
                }
                size="40"
              />
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
        // onActiveIndexChange={(swiperCore) => {
        //   setActiveCase(swiperCore.activeIndex);
        // }}
        className="swiper-cases"
        pagination={true}
      >
        {CASES_DATA.map(({ id, image }, index) => {
          return (
            <SwiperSlide
              className="swiper-slide cursor-pointer"
              key={id}
              onClick={() => handleCaseClick(index)}
            >
              <div
                className={cn(
                  activeCase == index
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

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 px-4 mt-20 gap-5 lg:gap-20">
        <div className="col-span-1 lg:col-span-2">
          <h4 className="text-4xl">{CASES_DATA[activeCase]?.title}</h4>
          <div className="mt-10 h-[700px]">
            <img
              src={CASES_DATA[activeCase]?.image}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 grid">
          <div>
            {CASES_DATA[activeCase]?.bts ? (
              <ReactPlayer
                url={CASES_DATA[activeCase]?.bts}
                width="100%"
                controls
              />
            ) : (
              <img src={CASES_DATA[activeCase]?.image} />
            )}
          </div>
          <h5 className="mt-10">The Objective</h5>
          <p className="mt-3">{CASES_DATA[activeCase]?.objective}</p>

          <h5 className="mt-10">The Result</h5>
          <p className="mt-3 mb-8 lg:mb-10">{CASES_DATA[activeCase]?.result}</p>
        </div>
      </div>

      <div className="relative mt-24 h-[600px]">
        <ReactPlayer
          url={CASES_DATA[activeCase]?.video}
          width="100%"
          height="600px"
          controls
        />
      </div>

      <CasesContactUs />
    </div>
  );
};

export default Cases;
