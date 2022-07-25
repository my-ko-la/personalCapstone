import OpeningHours from "./OpeningHours";
import NumbersAndSocials from "./NumberAndSocials";

const TopBar = () =>
{
    return (
        <div className="h-11 bg-black flex flex-row justify-around text-white
        items-center px-28">
            <OpeningHours />
           <div className="flex flex-row gap-1 text-md md:text-xs transition-all ease-linear duration-200">
               <h4 className="text-gray-400">Visit our showroom at 1234 Street, Address City</h4>
               <a className="underline" href="#">Contact Us</a>
            </div>
           
           <NumbersAndSocials /> 
        
        </div>
    )
}

export default TopBar;