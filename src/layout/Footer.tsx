import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-ace-black mt-28 pt-24">
      <div className="container mx-auto px-4 mb-16 flex lg:flex-row items-center justify-between flex-col gap-8">
        <h3 className="text-white tracking-widest text-4xl">
          Ace Mansion Studio
        </h3>
        <div className="flex items-center justify-end flex-col gap-4 md:flex-row md:gap-14">
          <Link to="/">
            <h6 className="text-white tracking-[4px]">Home</h6>
          </Link>
          <Link to="/about">
            <h6 className="text-white tracking-[4px]">About Us</h6>
          </Link>
          <h6 className="text-white tracking-[4px]">Portfolio</h6>
          <h6 className="text-white tracking-[4px]">Our Team</h6>
          <h6 className="text-white tracking-[4px]">Contact Us</h6>
        </div>
      </div>

      <div className="mt-10 border-t-[1px] border-t-ace-gold pb-14 pt-7">
        <p className="text-center text-[14px] text-gray-400">
          &copy; 2023 Ace Mansion Studio, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
