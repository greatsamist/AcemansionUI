import { useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import PageTitle from "../utils/PageTitle";
import { SwiperBreakpoints, TESTIMONIALS_DATA } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "../../lib/utils";

const HomeReview = () => {
  const [activeReview, setActiveReview] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleReviewClick = (index: number) => {
    setActiveReview(index);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <PageTitle title="Reviews" />

          <div className="flex items-center gap-2 mt-[80px] md:mt-[120px] mb-[40px]">
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
        breakpoints={SwiperBreakpoints}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="swiper-review"
      >
        {TESTIMONIALS_DATA.map(({ id, image }, index) => {
          return (
            <SwiperSlide
              className="swiper-slide cursor-pointer"
              key={id}
              onClick={() => handleReviewClick(index)}
            >
              <div
                className={cn(
                  activeReview == index
                    ? "border-8 border-ace-gold"
                    : "grayscale-[80%]",
                  "overflow-hidden h-[350px]"
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

      <div className="container mx-auto px-4">
        <div className="border-2 border-ace-black  p-10 mt-10 text-center">
          <h4 className="text-2xl">{`${TESTIMONIALS_DATA[activeReview].name}., ${TESTIMONIALS_DATA[activeReview].job}`}</h4>
          <p className="w-10/12 lg:w-8/12 mx-auto mt-3 text-lg">
            {TESTIMONIALS_DATA[activeReview].text}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeReview;
