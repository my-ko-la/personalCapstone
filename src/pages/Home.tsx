import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import msiWallpaper from "../assets/images/msi_desktop.png";

const Home = () => 
{
    return (
        <>
            <TopBar />
            <Navbar />
            <hr></hr>
            <img className="flex justify-center px-48" src={msiWallpaper}></img>
            <div className="pt-6"></div>
            <div className="flex flex-row px-48 justify-between">
                <span className="font-bold">New Products</span>
                <a className="text-blue-300 underline text-xs">See All Products</a>
            </div>
                
        </>
    )
}

export default Home;