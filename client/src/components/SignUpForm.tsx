import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Fix layout later
// Implement confirm password later
// Implement user existence || JWT token ?

const SignUpForm = () => {
  const [signupData, setSignupData] = useState<{
    email: String;
    password: String;
    fname: String;
    lname: String;
    billingAddress: String;
    shippingAddress: String;
  }>({
    email: "",
    password: "",
    fname: "",
    lname: "",
    billingAddress: "",
    shippingAddress: "",
  });

  const navigate = useNavigate();

  const sendSignUpData = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        body: JSON.stringify(signupData),
        mode: "cors",
      });
      const data = await res.json();
      navigate("/login");
    } catch (err) {
      console.log(err);
      // const data = await res.json();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSignUpData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mb-auto font-poppins flex flex-col items-center ">
        <form
          method="post"
          className="flex flex-col gap-3 items-center justify-center py-8 px-5"
          onSubmit={handleSubmit}
        >
          <div className="pt-2"></div>
          <p className="text-xl">Sign up</p>
          <div className="pt-2"></div>
          <label className="text-sm" htmlFor="fname">
            First Name
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="fname"
          />
          <label className="text-sm" htmlFor="lname">
            Last Name
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="lname"
          />
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="email"
          />
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="password"
            onChange={handleChange}
            name="password"
          />
          <label className="text-sm" htmlFor="billingAddress">
            Billing Address
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="billindAddress"
          />
          <label className="text-sm text-left" htmlFor="billingAddress">
            Shipping Address
          </label>
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="shippingAddress"
          />

          <button className="py-2 px-4 hover:bg-black hover:text-white hover:transition-all rounded-sm  hover:duration-800 hover:ease-linear">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
