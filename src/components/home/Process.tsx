import PageTitle from "../utils/PageTitle";
import goldBg from "../../assets/images/gold-bg.jpg";

const Process = () => {
  return (
    <div className="container mx-auto px-4">
      <PageTitle
        isCentered
        title="Our Process"
        subtitle="When you work with us, we will guide you through our production process, which includes"
      />

      <div className="grid grid-cols-9 grid-rows-5 mt-16 text-white">
        <div className="text-right bg-ace-black col-span-4 p-6">
          <h5>Consultation</h5>
          <p>
            We will talk with you about project and your goals for the video
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-end">
          <div className="bg-ace-gold h-5 w-5 rounded-full"></div>
          <div className="bg-ace-black h-2/4 w-1"></div>
        </div>
        <div className="col-span-4"></div>
        <div className="col-span-4"></div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="bg-ace-black h-2/4 w-1"></div>
          <div className="absolute bg-ace-gold h-5 w-5 rounded-full"></div>
          <div className="bg-ace-black h-2/4 w-1"></div>
        </div>
        <div
          className="col-span-4 bg-ace-gold p-6 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h5>Planning</h5>
          <p>
            We will work with you to plan the video, including scripting,
            storyboarding and location scouting.
          </p>
        </div>

        {/* ////////////////////////////////// */}

        <div className="text-right bg-ace-black col-span-4 p-6">
          <h5>Filming</h5>
          <p>
            Our team will film the video using high-quality equipment and
            techniques
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="bg-ace-black h-2/4 w-1"></div>
          <div className="absolute bg-ace-gold h-5 w-5 rounded-full"></div>
          <div className="bg-ace-black h-2/4 w-1"></div>
        </div>
        <div className="col-span-4"></div>

        {/* ////////////////////////////// */}
        <div className="col-span-4"></div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="bg-ace-black h-2/4 w-1"></div>
          <div className="absolute bg-ace-gold h-5 w-5 rounded-full"></div>
          <div className="bg-ace-black h-2/4 w-1"></div>
        </div>
        <div className="col-span-4  bg-ace-gold p-6">
          <h5>Editing</h5>
          <p>
            We will talk with you about project and your goals for the video
          </p>
        </div>

        {/* /////////////////////////////////////// */}

        <div
          className="col-span-4 bg-ace-gold p-6 text-right bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h5>Review</h5>
          <p className="w-full xl:w-4/5 ">
            We will edit your footage to create a polished final product
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-start">
          <div className="bg-ace-black h-2/4 w-1"></div>
          <div className="bg-ace-gold h-5 w-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
