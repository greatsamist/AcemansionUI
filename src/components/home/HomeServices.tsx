import PageTitle from "../utils/PageTitle";
import services4 from "../../assets/images/home/services-4.jpg";
import services2 from "../../assets/images/home/services-2.jpg";
import services3 from "../../assets/images/home/services-3.jpg";
import ArrowRightDownIcon from "../../assets/icons/ArrowRightDownIcon";

const SERVICES = [
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

const HomeServices = () => {
  return (
    <div className="container mx-auto px-4">
      <PageTitle
        title="Our Services"
        subtitle="We offer a range of services to meet your video production needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SERVICES.map(({ id, image, title }) => (
          <HomeServicesItem key={id} image={image} title={title} />
        ))}
      </div>
    </div>
  );
};

const HomeServicesItem = ({ id, title, image }: HomeServicesItemProps) => {
  return (
    <div className="border-2 border-ace-black" key={id}>
      <div className="w-full h-[300px] overflow-hidden">
        <img
          className="object-cover object-[center_top] w-full h-full transition duration-300 delay-150 ease-in-out hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex items-center justify-center py-4 gap-1">
        <h4 className="text-2xl">{title}</h4>
        <ArrowRightDownIcon />
      </div>
    </div>
  );
};

interface HomeServicesItemProps {
  key: string;
  id?: string;
  title: string;
  image: string;
}

export default HomeServices;
