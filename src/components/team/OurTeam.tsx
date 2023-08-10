import { useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import PageTitle from "../utils/PageTitle";
import { cn } from "../../lib/utils";
import { TESTIMONIALS_DATA } from "../home/HomeReview";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurTeam = () => {
  const [activeReview, setActiveReview] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleReviewClick = (index: number) => {
    setActiveReview(index);
  };
  return (
    <>
      <div className="container mx-auto px-4 xl:mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <PageTitle title="Meet Our Team" />

          <div className="flex items-center gap-2 sm:mt-[80px] md:mt-[120px] mb-[40px]">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer"
            >
              <ArrowLeftCircle size="55" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
            >
              <ArrowRightCircle size="55" />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1204: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1528: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        // onActiveIndexChange={(swiperCore) => {
        //   setActiveReview(swiperCore.activeIndex);
        // }}
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

export default OurTeam;
