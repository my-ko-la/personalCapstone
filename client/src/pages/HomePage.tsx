import TopNav from "../components/c_global/TopNav";
import msiWallpaper from "/images/msi_desktop.png";
import Gallery from "../components/Gallery";
import PreFooter from "../components/c_global/PreFooter";
import Footer from "../components/c_global/Footer";
import ZipAdd from "../components/ZipAdd";
import QuoteReview from "../components/QuoteReview";
import { useQuery } from "@tanstack/react-query";
import renderProductByCategory from "../utils/renderProductByCategory";
import HomePageBanner from "../components/HomePageBanner";

const HomePage = () => {
  const { data, isLoading, error } = useQuery(["shopItems"], async () => {
    const res = await fetch("http://localhost:5000/products/shop", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const data = await res.json();
    return data;
  });

  if (isLoading) return <div> </div>;

  const customBuild = renderProductByCategory(data, "V6.png");
  const msiLaptops = renderProductByCategory(data, "laptop.png");
  const desktops = renderProductByCategory(data, "desktop.png");
  const gamingMonitors = renderProductByCategory(data, "monitor.png");

  return (
    <div className="relative">
      <TopNav />
      <hr />
      <main className="font-poppins mb-auto">
        <img
          className="sm:flex justify-center hidden md:px-24"
          src={msiWallpaper}
        ></img>
        <div className="pt-4 md:pt-10"></div>
        <div className="flex flex-row pl-3 md:px-24 md:justify-between">
          <span className="text-xl md:text-md font-bold">New Products</span>
          <a className="text-blue-300 hidden sm:block underline text-xs">
            See All New Products
          </a>
        </div>
        <div className="pt-6"></div>
        <div className="px-10 md:px-24">
          <Gallery data={data} />
        </div>
        <div className="pt-5"></div>
        <div
          className=" flex flex-row rounded-md justify-center items-center
        bg-[#f7f4ff] lg:max-w-7xl mx-auto"
        >
          <ZipAdd />
        </div>
        <div className="pt-6"></div>
        <div className="flex flex-row justify-center">
          <ul
            className="grid 
          grid-cols-2 gap-y-5 sm:gap-x-3
          md:grid-cols-3 md:grid-flow-row md:gap-2
          lg:grid-cols-5 lg:grid-rows-4 lg:gap-x-5 lg:gap-y-10 "
          >
            <HomePageBanner
              bgImg="../public/images/customBuild.png"
              title="Custom Build"
              link="See All Custom Builds"
              gridPos="sm:col-span-2 sm:row-start-1"
            />
            {customBuild}
            <HomePageBanner
              bgImg="../public/images/msiLaptops.png"
              title="MSI Laptops"
              link="See All Laptops"
              gridPos="sm:col-span-2 sm:row-start-4"
            />
            {msiLaptops}
            <HomePageBanner
              bgImg="../public/images/desktops.png"
              title="Desktops"
              link="See All Desktops"
              gridPos="sm:col-span-2 sm:row-start-7"
            />
            {desktops}
            <HomePageBanner
              bgImg="../public/images/gamingMonitors.png"
              title="Gaming Monitors"
              link="See All Monitors"
              gridPos="sm:col-span-2 sm:row-start-10"
            />
            {gamingMonitors}
          </ul>
        </div>
        <div className="pt-6"></div>
        <QuoteReview />
        <PreFooter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
