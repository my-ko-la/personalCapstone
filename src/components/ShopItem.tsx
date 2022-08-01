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
        <div className="flex bg-gray-100 h-64 w-56 flex-col font-poppins">
            <span className="pl-2 font-light">{props.inStock}</span>
            <img src={props.productPicture} alt="" />
            <div className="flex flex-row justify-between">
                {props.isRated ? 
                showStars(props.rating)
                :
                <p>Not Rated</p>}
                {props.isReviewed ? 
                <p>Reviews ({props.reviews})</p>
                :
                <p>No Reviews</p>}
            </div>
            <p className="font-thin">{props.name}</p>
            <div>
                {props.isOnSale && 
                <p className="font-light text-gray-400 line-through">{props.currency} { props.price }</p>}
                <p className="">{props.currency} {props.price}</p>
            </div>
        </div>

    )
}

export default ShopItem;