import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAuthAtom } from "../atomStore";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<{
    email: String;
    password: String;
  }>({
    email: "",
    password: "",
  });

  const [, setUser] = useAtom(userAuthAtom);

  const navigate = useNavigate();

  const sendLoginData = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        mode: "cors",
      });
      const data = await res.json();
      console.log(res);
      setUser({
        email: data.email,
        fname: data.fname,
        password: data.password,
        token: data.token,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendLoginData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-poppins flex flex-col max-w-xl items-center">
      <form
        method="post"
        className="flex flex-col gap-5 items-center justify-center py-8 px-5"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1" htmlFor="email">
          Email:
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
            onChange={handleChange}
            name="email"
          />
        </label>

        <label className="flex flex-col gap-1" htmlFor="password">
          Password:
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="password"
            onChange={handleChange}
            name="password"
          />
        </label>

        <button className="py-2 px-4 hover:bg-black hover:text-white hover:transition-all rounded-sm transition-all duration-800 hover:duration-800 hover:ease-linear">
          Log in
        </button>
      </form>

      <hr />
      <div className="pt-2"></div>
      <Link to="/signup">
        <p className="hover:text-blue-500">Sign up?</p>
      </Link>
      <button className="bg-red-600 text-white" type="submit">
        PAUSED: LOGOUT FOR DEV ONLY
      </button>
    </div>
  );
};

export default LoginForm;
