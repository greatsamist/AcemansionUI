import SectionHeader from "../utils/SectionHeader";
import aboutImage from "../../assets/images/home/hero-2.jpg";
import ContactForm from "../form/ContactForm";

const HomeContactUs = () => {
  return (
    <div className="container mx-auto px-4 pb-28">
      <SectionHeader title="Contact Us Today To learn how we can help bring your vision to life" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="">
          <img className="object-cover" src={aboutImage} />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeContactUs;
