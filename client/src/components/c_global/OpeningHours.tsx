import { useState } from "react";

const DropdownHours = ({ handleDropdown }: { handleDropdown: () => void }) => {
  return (
    <div
      onMouseLeave={handleDropdown}
      className="absolute translate-x-[9.4rem] translate-y-2 font-poppins"
    >
      <div className="h-3/5 w-60 border border-gray-200  bg-gray-100 p-2 shadow-md">
        <div id="first" className="flex gap-2 text-xs">
          <div id="clock">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z"
                stroke="#0156FF"
                strokeWidth="2.3"
              />
              <path
                d="M17.5 12.25V18.375H23.625"
                stroke="#0156FF"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div id="opening-hours" className="leading-5 mb-2">
            <p className="text-black">We are open:</p>
            <p className="text-black">
              <span className="text-gray-400">Mon-Thu: </span>9:00 AM - 5:30 PM
            </p>
            <p className="text-black">
              <span className="text-gray-400">Fr:</span> 9:00 AM - 6:00 PM
            </p>
            <p className="text-black">
              <span className="text-gray-400">Sat:</span> 11:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        <hr />
        <div id="second" className="flex gap-2 pt-2 pb-2 text-xs">
          <div id="point">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 17C15.625 17 14.5 15.92 14.5 14.6C14.5 13.28 15.625 12.2 17 12.2C18.375 12.2 19.5 13.28 19.5 14.6C19.5 15.92 18.375 17 17 17ZM24.5 14.84C24.5 10.484 21.1875 7.4 17 7.4C12.8125 7.4 9.5 10.484 9.5 14.84C9.5 17.648 11.9375 21.368 17 25.808C22.0625 21.368 24.5 17.648 24.5 14.84ZM17 5C22.25 5 27 8.864 27 14.84C27 18.824 23.6625 23.54 17 29C10.3375 23.54 7 18.824 7 14.84C7 8.864 11.75 5 17 5Z"
                fill="#0156FF"
              />
            </svg>
          </div>
          <div className="text-black">
            <p>Address: 1234 Street Addess,</p>
            <p>City Address, 1234</p>
          </div>
        </div>
        <hr />
        <div id="third" className="pt-2 pl-4 text-black text-xs">
          <p>
            Phone:{" "}
            <a href="#" className="text-blue-500">
              (00) 1234 5678
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a href="#" className="text-blue-500">
              shop@email.com
            </a>
          </p>
        </div>
      </div>
      <div className="h-4 w-4 bg-slate-100 absolute top-0 translate-x-[2rem] rotate-45 translate-y-[-8px] border-t border-l"></div>
    </div>
  );
};

const StaticHours = ({ handleDropdown }: { handleDropdown: () => void }) => {
  return (
    <div className="text-xs hidden md:flex">
      <span className="text-gray-400 font-poppins-300">Mon - Thu:</span>
      <span className="ml-2">9:00 AM - 5:30 PM</span>
      <div className="self-center ml-1" onMouseEnter={handleDropdown}>
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5.76923L8 7.76923L6 5.76923"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

const OpeningHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHoursHover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StaticHours handleDropdown={handleHoursHover} />
      <div>{isOpen && <DropdownHours handleDropdown={handleHoursHover} />}</div>
    </div>
  );
};

export default OpeningHours;
