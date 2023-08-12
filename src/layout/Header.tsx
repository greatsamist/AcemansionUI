import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-ace-black px-8 xl:px-14 py-5 sticky top-0 z-50">
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
            <Link to="cases">Cases</Link>
            <Link to="services">Services</Link>
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
        <NavItem link="/" label="Home" />
        <NavItem link="about" label="About Us" />
        <NavItem link="cases" label="Cases" />
        <NavItem link="services" label="Services" />
        <NavItem link="team" label="Our Team" />
        <NavItem link="contact" label="Contact Us" />
      </div>
    </header>
  );
};

// Navigation Item Component
const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="text-[16px] font-display uppercase">
        <Link to={link}>{label} </Link>
      </div>
      <ArrowDownRight />
    </div>
  );
};

export default Header;
