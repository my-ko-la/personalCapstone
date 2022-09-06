import TopNav from "../components/c_global/TopNav";
import Footer from "../components/c_global/Footer";
import PreFooter from "../components/c_global/PreFooter";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <TopNav />
      <hr />
      <div className="pt-6"></div>
      <div className="mb-auto w-screen flex flex-col items-center justify-center">
        <LoginForm />
      </div>
      <PreFooter />
      <Footer />
    </>
  );
};

export default Login;
