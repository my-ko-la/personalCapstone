import { useState } from "react";
import showStars from "../utils/showStars";

/*enum Availability {
    inStock="in stock", 
    checkAvailability = "check availability", 
    outOfStock = "out of stock",
};*/

interface ShopItemProps  {
    name: string
    isOnSale: boolean
    price: number
    currency: string
    isRated: boolean
    rating: number 
    isReviewed: boolean
    reviews?: number
    inStock: string
    productPicture: string
}


const ShopItem = (props : ShopItemProps) => 
{
    return (
        <div className="flex h-72 w-56 flex-col font-poppins relative">
            <span className=" absolute pl-2 text-green-400 font-extralight">{props.inStock}</span>
            <img className="w-40 h-44 self-center" src={props.productPicture} alt=""/>
            <div className="flex pt-4 flex-row justify-between ">
                {props.isRated ? 
                showStars(props.rating)
                :
                <p className="text-xs font-extralight text-gray-400">Not Rated</p>}
                {props.isReviewed ? 
                <p className="font-light text-gray-300 text-xs pr-2">Reviews ({props.reviews})</p>
                :
                <p className="text-xs font-extralight text-gray-400">No Reviews</p>}
            </div>
            <p className="font-thin pt-2">{props.name}</p>
            <div className="pt-3">
                {props.isOnSale && 
                <p className="font-extralight text-sm text-gray-400 line-through">{ props.currency } { props.price }</p>}
                {!props.isOnSale && <p className=" mt-5"></p>}
                <p className="font-bold">{ props.currency } { props.price }</p>
            </div>
        </div>

    )
}

export default ShopItem;