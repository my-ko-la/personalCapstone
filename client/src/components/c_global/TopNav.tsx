import TopBar from "./TopBar";
import Navbar from "./Navbar";

const TopNav = () => {
  return (
    <>
      <TopBar />
      <div className="pt-4 sm:hidden"></div>
      <Navbar />
    </>
  );
};

export default TopNav;
