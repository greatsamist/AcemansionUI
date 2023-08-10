import PageTitle from "../utils/PageTitle";
import goldBg from "../../assets/images/gold-bg.jpg";
import aboutImage from "../../assets/images/home/hero-1.jpg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4">
      <PageTitle title="Why Choose Us?" />

      <div className="grid grid-cols-1 lg:grid-cols-8 grid-rows-1 lg:grid-rows-17 gap-y-4 lg:gap-y-0 lg:gap-x-4 mb-5">
        <div className="lg:col-span-3 lg:row-span-8 border-2 p-8 border-ace-black">
          <h5>High Quality Final Product</h5>
          <p className="mt-2 text-sm">
            We strive to exceed expectations and deliver video that align with
            clients' goals
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-1 row-span-1 lg:row-span-8"></div>

        <div className="col-span-1 order-first lg:order-none lg:col-span-4 row-span-1 lg:row-span-17">
          <img className="object-cover w-full h-full" src={aboutImage} />
        </div>

        <div></div>
        <div className="col-span-1 lg:col-span-4 row-span-2 lg:row-span-8 border-2 p-6 border-ace-black">
          <h5>Customized approach for each project</h5>
          <p className="mt-2 text-sm">
            Our video production team as been in operation, and we have a team
            of experienced professionals who are passionate about creating
            high-quality videos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="min-h-[200px] bg-ace-black col-span-1 lg:col-span-3 flex items-center justify-center">
          <h5 className="text-ace-gold text-center">Competitive Pricing</h5>
        </div>

        <div
          className="min-h-[200px] grid place-items-center text-center bg-cover bg-center bg-no-repeat border-r-2 col-span-1 lg:col-span-3"
          style={{ backgroundImage: `url(${goldBg})` }}
        >
          <h5 className="text-ace-black">Experience And Creative Team</h5>
        </div>

        <div className="col-span-1 order-first lg:order-none lg:col-span-4 border-2 p-8 border-ace-black">
          <h5>state-of-the-art equipment and techniques</h5>
          <p className="mt-2 text-sm">
            Our team has worked on numerous projects across various industries,
            giving us a deep understanding of what works best for different
            client and audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
