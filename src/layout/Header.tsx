import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightDownIcon from "../assets/icons/ArrowRightDownIcon";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-ace-black px-10 py-5">
      <div className="flex justify-between items-center relative text-white z-20">
        <div className="flex items-center gap-11">
          <h1 className="text-3xl">
            Ace<span className="text-ace-gold">Mansion</span>
          </h1>

          {/* Desktop Navigation */}
          <div className=" md:flex hidden gap-12 font-display uppercase text-[17px]">
            <Link to="/">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="team">Our Team</Link>
          </div>
        </div>

        <div>
          <Link
            to="contact"
            className="font-display text-[17px] flex items-center gap-1 uppercase"
          >
            Contact Us
            <ArrowRightDownIcon
              width="30px"
              height="30px"
              className="fill-white"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`block md:hidden ${isNavOpen ? "open" : ""}`}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } animate-moveIn md:hidden pt-8 pb-8 px-14 font-display gap-2 flex flex-col border-b-[0.5px] z-10`}
      >
        <NavItem label="Home" />
        <NavItem label="About Us" />
        <NavItem label="Portfolio" />
        <NavItem label="Our Team" />
        <NavItem label="Contact Us" />
      </div>
    </header>
  );
};

// Navigation Item Component
const NavItem = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="tracking-widest text-[15px]">{label}</div>
      <p>{`>`}</p>
    </div>
  );
};

export default Header;
