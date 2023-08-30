import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "../constants";
import { COLORS, cn } from "../lib/utils";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

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
            {NAV_ITEMS.map(({ id, link, label }) => (
              <Link
                key={id}
                className={
                  currentLocation == link ? "text-ace-gold" : "text-white"
                }
                to={link}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          {currentLocation == "/" ? (
            <a
              href="#home-contact"
              className={cn(
                "font-display text-[17px] lg:flex hidden items-center gap-1 uppercase text-white"
              )}
            >
              Contact Us
              <ArrowDownRight color={COLORS.white} />
            </a>
          ) : (
            <Link
              to={currentLocation == "/" ? "#home-contact" : "contact"}
              className={cn(
                "font-display text-[17px] lg:flex hidden items-center gap-1 uppercase",
                currentLocation == "/contact" ? "text-ace-gold" : "text-white"
              )}
            >
              Contact Us
              <ArrowDownRight
                color={
                  currentLocation == "/contact" ? COLORS.aceGold : COLORS.white
                }
              />
            </Link>
          )}
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
        <NavItem
          currentLocation={currentLocation}
          link={"/"}
          label={"Home"}
          setIsNavOpen={setIsNavOpen}
        />
        {NAV_ITEMS.map(({ id, link, label }) => (
          <div key={id}>
            <NavItem
              currentLocation={currentLocation}
              link={link}
              label={label}
              setIsNavOpen={setIsNavOpen}
            />
          </div>
        ))}
        <NavItem
          currentLocation={currentLocation}
          link={"contact"}
          label={"Contact Us"}
          setIsNavOpen={setIsNavOpen}
        />
      </div>
    </header>
  );
};

export default Header;
