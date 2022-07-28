import { useState } from "react";
import showStars from "../utils/showStars";

enum Availability { inStock, checkAvailability, outOfStock};



interface ShopItemProps  {
    name: String
    isOnSale: Boolean
    price: Number
    isRated: Boolean
    rating?: Number
    isReviewed: Boolean
    reviews?: Number
    inStock: Availability
    productPicture: String
}


const ShopItem = ({props} : ShopItemProps) => 
{

    return (
        <div className="flex ">
            <span>{props.inStock}</span>
            <img src="{props.productPicture}" alt="" />
            <div>
                {props.isRated && showStars(props.rating)}
                <p>Reviews ({props.reviews})</p>
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