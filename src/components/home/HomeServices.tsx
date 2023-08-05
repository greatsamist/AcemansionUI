import PageTitle from "../utils/PageTitle";
import sample from "../../assets/images/home/homeHero.jpg";
import ArrowRightDownIcon from "../../assets/icons/ArrowRightDownIcon";

const HomeServices = () => {
  return (
    <div className="container mx-auto">
      <PageTitle
        title="Our Services"
        subtitle="We offer a range of services to meet your video production needs"
      />

      <div className="grid grid-cols-3">
        <div className="border-2 border-ace-black">
          <img src={sample} />
          <div className="flex items-center justify-center py-4 gap-1">
            <h4 className="text-2xl">Corporate Videos</h4>
            <ArrowRightDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
