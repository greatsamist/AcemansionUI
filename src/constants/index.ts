import services4 from "../assets/images/home/services-4.jpg";
import services2 from "../assets/images/home/services-2.jpg";
import services3 from "../assets/images/home/services-3.jpg";
import services from "../assets/images/home/hero-1.jpg";
import ralph from "../assets/images/team/ralph.jpeg";
import ola from "../assets/images/team/ola.jpg";
import morgan from "../assets/images/team/morgan.jpg";
import laolu from "../assets/images/team/laolu.jpeg";
import sam from "../assets/images/team/sam.jpeg";
import bayo from "../assets/images/team/bayo.jpeg";
import mayor from "../assets/images/team/mayor.jpg";
import techglobal from "../assets/images/reviews/techglobal.jpg";
import vr from "../assets/images/reviews/vr.jpg";
import ayo from "../assets/images/reviews/ayo.jpg";
import mikeBabaEse from "../assets/images/cases/Mike-Abdul-Baba-Ese.jpg";

export const TESTIMONIALS_DATA = [
  {
    id: "1",
    text: "I worked with the Ace Mansion Team on a corporate project and was blown away by the results. Their team was professional, creative, and easy to work with. The final product exceeded our expectations and helped us achieved our marketing goals.",
    image: techglobal,
    name: "Akin Oduwole",
    job: "CEO Technology Global",
  },
  {
    id: "2",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: vr,
    name: "Veeki Royce",
    job: "Music Artist",
  },
  {
    id: "3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: mikeBabaEse,
    name: "Mike Abdul",
    job: "Music Artist",
  },
  {
    id: "4",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: ayo,
    name: "Israel Ayodeji",
    job: "CEO Web3Bridge",
  },
  {
    id: "5",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services,
    name: "Veeki Royce",
    job: "Music Artist",
  },
  {
    id: "6",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: services,
    name: "Veeki Royce",
    job: "Music Artist",
  },
];

export const TEAMS_DATA = [
  {
    id: "1",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: sam,
    name: "Samuel Ojo",
    job: "Producer",
  },
  {
    id: "2",
    text: "I worked with the Ace Mansion Team on a corporate project and was blown away by the results. Their team was professional, creative, and easy to work with. The final product exceeded our expectations and helped us achieved our marketing goals.",
    image: ralph,
    name: "Raphael Adekanye",
    job: "Director",
    instagram: "https://www.instagram.com/iamralphkanye/",
  },
  {
    id: "3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: ola,
    name: "Michael Wisdom",
    job: "Cinematographer",
  },
  {
    id: "4",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: morgan,
    name: "Lanre Morgan",
    job: "Cinematographer",
  },
  {
    id: "5",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: laolu,
    name: "Daniel Olatunde-Matthew",
    job: "DOP",
  },
  {
    id: "6",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: mayor,
    name: "Mayowa Victor",
    job: "Photographer",
    instagram: "https://www.instagram.com/p/CcUeiDgDCNA/",
  },
  {
    id: "7",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci, veritatis amet libero similique aliquid totam reiciendis impedit assumenda in necessitatibus odio sint voluptatem, et dolorum ex iure eum sit?",
    image: bayo,
    name: "Adebayo Kasali",
    job: "Lighting Specialists",
  },
];

export const SwiperBreakpoints = {
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1280: {
    slidesPerView: 5,
  },
  1528: {
    slidesPerView: 6,
  },
};

export const SERVICES_DATA = [
  {
    id: "1",
    image: services3,
    title: "Corporate Videos",
  },
  {
    id: "2",
    image: services2,
    title: "Event Coverage",
  },
  {
    id: "3",
    image: services4,
    title: "Music Videos",
  },
];

export const NAV_ITEMS = [
  {
    id: "1",
    link: "/about",
    label: "About",
  },
  {
    id: "2",
    link: "/cases",
    label: "Cases",
  },
  {
    id: "3",
    link: "/services",
    label: "Services",
  },
  {
    id: "4",
    link: "/team",
    label: "Our Team",
  },
];
