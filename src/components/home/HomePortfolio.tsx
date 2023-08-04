import play from "../../assets/images/home/play.png";
import sampleImage from "../../assets/images/home/homeHero.jpg";
import sampleImage2 from "../../assets/images/home/smpl.png";
import sampleImage3 from "../../assets/images/home/smpl2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePortfolio = () => {
  const PORTFOLIOS = [
    sampleImage,
    sampleImage2,
    sampleImage,
    sampleImage3,
    sampleImage,
    sampleImage2,
    sampleImage3,
  ];

  return (
    <div className="py-16">
      <Swiper
        // effect="coverflow"
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 200,
        //   modifier: 1,
        // }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="swiper-container"
      >
        {PORTFOLIOS.map((i) => {
          return (
            <SwiperSlide className="swiper-slide">
              <img className="slide-image cursor-pointer" src={i} alt="" />
              <img className="play-button" width="50px" src={play} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomePortfolio;
