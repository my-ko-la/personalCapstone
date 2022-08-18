import InfoSection from "../components/InfoSection";
import QuoteReview from "../components/QuoteReview";
import TopNav from "../components/TopNav";
import aboutData from "../data/about.json";

const About = () => {
  const aboutItems = aboutData.map((item) => <InfoSection {...item} />);

  return (
    <>
      <TopNav />
      <hr />
      <div className="h-32 w-full font-poppins px-48 gap-5 flex flex-col justify-center items-start">
        <p className="text-xs font-thin">Home {">"} About Us</p>
        <h1 className="text-4xl">About Us</h1>
      </div>
      {aboutItems}
      <QuoteReview />
    </>
  );
};

export default About;
