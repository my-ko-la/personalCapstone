import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/users/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      //mode: "cors",
    });
    return res.json();
  };

  const { isLoading, data, error } = useQuery(["user"], fetchUserData);

  return (
    <div className="flex flex-col sm:flex-row px-2 md:px-24">
      <div className="flex flex-row md:w-full justify-between font-poppins text-xs">
        <Link to="/">
          <svg
            className=""
            width="85"
            height="69"
            viewBox="0 0 85 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.0331 13.9454L25.2969 23.8637V36.0708L42.0331 45.9891L55.4588 38.3596V41.9836L42.0331 49.9946L25.2969 39.8855V44.2725L42.0331 54L58.7693 44.2725V32.0653L45.3435 39.8855V36.0708L58.7693 28.0599V23.8637L42.0331 13.9454Z"
              fill="#0156FF"
            />
          </svg>
        </Link>
        <div className="hidden sm:flex flex-row text-xs lg:whitespace-nowrap flex-1 items-center gap-5 md:gap-10 lg:text-xs">
          <a href="">Laptops</a>
          <a href="">Desktop PCs</a>
          <a className="sm:hidden lg:inline" href="">
            Networking Devices
          </a>
          <a className="sm:hidden lg:inline" href="">
            Printers & Scanners
          </a>
          <a href="">PC Parts</a>
          <a className="sm:hidden lg:inline" href="">
            All Other Products
          </a>
          <a href="">Repairs</a>
          <button
            className="text-blue-600  transition-colors duration-800 border-2 font-bold rounded-2xl px-5 md:px-8 h-8 md:text-xs border-blue-600
          hover:transition-all hover:text-white hover:bg-blue-600 hover:duration-800"
          >
            Deals
          </button>
        </div>
        <div className="flex flex-row lg:gap-1 gap-4 items-center lg:ml-5 mr-5">
          <a className="hidden sm:block" href="">
            <svg
              width="30"
              height="18"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.95072 1.99141C1.79204 3.14838 1.11812 4.70363 1.06631 6.34023C1.0145 7.97682 1.58868 9.57159 2.67185 10.7995C3.75503 12.0275 5.26567 12.7962 6.89594 12.9491C8.49648 13.0991 10.0941 12.6444 11.3749 11.6766L14.7061 15.0085L14.7061 15.0085C14.789 15.0914 14.8873 15.1571 14.9955 15.2019C15.1038 15.2468 15.2198 15.2698 15.3369 15.2698C15.4541 15.2698 15.5701 15.2468 15.6783 15.2019C15.7866 15.1571 15.8849 15.0914 15.9678 15.0085C16.0506 14.9257 16.1163 14.8274 16.1611 14.7191C16.206 14.6109 16.229 14.4949 16.229 14.3777C16.229 14.2606 16.206 14.1446 16.1611 14.0363C16.1163 13.9281 16.0506 13.8298 15.9678 13.7469L15.9677 13.7469L12.636 10.416C13.6013 9.13496 14.0539 7.53846 13.903 5.93943C13.7493 4.31054 12.9808 2.80139 11.7539 1.719C10.5269 0.636623 8.93373 0.0623154 7.29838 0.11292C5.66303 0.163525 4.10838 0.835233 2.95072 1.99141ZM2.95072 1.99141L3.02138 2.06217L2.95072 1.99141ZM10.7887 3.25366C11.2263 3.68416 11.5743 4.19703 11.8127 4.76269C12.051 5.32835 12.175 5.93561 12.1775 6.54944C12.18 7.16327 12.061 7.77152 11.8272 8.3391C11.5935 8.90669 11.2497 9.42238 10.8156 9.85642C10.3816 10.2905 9.86589 10.6343 9.29831 10.868C8.73072 11.1018 8.12248 11.2208 7.50865 11.2183C6.89482 11.2158 6.28756 11.0918 5.7219 10.8535C5.15623 10.6151 4.64336 10.2671 4.21287 9.82954C3.35255 8.95509 2.87263 7.77613 2.87762 6.54944C2.88262 5.32275 3.37213 4.14773 4.23954 3.28033C5.10694 2.41292 6.28196 1.92341 7.50865 1.91841C8.73533 1.91342 9.9143 2.39335 10.7887 3.25366Z"
                fill="black"
                stroke="black"
                strokeWidth="0.2"
              />
            </svg>
          </a>
          <button
            id="cart"
            className="block lg:flex"
            onClick={() => setCartOpen((prev) => !prev)}
          >
            <svg
              width="30 "
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
                fill="black"
              />
            </svg>
            {cartOpen && (
              <div className="fixed right-12 top-28 w-70 [z-index:1000]">
                <button
                  onClick={() => setCartOpen((prev) => !prev)}
                  className="absolute top-0 right-1 text-sm text-gray-300 ml-auto mr-2 mt-2 max-w-fit rounded-xl hover:bg-black transition-colors duration-800 hover-transition-colors hover:duration-800 hover:text-white px-1"
                >
                  close
                </button>
                <CartWidget />
              </div>
            )}
          </button>
          <Link
            className="py-2 px-0 lg:px-1 hover:bg-black hover:text-white hover:transition-all text-lg md:text-sm lg:w-20 md:text-md lg:text-center sm:whitespace-nowrap  rounded-xl transition-all duration-800 hover:duration-800 hover:ease-linear"
            to={data ? "/dashboard" : "/login"}
          >
            {data?.fname ? `Hi, ${data.fname}!` : "Login"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
