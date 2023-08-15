import SectionHeader from "../utils/SectionHeader";
import { ProcessContent, ProcessLine } from "./ProcessContent";

const Process = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        isCentered
        title="Our Process"
        subtitle="When you work with us, we will guide you through our production process, which includes"
      />

      <div className="grid grid-cols-9 grid-rows-5 mt-16 text-white">
        <ProcessContent
          title="Consultation"
          text="We will talk with you about project and your goals for the video"
        />
        <ProcessLine isStart />
        <div className="hidden md:block md:col-span-4"></div>

        {/* ////////////////////////////////// */}
        <div className="hidden md:block md:col-span-4"></div>
        <ProcessLine className="hidden md:flex" />
        <ProcessContent
          title="Planning"
          text="We will work with you to plan the video, including scripting,
          storyboarding and location scouting."
          className="text-right md:text-left"
          bg
        />
        <ProcessLine className="flex md:hidden" />
        {/* ////////////////////////////////// */}
        <ProcessContent
          title="Filming"
          text="Our team will film the video using high-quality equipment and
          techniques"
        />
        <ProcessLine />
        <div className="hidden md:block md:col-span-4"></div>

        {/* ////////////////////////////// */}
        <div className="hidden md:block md:col-span-4"></div>
        <ProcessLine className="hidden md:flex" />
        <ProcessContent
          title="Editing"
          text="We will talk with you about project and your goals for the video"
          className="text-right md:text-left bg-ace-gold"
        />
        <ProcessLine className="flex md:hidden" />

        {/* /////////////////////////////////////// */}
        <ProcessContent
          title="Review"
          text="We will edit your footage to create a polished final product"
          bg
        />
        <ProcessLine isLast />
      </div>
    </div>
  );
};

export default Process;
