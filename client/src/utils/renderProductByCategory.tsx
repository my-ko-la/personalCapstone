import { ShopItemProps } from "../components/ShopItem";
import ShopItem from "../components/ShopItem";

const generateKey = () => {
  return Math.random().toString(36).slice(2, 9);
};

const renderProductByCategory = (
  data: ShopItemProps[],
  filter: string,
  category?: string
) => {
  // intermediateData type?
  let intermediateData;

  if (category) {
    intermediateData = data
      .filter((item) => item.category === category)
      .filter((item) => item.productPicture.endsWith(filter))
      .map((item, index) => index < 4 && <ShopItem key={index} {...item} />);
  } else {
    intermediateData = data
      .filter((item) => item.productPicture.endsWith(filter))
      .map((item, index) => index < 4 && <ShopItem key={index} {...item} />);
  }
  return intermediateData;
};

// I know that using the index is an anti-pattern,
// but I'm not sure how to generate the key prop here
export default renderProductByCategory;
