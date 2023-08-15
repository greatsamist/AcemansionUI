import { CSSProperties } from "react";
import { cn } from "../../lib/utils";
import { Reveal } from "../utils/Reveal";
import goldBg from "../../assets/images/gold-bg.jpg";

interface ProcessContentProps {
  title?: string;
  text?: string;
  className?: string;
  style?: CSSProperties;
  bg?: boolean;
}

export const ProcessContent = ({
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
      <Reveal width="100%">
        <h5>{title}</h5>
      </Reveal>
      <Reveal width="100%">
        <p>{text}</p>
      </Reveal>
    </div>
  );
};

interface ProcessLineProps {
  isStart?: boolean;
  isLast?: boolean;
  className?: string;
}

export const ProcessLine = ({
  isStart,
  isLast,
  className,
}: ProcessLineProps) => {
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
