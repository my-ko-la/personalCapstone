import Footer from "../components/c_global/Footer";
import PreFooter from "../components/c_global/PreFooter";
import TopNav from "../components/c_global/TopNav";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <TopNav />
      <hr />
      <div className="pt-6"></div>
      <div className="mb-auto w-screen flex flex-col items-center justify-center">
        <SignUpForm />
      </div>
      <PreFooter />
      <Footer />
    </>
  );
};

export default SignUp;
