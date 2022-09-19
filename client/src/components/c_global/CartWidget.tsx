import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";

interface CartProps extends ShopItemCartProps {
  username?: string;
}

interface ShopItemCartProps {
  amount: string | number;
  name: string;
  productPicture?: string;
}

const ShopItemCart: React.FunctionComponent<ShopItemCartProps> = (props) => {
  return (
    <section className="w-full justify-between px-2 items-center  min-h-[60px] flex flex-row border-gray-400 outline-1 border-b font-poppins">
      <p>{props.amount} x</p>
      <div className="flex flex-row justify-center">
        <img src="{props?.productPicture}" alt="" />
        <p>{props.name}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="9.25"
              fill="white"
              stroke="#CACDD8"
              stroke-width="1.5"
            />
            <path d="M7 7L13.5 13.5" stroke="#A2A6B0" stroke-linecap="round" />
            <path d="M13.5 7L7 13.5" stroke="#A2A6B0" stroke-linecap="round" />
          </svg>
        </button>
        <button>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10.9326"
              r="9.25"
              fill="white"
              stroke="#CACDD8"
              stroke-width="1.5"
            />
            <path
              d="M6.0472 15.6762H6.10254L8.66678 15.4425C8.94767 15.4146 9.21039 15.2908 9.41083 15.092L14.9452 9.5577C15.16 9.33078 15.276 9.02795 15.268 8.71558C15.2599 8.40322 15.1283 8.10679 14.9021 7.89126L13.2172 6.20636C12.9973 5.99981 12.7092 5.88129 12.4076 5.87335C12.106 5.86541 11.812 5.96861 11.5815 6.16332L6.0472 11.6976C5.84843 11.8981 5.72467 12.1608 5.69669 12.4417L5.43227 15.0059C5.42399 15.096 5.43568 15.1868 5.4665 15.2718C5.49732 15.3569 5.54653 15.434 5.6106 15.4979C5.66806 15.5549 5.7362 15.6 5.81112 15.6306C5.88604 15.6612 5.96627 15.6767 6.0472 15.6762ZM12.3625 7.06726L14.0412 8.746L12.8114 9.94511L11.1634 8.29711L12.3625 7.06726ZM6.88964 12.5462L10.3517 9.10881L12.012 10.7691L8.56839 14.2127L6.72361 14.3849L6.88964 12.5462Z"
              fill="#A2A6B0"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

const CartWidgetOpen: React.FunctionComponent<CartProps> = (props) => {
  // write mapping of items to JSX elements

  return (
    <>
      <div className="font-poppings overflow-hidden shadow-md border-black max-w-xs grid grid-col-1 border-2 outline-2 rounded-xl">
        <button
          className="text-sm text-gray-300 ml-auto mr-2 mt-2 max-w-fit
rounded-xl hover:bg-black transition-colors duration-800 hover-transition-colors hover:duration-800 hover:text-white px-1"
        >
          close
        </button>
        <div className="flex pt-5 border-b outline-1 border-gray-400 flex-col pb-4 justify-center items-center px-5">
          <p className="font-semibold">{props.username}'s Cart</p>
          <p className="font-light text-gray-400 pb-5">10 items in the cart</p>
          <button
            className="text-blue-600  transition-colors duration-800 border-2 font-bold rounded-2xl px-5 md:px-8 h-8 md:text-xs border-blue-600
          hover:transition-all hover:text-white hover:bg-blue-600 hover:duration-800
         "
          >
            View or Edit Your Cart
          </button>
        </div>
        <div className="w-full">
          <ShopItemCart amount="12" name="sssssss"></ShopItemCart>
          <ShopItemCart amount="12" name="sssssss"></ShopItemCart>
          <ShopItemCart amount="12" name="sssssss"></ShopItemCart>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center pt-2 mb-4 px-10">
          <span className="font-semibold">Subtotal: XX </span>
          <button className="text-white  bg-blue-600 border-2 font-bold rounded-2xl px-5 h-8 border-blue-600 hover:border-white hover:outline-1  hover:duration-800 duration-800">
            Proceed to checkout{" "}
          </button>
        </div>
      </div>
    </>
  );
};

const CartWidget = () => {
  // useful?

  const { isLoading, data, error } = useQuery(["getCart"], async () => {
    const res = await fetch("http://localhost:5000/cart/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
    });
    return res.json();
  });

  const getTotal = (data: any) => {};

  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen((prev) => !prev);
  const [cartRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <button
        id="cart"
        className="block lg:flex hover:border-b hover:outline-3  hover:border-black hover:transition-all hover:pb-1 hover:duration-800 duration-800 transition-all}"
        onClick={handleIsOpen}
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
      </button>
      <div ref={cartRef}>
        {isOpen && (
          <CartWidgetOpen
            amount={1}
            productPicture=" "
            username="Myko"
            name=""
          />
        )}
      </div>
    </>
  );
};

export default CartWidget;
