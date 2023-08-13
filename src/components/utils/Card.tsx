import { Reveal } from "./Reveal";

export const CardHeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Reveal>
      <h2 className="text-4xl lg:text-5xl xl:text-[55px] container mx-auto">
        {children}
      </h2>
    </Reveal>
  );
};
