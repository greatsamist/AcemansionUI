import Accordion from "../utils/Accordion";
import PageTitle from "../utils/PageTitle";

const HomeFaqs = () => {
  return (
    <div className="bg-ace-black py-24 mt-[120px] mb-[40px]">
      <div className="container mx-auto px-4">
        <PageTitle className="text-white" title="FAQS" sectionMargin={false} />

        <div className="flex flex-col gap-4 mt-8">
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFaqs;
