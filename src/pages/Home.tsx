import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import msiWallpaper from "/images/msi_desktop.png";
import ShopItem from "../components/ShopItem";
import data from "../data/shop.json";

const Home = () => 
{
    const shopItems = data.map((item) =>
    <ShopItem {...item} />
    )
    
    return (
        <>
            <TopBar />
            <Navbar />
            <hr></hr>
            <img className="sm:flex justify-center hidden md:inline-flex  lg:min-w-[1120px] md:px-48" src={msiWallpaper}></img>
            <div className="pt-10"></div>
            <div className="flex flex-row px-24 md:px-48 justify-between">
                <span className="font-bold">New Products</span>
                <a className="text-blue-300 underline text-xs">See All Products</a>
            </div>
            <div className="pt-6"></div>
            <div className="px-48 flex flex-row gap-6">
                {shopItems} 
            </div> 
        </>
    )
}

export default Home;