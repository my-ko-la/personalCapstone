import { ShopItemProps } from "../components/ShopItem";
import ShopItem from "../components/ShopItem";

const renderProductByCategory = 
    (   
        data: ShopItemProps[],
        filter: string,
        category?: string,

    ) => {
        // intermediateData type?
        let intermediateData;
        
        if (category) 
        {
            intermediateData = data
                .filter(item => item.category === category)
                .filter(item => item.productPicture.endsWith(filter))
                .map((item, index) =>
                index < 4 && <ShopItem {...item} />
                )
        } else {
            intermediateData = data
            .filter(item => item.productPicture.endsWith(filter))
            .map((item, index) =>
            index < 4 && <ShopItem {...item} />
            )
        }
        return intermediateData
        
    }

export default renderProductByCategory;