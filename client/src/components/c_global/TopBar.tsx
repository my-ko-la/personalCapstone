import OpeningHours from "./OpeningHours";
import NumbersAndSocials from "./NumberAndSocials";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="h-11 bg-black flex flex-row justify-around text-white
        items-center md:px-28"
    >
      <OpeningHours />
      <div className="flex flex-col items-center flex-wrap gap-1 text-xs w-full md:text-sm transition-all ease-linear duration-200">
        <h4 className="text-gray-400">
          Visit our showroom at 1234 Street, Address City
        </h4>
        <Link to="/contact" className="underline">
          Contact Us
        </Link>
      </div>

      <NumbersAndSocials />
    </div>
  );
};

export default TopBar;
