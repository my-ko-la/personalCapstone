import ShopItem, { ShopItemProps } from "../components/ShopItem";
import { animated, useSprings } from "@react-spring/web";

const applyShopItemAnimation = (items: ShopItemProps[]) => {

    // animation instructions
    const animInst = 
    [
        {
            id:1,
            from: {opacity: 0, marginLeft: -10},
            to: {opacity: 1, marginLeft: 0},
            config: {duration: 500},
            delay: 200,
        },
        {
            id:2,
            from: {opacity: 0, marginLeft: -20},
            to: {opacity: 1, marginLeft: 0},
            config: {duration: 400},
            delay: 300,
        },
        {
            id:3,
            from: {opacity: 0, marginLeft: -30},
            to: {opacity: 1, marginLeft: 0},
            config: {duration: 300},
            delay: 400,
        }, 
        {
            id:4,
            from: {opacity: 0, marginLeft: -40},
            to: {opacity: 1, marginLeft: 0},
            config: {duration: 200},
            delay: 500,
        },
    ];

    const springs = useSprings(
        items.length,
        animInst.map(({id, ...param}) => {
            return param;
        })
    )

    const animatedShopItems = springs.map((spring, index) => 
        <animated.div 
        key={animInst[index].id}
        style={{...spring}}
        >
            <ShopItem {...items[index]} />
        </animated.div>)

    return (
        <>
            {animatedShopItems}
        </>
    )

}

export default applyShopItemAnimation;