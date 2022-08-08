import ShopItemProps from "./ShopItem";
import ShopItem from "./ShopItem";
import data from '../data/shop.json';


interface HomeProductSectionProps {
    title: string
    bgImg: string
    link: string 
    shopItems?: typeof ShopItemProps
}

const HomeProductSection: React.FunctionComponent<HomeProductSectionProps> = (props) => {
    
    const shopItems = data
    .filter(item => item.productPicture.endsWith("V6.png"))
    .map((item, index) => 
        index < 4 && <ShopItem {...item} />
    )
    
    return (
        <section className="flex flex-row h-96 relative px-48 gap-10 justify-center">
            <div className="flex flex-col justify-center relative items-center">
                <p className="absolute text-white font-semibold text-lg left-1/5 top-1/2">{props.title}</p>
                <a className="absolute text-white text-sm font-light bottom-4 underline" href="">{props.link}</a>
                <img src={props.bgImg} className="h-full w-52" alt="" />
            </div>
            <div className="flex flex-row pl-10 items-center">
                {shopItems}
            </div>
        </section>
    )
}

export default HomeProductSection;