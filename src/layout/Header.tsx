import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center px-2 pt-4 relative bg-white z-20">
        <h1 className="text-4xl">AM</h1>

        {/* Desktop Navigation */}
        <div className=" md:flex hidden gap-12 font-display text-[17px]">
          <Link to="/" className="tracking-widest">
            Home
          </Link>
          <Link to="about" className="tracking-widest">
            About Us
          </Link>
          <Link to="portfolio" className="tracking-widest">
            Portfolio
          </Link>
          <Link to="team" className="tracking-widest">
            Our Team
          </Link>
          <Link to="contact" className="tracking-widest">
            Contact Us
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
    </div>
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
