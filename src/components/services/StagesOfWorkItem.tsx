import { useRef } from "react";
import { cn } from "../../lib/utils";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import goldBg from "../../assets/images/gold-bg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Stage {
  subtitle?: string;
  description?: string;
  bg?: string;
  stageId?: string;
}

interface StagesOfWorkItemProps {
  id?: string;
  title: string;
  stage: Stage[];
  order: number;
}

const StagesOfWorkItem = ({
  id,
  title,
  stage,
  order,
}: StagesOfWorkItemProps) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <>
      <div className="flex items-center justify-between mt-14 mb-3" key={id}>
        <h5
          className={cn(
            "text-2xl",
            order % 2 != 0 ? "order-last" : "order-none"
          )}
        >
          {title}
        </h5>
        <div className="flex items-center gap-4">
          <ArrowLeftCircle
            size={35}
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer"
          />
          <ArrowRightCircle
            size={35}
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer"
          />
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="swiper-stages"
      >
        {stage?.map(({ subtitle, description, bg, stageId }) => {
          return (
            <SwiperSlide key={stageId}>
              <div
                className={cn(
                  "p-10 text-black h-[300px] sm:h-[250px] overflow-auto",
                  bg == "white"
                    ? "bg-white"
                    : bg == "gold"
                    ? "bg-gold bg-cover"
                    : "border-2 border-white text-white"
                )}
                style={{
                  backgroundImage: bg == "gold" ? `url(${goldBg})` : "",
                }}
              >
                <h3 className="text-xl mb-3">{subtitle}</h3>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default StagesOfWorkItem;
