import SectionHeader from "../utils/SectionHeader";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "../utils/Reveal";
import { SERVICES_DATA } from "../../constants";

const HomeServices = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Our Services"
        subtitle="We offer a range of services to meet your video production needs"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
        {SERVICES_DATA.map(({ id, image, title }) => (
          <HomeServicesItem key={id} image={image} title={title} />
        ))}
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

const HomeServicesItem = ({ id, title, image }: HomeServicesItemProps) => {
  return (
    <Reveal width="100%" className="border-2 border-ace-black" key={id}>
      <div className="w-full h-[300px] overflow-hidden">
        <img
          className="object-cover object-[center_top] w-full h-full transition duration-300 delay-150 ease-in-out hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex items-center justify-center py-4 gap-1">
        <h4 className="text-2xl">{title}</h4>
        <ArrowDownRight size={30} />
      </div>
    </Reveal>
  );
};

export default HomeServices;
