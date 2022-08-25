import React, { useState } from "react";
import Footer from "../components/c_global/Footer";
import FormInput from "../components/FormInput";
import PreFooter from "../components/c_global/PreFooter";
import TopNav from "../components/c_global/TopNav";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Your Name",
      type: "text",
      placeholder: "Your Name",
      size: "small",
    },
    {
      id: 2,
      name: "Your Email",
      type: "email",
      placeholder: "Your Email",
      size: "small",
    },
    {
      id: 3,
      name: "Subject",
      type: "text",
      placeholder: "Jot us down a few words, we'll get to you ASAP...",
      size: "large",
    },
  ];

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void =>
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <>
      <TopNav />
      <hr />
      <div className="px-48 font-poppins">
        <div className="h-32 w-full font-poppins gap-5 flex flex-col justify-center items-start">
          <p className="text-xs font-thin">Home {">"} Contact Us</p>
          <h1 className="text-4xl">Contact Us</h1>
        </div>
        <h1 className="font-bold">Contact Us</h1>
        <h5 className="font-light">
          We love hearing from you, our BootLeg-lovers.
        </h5>
        <h5 className="font-light">
          Please contact us and we will make sure to get back to you as soon as
          we possibly can.
        </h5>
        <div className="pt-4"></div>
        <form className="flex flex-col gap-4 justify-start">
          {inputs.flatMap((formItem) => (
            <FormInput key={formItem.id} {...formItem} onChange={handleInput} />
          ))}
        </form>
        <div className="flex flex-row gap-6">
          <div id="addressField"></div>
        </div>
      </div>
      <div className="pt-6"></div>
      <div className="bg-slate-100">
        <PreFooter />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
