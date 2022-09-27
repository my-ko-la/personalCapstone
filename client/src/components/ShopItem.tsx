import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import React from "react";
import showStars from "../utils/showStars";
/*enum Availability {
    inStock="in stock", 
    checkAvailability = "check availability", 
    outOfStock = "out of stock",
};*/

/* Can this even be useful?

enum msiCategoryLaptops {
    gs = "MSI GS Series",
    gt = "MSI GT Series",
    gl = "MSI GL Series",
    ge = "MSI GE Series",
}

enum msiCategoryDesktops {
    infinite = "MSI Infinite Series",
    trident = "MSI Trident Series",
    xt = "MSI XT Series",
    nightblade = "MSI Nightblade Series",
}

interface ProductCategory  {
    category: msiCategoryDesktops | msiCategoryLaptops
}*/

interface ShopItemProps {
  id?: number;
  name: string;
  isOnSale: boolean;
  price: number;
  currency: string;
  isRated: boolean;
  rating: number;
  isReviewed: boolean;
  reviews?: number;
  isInStock: string;
  productPicture: string;
  showcased?: boolean;
  category?: string;
}

// temp until I migrate the data to the database
type ratingAndReviews = {
  rating: number;
  reviews: string[];
};

type description = {
  property: string;
  propertyDescription: string;
};

type price = {
  amount: number;
  currency: "USD" | "EUR";
};

interface ShopItemPropsWITHDB {
  _id: string;
  name: string;
  description: description[];
  isOnSale: boolean;
  price: price;
  isInStock: string;
  productPicture: string;
  showcased?: boolean;
  category?: string;
  ratingAndReviews?: ratingAndReviews;
}

const ShopItem: React.FunctionComponent<ShopItemPropsWITHDB> = (props) => {
  //const handleAddToCart = (e) => { };
  const queryClient = useQueryClient();
  //const {isLoading, data, error} = useQuery(["sendToCart"], async () => {
  //const handleItemSubmit = (evt) => {};
  const [wiggle, setWiggle] = useState(false);

  async function UpdateCart(id: string) {
    const res = await fetch(`http://localhost:5000/cart/add/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const { mutate } = useMutation(UpdateCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getCart"]);
    },
  });

  return (
    <div
      className="flex justify-center shadow-md my-2 mx-auto rounded-xl 
    p-4 h-86 md:w-60 max-w-xs flex-col 
    font-poppins transition-all ease-in delay-150"
    >
      <span className="text-green-600 flex flex-row gap-2 items-center w-fit font-extralight text-center p-1 text-xs rounded-xl">
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="5" r="5" fill="#78A962" />
          <path
            d="M7.5 4L4.98404 7L3.5 5.27853"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
        {props.isInStock}
      </span>
      <img
        className="w-40 h-36 self-center"
        src={props.productPicture}
        alt=""
      />
      <div className="flex pt-4 flex-row justify-between ">
        {props.ratingAndReviews?.rating !== undefined ? (
          showStars(props.ratingAndReviews.rating)
        ) : (
          <p className="text-xs font-extralight text-gray-300">Not Rated</p>
        )}
        {props.ratingAndReviews?.reviews !== undefined ? (
          <p className="font-light text-gray-300 text-xs pr-3">
            Reviews ({props.ratingAndReviews.reviews.length})
          </p>
        ) : (
          <p className="text-xs pr-3 font-extralight text-gray-300">
            No Reviews
          </p>
        )}
      </div>
      <p className="font-thin pt-2">{props.name}</p>
      <div className="pt-3">
        {props.isOnSale && (
          <p className="font-extralight text-sm text-gray-400 line-through">
            {props.price.currency} {props.price.amount}
          </p>
        )}
        {!props.isOnSale && <p className=" mt-5"></p>}
        <div className="flex flex-row justify-between">
          <p className="text-sm inline font-bold">
            {props.price.currency} {props.price.amount}
          </p>
          {/* on submit here */}
          <button
            className={` ${
              wiggle && "animate-wiggleItem"
            } inline text-xs px-2 mr-3 outline-2 border border-gray-600 rounded-xl
            hover:bg-gray-600 hover:text-white transition-all ease-in duration-800 hover:duration-800`}
            type="submit"
            onClick={() => {
              mutate(props._id);
              setWiggle(true);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export type { ShopItemProps };
export type { ShopItemPropsWITHDB };
export default ShopItem;
