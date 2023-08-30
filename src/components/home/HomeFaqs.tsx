import Accordion from "../utils/Accordion";
import SectionHeader from "../utils/SectionHeader";

const HomeFaqs = () => {
  return (
    <div className="bg-ace-black py-24 mt-[120px] mb-[40px]">
      <div className="container mx-auto px-4">
        <SectionHeader
          className="text-white"
          title="FAQS"
          sectionMargin={false}
        />

        <div className="flex flex-col gap-4 mt-8">
          <Accordion
            question="What Types of Video do you produce?"
            answer="We produce a variety of video types, including corporate videos, music videos, promotional videos, event coverage, weddings film, live streaming and more. Contact us to discuss specific video production needs."
          />
          <Accordion
            question="Can you help with the creative process and concept development?"
            answer="Absolutely! We offer comprehensive creative services, starting from brainstorming ideas to developing a compelling concept that aligns with your vision and goals."
          />
          <Accordion
            question="What is the typical video production timeline?"
            answer="The timeline varies depending on the complexity of the project. Pre-production (planning and scripting) usually takes a few weeks, filming can take a day or more, and post-production (editing and finalizing) typically takes a few weeks as well."
          />
          <Accordion
            question="Do you handle all aspects of production, including filming and editing?"
            answer="Yes, we offer end-to-end video production services, from capturing footage to editing, adding effects, and finalizing the video."
          />
          <Accordion
            question="What factors affect the cost of video production?"
            answer="The cost can be influenced by factors such as video length, complexity of the production, location, equipment requirements, animation needs, and post-production demands."
          />
          <Accordion
            question="Can I provide input during the editing process?"
            answer="Absolutely! We value your input and encourage collaboration throughout the editing process to ensure the final product meets your expectations."
          />
          <Accordion
            question="What if I have a limited budget for video production?"
            answer="We understand budget constraints and can work with you to find creative solutions that maximize the value of your project within your budget."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFaqs;
