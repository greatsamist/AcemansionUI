import { cn } from "../../lib/utils";

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
      <h2 className="text-[30px] md:text-[40px]">{title}</h2>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
