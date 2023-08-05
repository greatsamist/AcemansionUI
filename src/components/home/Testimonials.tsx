// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS_DATA = [
  {
    id: "1",
    title: "An Intense Experience",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-1.jpg",
    name: "Veekie Royice",
    job: "Music Artist",
  },
  {
    id: "2",
    title: "An Intense Experience",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-1.jpg",
    name: "Veekie Royice",
    job: "Music Artist",
  },
  {
    id: "3",
    title: "An Intense Experience",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-1.jpg",
    name: "Veekie Royice",
    job: "Music Artist",
  },
  {
    id: "4",
    title: "Visually Over-Powering",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-1.jpg",
    name: "Veekie Royice",
    job: "Music Artist",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 my-36 w-full lg:w-11/12">
      <Swiper
        slidesPerView={1}
        spaceBetween={80}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        }}
        className="swiper-testimonial"
      >
        {TESTIMONIALS_DATA.map(({ id, title, text, image, name, job }) => {
          return (
            <SwiperSlide className="swiper-slide" key={id}>
              <div className="flex flex-col gap-3 border-l border-ace-gold pl-8">
                <h3 className="text-[35px] tracking-wider leading-none">{`"${title}"`}</h3>
                <p className="text-gray-400 text-sm leading-7">{`"${text}"`}</p>

                <div className="flex items-start justify-start mt-5 gap-4">
                  <div className="w-[53px] h-[53px]">
                    <img className="w-full object-cover" src={image} />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="tracking-[4px] text-lg">{name}</h4>
                    <p className="text-ace-gold text-sm">{job}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
