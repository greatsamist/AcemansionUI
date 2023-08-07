import { useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import PageTitle from "../utils/PageTitle";
import services4 from "../../assets/images/home/services-4.jpg";
import services2 from "../../assets/images/home/services-2.jpg";
import services3 from "../../assets/images/home/services-3.jpg";
import services from "../../assets/images/home/hero-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "../../lib/utils";

const TESTIMONIALS_DATA = [
  {
    id: "1",
    text: "I worked with the Ace Mansion Team on a corporate project and was blown away by the results. Their team was professional, creative, and easy to work with. The final product exceeded our expectations and helped us achieved our marketing goals.",
    image: services4,
    name: "Akin Oduwole",
    job: "Managing Director",
  },
  {
    id: "2",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services,
    name: "Veekie Royice",
    job: "Music Artist",
  },
  {
    id: "3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services3,
    name: "Mike Abdul",
    job: "Music Artist",
  },
  {
    id: "4",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services2,
    name: "Israel Ayodeji",
    job: "CEO Web3Bridge",
  },
  {
    id: "5",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services3,
    name: "Veekie Royice",
    job: "Music Artist",
  },
];

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

          <div className="flex items-center gap-2 mt-[120px] mb-[40px]">
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
        modules={[Autoplay, Navigation, Pagination]}
        // loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1204: {
            slidesPerView: 4,
            spaceBetween: 50,
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
                  "overflow-hidden w-[300px] h-[300px]"
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
          <h4 className="text-2xl leading-none">{`${TESTIMONIALS_DATA[activeReview].name}., ${TESTIMONIALS_DATA[activeReview].job}`}</h4>
          <p className="w-10/12 lg:w-8/12 mx-auto mt-3 text-lg">
            {TESTIMONIALS_DATA[activeReview].text}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeReview;
