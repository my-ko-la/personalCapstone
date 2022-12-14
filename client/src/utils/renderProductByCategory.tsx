import { ShopItemPropsWITHDB } from "../components/ShopItem";
import ShopItem from "../components/ShopItem";

const renderProductByCategory = (
  data: ShopItemPropsWITHDB[], //
  filter: string,
  category?: string
) => {
  // intermediateData type?
  let intermediateData;

  if (category) {
    intermediateData = data
      .filter((item) => item.category === category)
      .filter((item) => item.productPicture.endsWith(filter))
      .map(
        (item, index) =>
          index < 4 && (
            <li className="place-self-center inline border-2 outline-2 border-cyan-200">
              <ShopItem key={index} {...item} />
            </li>
          )
      );
  } else {
    intermediateData = data
      .filter((item) => item.productPicture.endsWith(filter))
      .map(
        (item, index) =>
          index < 4 && (
            <li className="place-self-center">
              <ShopItem key={index} {...item} />
            </li>
          )
      );
  }
  return intermediateData;
};

// I know that using the index is an anti-pattern,
// but I'm not sure how to generate the key prop here
export default renderProductByCategory;
