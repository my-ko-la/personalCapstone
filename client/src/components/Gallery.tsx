import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ShopItem, { ShopItemPropsWITHDB } from "./ShopItem";
//import data from "../data/shop.json";

interface GalleryProps {
  data: ShopItemPropsWITHDB[];
}

const Gallery: React.FunctionComponent<GalleryProps> = (props) => {
  const shopItems = props?.data
    .filter((item) => item.showcased)
    .map((item, index) => <ShopItem key={index} {...item} />);

  const responsive = {
    240: { items: 1 },
    768: { items: 2 },
    1280: { items: 4 },
    1440: { items: 5 },
  };
  return (
    <AliceCarousel
      mouseTracking
      disableDotsControls={true}
      autoWidth={true}
      autoPlay={true}
      autoPlayInterval={3000}
      autoPlayStrategy={"action"}
      animationEasingFunction={"ease-out"}
      infinite={true}
      responsive={responsive}
      items={shopItems}
    />
  );
};

export default Gallery;
