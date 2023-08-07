import { cn } from "../../lib/utils";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  sectionMargin?: boolean;
}

const PageTitle = ({
  title,
  subtitle,
  className,
  sectionMargin = true,
}: PageTitleProps) => {
  return (
    <div className={sectionMargin ? "mt-[80px] md:mt-[120px] mb-[40px]" : ""}>
      <h2 className={cn("text-[30px] md:text-[40px] leading-none", className)}>
        {title}
      </h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
