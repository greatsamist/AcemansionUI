import SectionHeader from "../utils/SectionHeader";
import goldBg from "../../assets/images/gold-bg.jpg";
import { cn } from "../../lib/utils";
import { CSSProperties } from "react";
import { Reveal } from "../utils/Reveal";

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

interface ProcessLineProps {
  isStart?: boolean;
  isLast?: boolean;
  className?: string;
}

const ProcessLine = ({ isStart, isLast, className }: ProcessLineProps) => {
  return (
    <div
      className={cn(
        "col-span-1 flex flex-col items-center ",
        isStart ? "justify-end" : isLast ? "justify-start" : "justify-center",
        className
      )}
    >
      <div
        className={cn(isStart ? "hidden" : "", "bg-ace-black h-2/4 w-1")}
      ></div>
      <div
        className={cn(
          isLast || isStart ? "" : "absolute",
          "bg-ace-gold h-5 w-5 rounded-full"
        )}
      ></div>
      <div
        className={cn(isLast ? "hidden" : "", "bg-ace-black h-2/4 w-1")}
      ></div>
    </div>
  );
};
interface ProcessContentProps {
  title?: string;
  text?: string;
  className?: string;
  style?: CSSProperties;
  bg?: boolean;
}

const ProcessContent = ({
  title,
  text,
  className = "text-right",
  bg,
}: ProcessContentProps) => {
  return (
    <div
      className={cn(
        "col-span-8 md:col-span-4 p-6 mb-4 md:mb-0",
        bg ? "bg-ace-gold bg-center bg-no-repeat bg-cover" : "bg-ace-black",
        className
      )}
      style={bg ? { backgroundImage: `url(${goldBg})` } : {}}
    >
      <Reveal>
        <h5>{title}</h5>
      </Reveal>
      <Reveal>
        <p>{text}</p>
      </Reveal>
    </div>
  );
};

export default Process;
