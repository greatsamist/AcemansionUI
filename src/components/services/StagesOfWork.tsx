import SectionHeader from "../utils/SectionHeader";
import { WorkStages } from "../../constants/services";
import StagesOfWorkItem from "./StagesOfWorkItem";

const StageOfWork = () => {
  return (
    <div className="bg-ace-black text-white pt-[80px] md:pt-[120px] pb-[40px]">
      <div className="container mx-auto px-4">
        <SectionHeader
          className="mb-[40px]"
          sectionMargin={false}
          title="Stages of Work"
          subtitle="Creating captivating videos is a multi-faceted process that involves careful planning, meticulous execution, and a creative touch that brings your vision to life. Our video production journey is divided into several distinct stages, each essential in shaping your final masterpiece. From the initial concept development to the moment we deliver your video, we're committed to delivering excellence at every step. Discover the stages that go into crafting exceptional videos that engage, inspire, and leave a lasting impact."
        />

        {WorkStages.map(({ id, title, stage }, index) => {
          return (
            <StagesOfWorkItem
              order={index}
              key={id}
              title={title}
              stage={stage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StageOfWork;
