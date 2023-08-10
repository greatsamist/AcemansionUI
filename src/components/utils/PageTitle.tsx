import { cn } from "../../lib/utils";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  sectionMargin?: boolean;
  isCentered?: boolean;
}

const PageTitle = ({
  title,
  subtitle,
  className,
  sectionMargin = true,
  isCentered = false,
}: PageTitleProps) => {
  return (
    <div
      className={cn(
        sectionMargin ? "mt-[80px] md:mt-[120px] mb-[40px]" : "",
        isCentered ? "text-center" : ""
      )}
    >
      <h2 className={cn("text-[30px] md:text-[40px]", className)}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
