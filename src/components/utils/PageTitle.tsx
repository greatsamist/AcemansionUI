interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="mt-[120px] mb-[40px]">
      <h2 className="text-[50px]">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
