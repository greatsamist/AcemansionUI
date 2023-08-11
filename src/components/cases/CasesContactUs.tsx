import ContactForm from "../form/ContactForm";
import ContactImage from "../../assets/images/home/hero-2.jpg";

const CasesContactUs = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
      <div>
        <img className="object-cover w-full h-full" src={ContactImage} />
      </div>
      <div>
        <h4 className="mb-8 text-4xl">
          If you want to implement your ideas into life, let us know
        </h4>
        <ContactForm isWhiteBorder buttonVariant="outline" />
      </div>
    </div>
  );
};

export default CasesContactUs;
