import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import Shuffle from "../../utils/Shuffle";
import { Link } from "react-router-dom";

function CartWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const handleIsOpen = () => setIsOpen((prev) => !prev);

  const { isLoading, data } = useQuery(["getCart"], async () => {
    const res = await fetch("http://localhost:5000/cart/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      mode: "cors",
    });
    console.log("refetching");
    return res.json();
  });

  if (isLoading) return <div>...loading</div>;

  // leave any for now
  const cartItems = data.items.map((item: any) => {
    return (
      <CartItem
        key={Shuffle(item._id)}
        amount={item.amount}
        _id={item._id}
        name={item.name}
        productPicture={item.productPicture}
      />
    );
  });

  return (
    <>
      <div className="font-poppings overflow-hidden shadow-md bg-white border-black max-w-xs grid grid-col-1 border-2 outline-2 rounded-xl">
        <div className="flex pt-5  outline-1  flex-col pb-4 justify-center items-center px-5">
          <p className="font-semibold">{data?.user.fname}'s Cart</p>
          <p className="font-light text-gray-400 pb-5">
            {`${data.items.length} items in the cart`}
          </p>
          <Link to="/dashboard">
            <button
              className="text-blue-600 transition-colors duration-800 border-2 font-bold rounded-2xl px-5 md:px-8 h-8 md:text-xs border-blue-600
          hover:transition-all hover:text-white hover:bg-blue-600 hover:duration-800
         "
            >
              Edit Your Cart
            </button>
          </Link>
        </div>
        <div className="w-full">{cartItems.reverse()}</div>
        <div className="flex flex-col items-center gap-2 justify-center pt-2 mb-4 px-10">
          <span className="font-semibold">Subtotal: XX </span>
          <button className="text-white  bg-blue-600 border-2 font-bold rounded-2xl px-5 h-8 border-blue-600 hover:border-white hover:outline-1  hover:duration-800 duration-800">
            checkout{" "}
          </button>
        </div>
      </div>
    </>
  );
}

function CartItem({
  amount,
  name,
  productPicture,
  _id,
}: {
  amount: number;
  name: string;
  productPicture: string;
  _id: string;
}) {
  async function removeItemCart(id: string) {
    const res = await fetch(`http://localhost:5000/cart/remove/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  //const { refetch } = useQuery(["getCart"]);
  const qc = useQueryClient();

  const { mutate } = useMutation(removeItemCart, {
    onSuccess: () => {
      qc.invalidateQueries(["getCart"]);
      //refetch;
    },
  });
  console.log("call from item");
  return (
    <section
      id={_id}
      className="w-full justify-between px-2 items-center  min-h-[60px] flex flex-row   font-poppins"
    >
      <div className="flex my-1 gap-2 flex-row justify-center items-center">
        <p className="text-sm px-1">{amount}x</p>
        <img
          src={productPicture}
          className="h-16 border-black outline-1 border w-16 rounded-xl"
          alt=""
        />
        <p className="text-xs">{name}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button type="submit" onClick={() => mutate(_id)} id="delete">
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
              strokeWidth="1.5"
            />
            <path d="M7 7L13.5 13.5" stroke="#A2A6B0" strokeLinecap="round" />
            <path d="M13.5 7L7 13.5" stroke="#A2A6B0" strokeLinecap="round" />
          </svg>
        </button>
        <button id="edit">
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
              strokeWidth="1.5"
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
}

export default CartWidget;
