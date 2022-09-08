import { useState } from "react";

// Fix layout later

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

  const sendSignUpData = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
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
            type="text"
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
