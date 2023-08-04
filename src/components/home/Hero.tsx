// import heroImage from "../../assets/images/home/homeHero.jpg";
import heroMedia1 from "../../assets/video/heroMedia1.mp4";

const Hero = () => {
  return (
    <div
      className="relative container mx-auto px-2 my-5 h-[250px] md:h-[400px] xl:h-[500px] overflow-hidden flex justify-center items-center bg-cover bg-center bg-no-repeat"
      //   style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-center text-6xl md:text-8xl text-white tracking-[-5.5px] z-10">
        ACE MANSION STUDIO
      </h1>

      <div className="absolute top-0 left-0 w-full">
        <div className="absolute top-0 left-0 px-2 bg-gray-600 w-full h-screen opacity-40"></div>
        <video autoPlay loop muted>
          <source src={heroMedia1} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
