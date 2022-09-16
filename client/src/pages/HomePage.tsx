import TopNav from "../components/c_global/TopNav";
import msiWallpaper from "/images/msi_desktop.png";
import Gallery from "../components/Gallery";
import PreFooter from "../components/c_global/PreFooter";
import Footer from "../components/c_global/Footer";
import ZipAdd from "../components/ZipAdd";
import QuoteReview from "../components/QuoteReview";
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
=======
import renderProductByCategory from "../utils/renderProductByCategory";
import HomePageBanner from "../components/HomePageBanner";
>>>>>>> toGrid

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

<<<<<<< HEAD
  if (isLoading) return <div>🧐</div>;
=======
  if (isLoading) return <div> </div>;

  const customBuild = renderProductByCategory(data, "V6.png");
  const msiLaptops = renderProductByCategory(data, "laptop.png");
  const desktops = renderProductByCategory(data, "desktop.png");
  const gamingMonitors = renderProductByCategory(data, "monitor.png");
>>>>>>> toGrid

  return (
    <>
      <TopNav />
<<<<<<< HEAD
=======
      <hr />
>>>>>>> toGrid
      <main className="font-poppins mb-auto">
        <img
          className="sm:flex justify-center hidden md:px-24"
          src={msiWallpaper}
        ></img>
        <div className="pt-4 md:pt-10"></div>
<<<<<<< HEAD
        <div className="flex flex-row pl-3 md:px-48 md:justify-between">
=======
        <div className="flex flex-row pl-3 md:px-24 md:justify-between">
>>>>>>> toGrid
          <span className="text-xl md:text-md font-bold">New Products</span>
          <a className="text-blue-300 hidden sm:block underline text-xs">
            See All New Products
          </a>
        </div>
        <div className="pt-6"></div>
<<<<<<< HEAD
        <div className="px-10 md:px-48">
          <Gallery data={data} />
        </div>
        <div className="pt-5"></div>
        <div className="max-w-sm md:max-w-lg lg:flex lg:flex-row lg:px-48 lg:flex-grow pb-8">
          <ZipAdd />
        </div>
        <div className="md:pt-10"></div>
        <HomeProductSection
          bgImg="../public/images/customBuild.png"
          title="Custom Build"
          link="See All Custom Builds"
          productFilter="V6.png"
          data={data}
          category={false}
        />
        <div className="pt-14"></div>
        <HomeProductSection
          bgImg="../public/images/msiLaptops.png"
          title="MSI Laptops"
          data={data}
          link="See All Laptops"
          productFilter="laptop.png"
          category={true}
          categoryList={[
            "MSI GS Series",
            "MSI GT Series",
            "MSI GL Series",
            "MSI GE Series",
          ]}
        />
        <div className="pt-14"></div>
        <HomeProductSection
          bgImg="../public/images/desktops.png"
          title="Desktops"
          data={data}
          link="See All Desktops"
          productFilter="desktop.png"
          category={true}
          categoryList={[
            "MSI Infinite Series",
            "MSI Trident Series",
            "MSI XT Series",
            "MSI Nightblade Series",
          ]}
        />
        <div className="pt-8"></div>
        <HomeProductSection
          bgImg="../public/images/gamingMonitors.png"
          data={data}
          title="Gaming Monitors"
          link="See All Monitors"
          productFilter="monitor.png"
          category={false}
        />
=======
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
            className="inline-grid 
          grid-cols-1 gap-y-5 
          md:grid-cols-3 
          lg:grid-cols-5 lg:grid-rows-4 lg:gap-x-5 lg:gap-y-10 "
          >
            <HomePageBanner
              bgImg="../public/images/customBuild.png"
              title="Custom Build"
              link="See All Custom Builds"
            />
            {customBuild}
            <HomePageBanner
              bgImg="../public/images/msiLaptops.png"
              title="MSI Laptops"
              link="See All Laptops"
            />
            {msiLaptops}
            <HomePageBanner
              bgImg="../public/images/desktops.png"
              title="Desktops"
              link="See All Desktops"
            />
            {desktops}
            <HomePageBanner
              bgImg="../public/images/gamingMonitors.png"
              title="Gaming Monitors"
              link="See All Monitors"
            />
            {gamingMonitors}
          </ul>
        </div>
>>>>>>> toGrid
        <div className="pt-6"></div>
        <QuoteReview />
        <PreFooter />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
