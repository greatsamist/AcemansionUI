import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  sectionMargin?: boolean;
  isCentered?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  className,
  sectionMargin = true,
  isCentered = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        sectionMargin ? "mt-[80px] md:mt-[120px] mb-[40px]" : "",
        isCentered ? "text-center" : "",
        className
      )}
    >
      <Reveal width="100%" bg="gold">
        <h2 className="text-[30px] md:text-[40px]">{title}</h2>
      </Reveal>
      <Reveal width="100%">
        <p className="mt-2">{subtitle}</p>
      </Reveal>
    </div>
  );
};

export default SectionHeader;
