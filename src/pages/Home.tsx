import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import msiWallpaper from "../assets/images/msi_desktop.png";
import ShopItem from "../components/ShopItem";
import data from "../data/shop.json";

const Home = () => 
{
    const shopItems = data.map((item) =>
    <ShopItem
        name={item.name}
        isOnSale={item.isOnSale}
        price={item.price}
        isRated={item.isRated}
        rating={item.rating}
        isReviewed={item.isReviewed}
        reviews={item.reviews}
        inStock={item.inStock}
        productPicture={item.productPicture}
    />
    )
    
    return (
        <>
            <TopBar />
            <Navbar />
            <hr></hr>
            <img className="flex justify-center px-48" src={msiWallpaper}></img>
            <div className="pt-8"></div>
            <div className="flex flex-row px-48 justify-between">
                <span className="font-bold">New Products</span>
                <a className="text-blue-300 underline text-xs">See All Products</a>
            </div>
           {shopItems} 
                
        </>
    )
}

export default Home;