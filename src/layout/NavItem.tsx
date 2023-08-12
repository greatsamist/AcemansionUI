import { COLORS, cn } from "../lib/utils";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  link: string;
  currentLocation: string;
  setIsNavOpen?: (isNavOpen: boolean) => void;
}

const NavItem = ({
  label,
  link,
  currentLocation,
  setIsNavOpen,
}: NavItemProps) => {
  return (
    <div className="flex justify-between items-center text-white">
      <div
        onClick={() => {
          setIsNavOpen?.(false);
        }}
        className={cn(
          "text-[16px] font-display uppercase",
          currentLocation == link ? "text-ace-gold" : "text-white"
        )}
      >
        <Link to={link}>{label} </Link>
      </div>
      <ArrowDownRight
        color={currentLocation == link ? COLORS.aceGold : COLORS.white}
      />
    </div>
  );
};

export default NavItem;
