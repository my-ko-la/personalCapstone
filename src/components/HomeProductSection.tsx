import type {ShopItemProps} from './ShopItem';
import ShopItem from "./ShopItem";
import data from '../data/shop.json';
import { useState } from "react";
import renderProductByCategory from '../utils/renderProductByCategory';



interface HomeProductSectionProps {
    title: string
    bgImg: string
    link: string 
    productFilter: string
    category: boolean
    categoryList?: string[]
    shopItems?: ShopItemProps
}

const HomeProductSection: React.FunctionComponent<HomeProductSectionProps> = (props) => {
    
    // find a better way yeah?
    const [categoryShown, setCategoryShown] = 
    useState(props.categoryList ? props.categoryList[0] : "");
    

    const shopItems = renderProductByCategory(data, props.productFilter, categoryShown);
   
    // why do we use rest parameters here?
    const inputRadioLabels = props.categoryList?.map((category, index) =>
    (
        <div>
            <input className="hidden peer" type="radio" name="category" id={category} value={category} onChange={(e) => setCategoryShown(e.target.value)} 
            {...(index === 0 && {defaultChecked: true})}/>
            <label className="cursor-pointer appearance-none peer-checked:border-b-blue-600 peer-checked:border-b-2 peer-checked:text-black peer-checked:font-bold" htmlFor={category}>{category}</label>
        </div>
    ))


    return (
        <section className="flex flex-col h-[22rem] relative px-48 justify-center">
            {props.category && 
            <form className="flex flex-row text-md gap-5 text-gray-400">
                {inputRadioLabels}
            </form>            
            }
        <div className="pt-2"></div>
        <div className="flex flex-row">
            <div className="flex flex-col justify-center relative items-center">
                <p className="absolute text-white font-semibold text-lg left-1/5 top-1/2">{props.title}</p>
                <a className="absolute text-white text-sm font-light bottom-4 underline" href="">{props.link}</a>
                <img src={props.bgImg} className="h-full w-60" alt="" />
            </div>
            <div className="flex flex-row pl-10 items-center">
                {shopItems}
            </div>
        </div>
        </section>
    )
}

export default HomeProductSection;