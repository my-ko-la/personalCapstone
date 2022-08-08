import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';   
import ShopItem from './ShopItem';
import data from '../data/shop.json';   

const Gallery = () => {

    const handleDragStart = ( e: any ) => e.preventDefault();

    const shopItems = data
    .filter(item => item.showcased)
    .map((item) =>
        <ShopItem {...item} />
    )

    const responsive=
                {
                    0:{items:1,},
                    396:{items:2,},
                    768:{items:3,},
                    1280:{items:4,},
                    1440: {items:5},
                }
    return (    
        <AliceCarousel mouseTracking 
        disableDotsControls={true}
        infinite={true}
        responsive={responsive} items={shopItems} />
    )
}

export default Gallery;