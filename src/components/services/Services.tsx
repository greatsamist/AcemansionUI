import SectionHeader from "../utils/SectionHeader";
import ServicesItem from "./ServicesItem";

import { ServicesData } from "../../constants/services";

const Services = () => {
  return (
    <div className="container mx-auto px-4 mb-[80px]">
      <SectionHeader
        title="Our Services"
        subtitle=" At Ace Mansion Studio, we live and breathe the art of video
        production. Our passion is fueled by the magic of turning ideas into
        captivating visual narratives that leave a lasting impression. With
        every project, we blend creativity, expertise, and cutting-edge
        technology to create videos that resonate, inspire, and drive results.
        we offer a wide range of video production services to meet your unique
        needs. Explore our services below:"
      />

      {ServicesData.map(({ id, title, image, description, bg }, index) => {
        return (
          <ServicesItem
            key={id}
            title={title}
            order={index}
            description={description}
            image={image}
            bg={bg}
          />
        );
      })}
    </div>
  );
};

export default Services;
