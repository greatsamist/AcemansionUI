import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-ace-black px-8 xl:px-14 py-5">
      <div className="flex justify-between items-center relative text-white z-20">
        <div className="flex items-center gap-11">
          <Link to="/">
            <h1 className="text-3xl">
              Ace<span className="text-ace-gold">Mansion</span>
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <div className=" lg:flex hidden gap-12 font-display uppercase text-[17px]">
            <Link to="about">About Us</Link>
            <Link to="about">Services</Link>
            <Link to="about">Cases</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="team">Our Team</Link>
          </div>
        </div>

        <div>
          <Link
            to="contact"
            className="font-display text-[17px] lg:flex hidden items-center gap-1 uppercase"
          >
            Contact Us
            <ArrowDownRight color="white" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`block lg:hidden ${isNavOpen ? "open" : ""}`}
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
        }  lg:hidden pt-8 pb-8 font-display gap-2 pr-4 flex flex-col border-b-[0.5px] z-10`}
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
    <div className="flex justify-between items-center text-white">
      <div className="text-[16px] font-display uppercase">{label}</div>
      <ArrowDownRight />
    </div>
  );
};

export default Header;
