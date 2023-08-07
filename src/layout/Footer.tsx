import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { COLORS } from "../lib/utils";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ace-black mt-28 pt-20">
      <div className="container mx-auto px-4 mb-8 flex lg:flex-row lg:items-start justify-between flex-col gap-8">
        <h3 className="text-white text-4xl text-center">
          Ace<span className="text-ace-gold">Mansion</span>
        </h3>
        <div className="lg:basis-7/12 xl:basis-6/12 flex flex-col md:flex-row items-center lg:items-start justify-between gap-10 lg:gap-5 ">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link to="/">
              <h6 className="text-white ">Home</h6>
            </Link>
            <Link to="/about">
              <h6 className="text-white">About Us</h6>
            </Link>
            <h6 className="text-white">Portfolio</h6>
            <h6 className="text-white">Our Team</h6>
            <h6 className="text-white">Contact Us</h6>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link to="/">
              <h6 className="text-white">Promotional Video</h6>
            </Link>
            <Link to="/about">
              <h6 className="text-white">Event Coverage</h6>
            </Link>
            <h6 className="text-white">Music Video</h6>
            <h6 className="text-white">Live Streaming</h6>
            <h6 className="text-white">Wedding Film</h6>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link
              className="flex items-center gap-1"
              to="https://www.instagram.com/acemansion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-white">Whatsapp</h6>
              <AiOutlineWhatsApp size={22} color={COLORS.aceGold} />
            </Link>
            <Link
              className="flex items-center gap-1"
              to="https://www.instagram.com/acemansion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-white">Instagram</h6>
              <AiFillInstagram size={22} color={COLORS.aceGold} />
            </Link>
            <Link
              className="flex items-center gap-1"
              to="https://www.tiktok.com/@acemansionstudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-white">Youtube</h6>
              <AiFillYoutube size={22} color={COLORS.aceGold} />
            </Link>
            <Link
              className="flex items-center gap-1"
              to="https://www.tiktok.com/@acemansionstudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-white">TikTok</h6>
              <FaTiktok size={15} color={COLORS.aceGold} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t-[1px] border-t-ace-gold pb-14 pt-7">
        <p className="text-center text-[14px] text-gray-400">
          &copy; 2023 Ace Mansion Studio, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
