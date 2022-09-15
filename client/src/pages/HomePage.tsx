import TopNav from "../components/c_global/TopNav";
import msiWallpaper from "/images/msi_desktop.png";
import Gallery from "../components/Gallery";
import PreFooter from "../components/c_global/PreFooter";
import Footer from "../components/c_global/Footer";
import ZipAdd from "../components/ZipAdd";
import HomeProductSection from "../components/HomeProductSection";
import QuoteReview from "../components/QuoteReview";
import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return <div>🧐</div>;

  return (
    <>
      <TopNav />
      <main className="font-poppins mb-auto">
        <img
          className="sm:flex justify-center hidden md:inline-flex md:px-48"
          src={msiWallpaper}
        ></img>
        <div className="pt-4 md:pt-10"></div>
        <div className="flex flex-row pl-3 md:px-48 md:justify-between">
          <span className="text-xl md:text-md font-bold">New Products</span>
          <a className="text-blue-300 hidden sm:block underline text-xs">
            See All New Products
          </a>
        </div>
        <div className="pt-6"></div>
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
        <div className="pt-6"></div>
        <QuoteReview />
        <PreFooter />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
