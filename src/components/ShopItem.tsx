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

interface ShopItemProps  {
    id?: number
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
    showcased?: boolean
    category?: string
}


const ShopItem: React.FunctionComponent<ShopItemProps> = (props) =>
{
    return (
        <div className="flex h-86 w-56 flex-col font-poppins">
            <span className="text-green-700 flex flex-row gap-2 items-center w-fit font-extraligh font-extralight text-center p-1 text-xs rounded-xl">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="#78A962"/>
                <path d="M7.5 4L4.98404 7L3.5 5.27853" stroke="white" stroke-linecap="round"/>
                </svg>
                {props.inStock}
            </span>
            <img className="w-40 h-36 self-center" src={props.productPicture} alt=""/>
            <div className="flex pt-4 flex-row justify-between ">
                {props.isRated ? 
                showStars(props.rating)
                :
                <p className="text-xs font-extralight text-gray-300">Not Rated</p>}
                {props.isReviewed ? 
                <p className="font-light text-gray-300 text-xs pr-3">Reviews ({props.reviews})</p>
                :
                <p className="text-xs pr-3 font-extralight text-gray-300">No Reviews</p>}
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

export type { ShopItemProps};
export default ShopItem;