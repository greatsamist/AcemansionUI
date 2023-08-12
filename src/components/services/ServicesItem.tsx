import goldBg from "../../assets/images/gold-bg.jpg";
import { cn } from "../../lib/utils";
interface ServicesItemProps {
  key: string;
  id?: string;
  title: string;
  image: string;
  order: number;
  bg?: string;
  description: string;
}

const ServicesItem = ({
  id,
  title,
  image,
  order,
  bg,
  description,
}: ServicesItemProps) => {
  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10")}
      key={id}
    >
      <div
        className={cn(
          "h-[250px]",
          order % 2 != 0 ? "lg:order-last" : "order-none"
        )}
      >
        <img className="object-cover w-full h-full" src={image} />
      </div>

      <div
        className={cn(
          "p-10 border-2",
          bg == "black"
            ? "text-white bg-ace-black border-white"
            : bg == "gold"
            ? "text-ace-black bg-ace-gold border-none bg-cover"
            : "border-ace-black"
        )}
        style={{ backgroundImage: bg == "gold" ? `url(${goldBg})` : "" }}
      >
        <h5 className="text-2xl mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
