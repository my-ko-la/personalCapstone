import { Link } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";

const Footer = () => {
  return (
    <>
      <div className="pt-6 h-fit bg-black"></div>
      <div className="w-full bg-black font-poppins text-white h-full px-24 md:px-48">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1>Sign Up To Our Newsletter</h1>
            <div className="py-1"></div>
            <p className="text-xs font-extralight">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="pt-7 flex flex-col md:flex-row gap-4">
            <input
              className="bg-black border-x border-y rounded-sm w-52 font-light pl-2 text-xs p-1 md:w-96"
              type="text"
              placeholder="Your Email"
            />
            <button className="text-sm bg-blue-600 rounded-3xl w-32 p-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-6"></div>
        <div className="hidden md:flex flex-row text-sm text-gray-500 justify-between">
          <p className="w-52">Information</p>
          <p className="w-52">PC Parts</p>
          <p className="w-52">Desktop PCs</p>
          <p className="w-52">Laptops</p>
          <p className="w-52">Address</p>
        </div>
        <div className="py-2"></div>
        <div className="hidden md:flex flex-row font-light text-xs justify-between">
          <div className="flex flex-col w-52 leading-5">
            <Link to="/about">About Us</Link>
            <a href="">About Zip</a>
            <a href="">Privacy Policy</a>
            <a href="">Search</a>
            <a href="">Terms</a>
            <a href="">Orders and Returns</a>
            <a href="">Contact Us</a>
            <a href="">Advanced Search</a>
            <a href="">Newsletter Subscription</a>
          </div>
          <div className="flex flex-col w-52 leading-5">
            <a href="">CPUs</a>
            <a href="">Add On Cards</a>
            <a href="">Hard Drives (Internal)</a>
            <a href="">Graphic Cards</a>
            <a href="">Keyboards / Mice</a>
            <a href="">Cases / Power Supplies / Cooling</a>
            <a href="">RAM (Memory)</a>
            <a href="">Software</a>
            <a href="">Speakers / Headsets</a>
            <a href="">Motherboards</a>
          </div>
          <div className="flex flex-col w-52 leading-5">
            <a href="">Custom PCs</a>
            <a href="">Servers</a>
            <a href="">MSI All-In-One PCs</a>
            <a href="">HP/Compaq PCs</a>
            <a href="">ASUS Pcs</a>
            <a href="">Tecs PCs</a>
          </div>
          <div className="flex flex-col w-52 leading-5">
            <a href="">Everyday Use Notebooks</a>
            <a href="">MSI Workstation Series</a>
            <a href="">MSI Prestige Series</a>
            <a href="">Tablets and Pads</a>
            <a href="">Netbooks</a>
            <a href="">Infinity Gaming Notebooks</a>
          </div>
          <div className="flex flex-col w-52 leading-5">
            <p>Address: 1234 Street Address City, 1234</p>
            <p>
              Phones:{" "}
              <a className="text-blue-500" href="">
                (00) 1234 5678
              </a>
            </p>
            <p>We are open: Mo-Thu: 9:00 AM - 5:30 PM</p>
            <p>Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
            <p>
              E-mail:{" "}
              <a className="text-blue-500" href="">
                shop@email.com
              </a>
            </p>
          </div>
        </div>
        <div className="py-3"></div>
        <hr style={{ color: "gray" }} />
        <div className="flex flex-row py-6 justify-center relative">
          <div className="flex flex-row gap-20 relative">
            <div className="flex flex-row gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8155 0.504395H1.18356C0.807625 0.504395 0.503906 0.808113 0.503906 1.18404V16.816C0.503906 17.1919 0.807625 17.4956 1.18356 17.4956H16.8155C17.1914 17.4956 17.4951 17.1919 17.4951 16.816V1.18404C17.4951 0.808113 17.1914 0.504395 16.8155 0.504395ZM14.853 5.46371H13.4958C12.4318 5.46371 12.2257 5.9692 12.2257 6.71257V8.3501H14.7659L14.4346 10.9137H12.2257V17.4956H9.57723V10.9158H7.362V8.3501H9.57723V6.45983C9.57723 4.26583 10.9174 3.07007 12.8757 3.07007C13.8144 3.07007 14.6194 3.14016 14.8551 3.17202V5.46371H14.853Z"
                  fill="gray"
                />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99986 6.13619C7.4229 6.13619 6.13599 7.4231 6.13599 9.00005C6.13599 10.577 7.4229 11.8639 8.99986 11.8639C10.5768 11.8639 11.8637 10.577 11.8637 9.00005C11.8637 7.4231 10.5768 6.13619 8.99986 6.13619ZM17.5893 9.00005C17.5893 7.81411 17.6001 6.63892 17.5335 5.45513C17.4669 4.08013 17.1532 2.85982 16.1477 1.85435C15.1401 0.846733 13.9219 0.535209 12.5469 0.468608C11.361 0.402006 10.1858 0.412748 9.00201 0.412748C7.81607 0.412748 6.64087 0.402006 5.45709 0.468608C4.08208 0.535209 2.86177 0.848881 1.8563 1.85435C0.848686 2.86197 0.537162 4.08013 0.470561 5.45513C0.403959 6.64107 0.414702 7.81626 0.414702 9.00005C0.414702 10.1838 0.403959 11.3612 0.470561 12.545C0.537162 13.92 0.850834 15.1403 1.8563 16.1458C2.86392 17.1534 4.08208 17.4649 5.45709 17.5315C6.64302 17.5981 7.81822 17.5874 9.00201 17.5874C10.1879 17.5874 11.3631 17.5981 12.5469 17.5315C13.9219 17.4649 15.1422 17.1512 16.1477 16.1458C17.1553 15.1381 17.4669 13.92 17.5335 12.545C17.6022 11.3612 17.5893 10.186 17.5893 9.00005ZM8.99986 13.4065C6.56138 13.4065 4.59341 11.4385 4.59341 9.00005C4.59341 6.56158 6.56138 4.59361 8.99986 4.59361C11.4383 4.59361 13.4063 6.56158 13.4063 9.00005C13.4063 11.4385 11.4383 13.4065 8.99986 13.4065ZM13.5868 5.44224C13.0174 5.44224 12.5577 4.98247 12.5577 4.41314C12.5577 3.8438 13.0174 3.38404 13.5868 3.38404C14.1561 3.38404 14.6159 3.8438 14.6159 4.41314C14.616 4.54833 14.5895 4.68223 14.5379 4.80716C14.4862 4.93209 14.4104 5.04561 14.3148 5.1412C14.2192 5.2368 14.1057 5.31259 13.9808 5.36425C13.8559 5.41591 13.722 5.44241 13.5868 5.44224Z"
                  fill="gray"
                />
              </svg>
            </div>
            <PaymentMethods />
            <p className="text-xs font-thin text-gray-400">
              Copyright &#169; 2022 Shop Pty. Ltd.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
