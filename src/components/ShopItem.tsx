import { useState } from "react";
import showStars from "../utils/showStars";

enum Availability {
    inStock="in stock", 
    checkAvailability = "check availability", 
    outOfStock = "out of stock",
};

interface ShopItemProps  {
    name: string
    isOnSale: boolean
    price: number
    isRated: boolean
    rating?: number
    isReviewed: boolean
    reviews?: number
    inStock: string,
    productPicture: string
}


const ShopItem = (props : ShopItemProps) => 
{
    return (
        <div className="flex bg-slate-300 h-64 w-52 flex-col">
            <span>{props.inStock}</span>
            <img src="`${props.productPicture}`" alt="" />
            <div>
                {props.isRated ? 
                showStars(props.rating)
                :
                <p>Not Rated</p>}
                {props.isReviewed ? 
                <p>Reviews ({props.reviews})</p>
                :
                <p>No Reviews</p>}
            </div>
            <p>{props.name}</p>
            <div>
                {props.isOnSale && <p>props.price</p>}
                <p>props.price</p>
            </div>
        </div>

    )
}

export default ShopItem;