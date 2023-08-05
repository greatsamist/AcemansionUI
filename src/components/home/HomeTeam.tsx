// import sampleImage from "../../assets/images/home/smpl2.png";

const MEMBERS = [
  {
    id: "1",
    name: "Adekanye Kanye",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-1.jpg",
    job: "Main Director",
  },
  {
    id: "2",
    name: "Adekanye Kanye",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-2.jpg",
    job: "Main Director",
  },
  {
    id: "3",
    name: "Adekanye Kanye",
    image:
      "https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/H4-team-image-3.jpg",
    job: "Main Director",
  },
];

const HomeTeam = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col my-24 px-4">
      <h6 className="tracking-[.2em]">AM Studio Maestros</h6>
      <h3 className="text-[60px] lg:text-[80px]">MEET THE TEAM</h3>

      <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 text-center gap-5 md:gap-6 mt-10">
        {MEMBERS.map(({ id, name, image, job }) => (
          <ImageItem id={id} name={name} image={image} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomeTeam;

const ImageItem = ({ id, name, image, job }: ImageItemProps) => {
  return (
    <div className="relative" id={id}>
      <div className="sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[350px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] overflow-hidden">
        <img
          className="object-cover h-full w-full transition duration-300 ease-in-out hover:scale-105"
          src={image}
          // src={sampleImage}
        />
      </div>
      <div className="absolute h-2/6 w-full bottom-0 left-0 card-image-effect"></div>
      <h5 className="absolute bottom-7 lg:bottom-6 left-0 right-0 text-ace-black text-[24px] leading-none lg:text-[35px] tracking-widest">
        {name}
      </h5>
      <p className="mt-5 text-[13px] text-black">{job}</p>
    </div>
  );
};

interface ImageItemProps {
  id: string;
  name: string;
  job: string;
  image: string;
}
