import play from "../../assets/images/home/play.png";
import sampleImage from "../../assets/images/home/homeHero.jpg";

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
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,
    sampleImage,
  ];

  return (
    <div className="py-16">
      <Swiper
        effect="coverflow"
        initialSlide={1}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoHeight={true}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          850: {
            slidesPerView: 2,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false, // Disable shadows to make it smoother
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="swiper-container"
      >
        {PORTFOLIOS.map((image, idx) => {
          return (
            <SwiperSlide className="swiper-slide" key={idx}>
              <img className="slide-image cursor-pointer" src={image} alt="" />
              <img className="play-button" width="50px" src={play} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomePortfolio;
