const LoginForm = () => {
  return (
    <div className="font-poppins flex flex-col max-w-xl items-center">
      <p className="pt-4 text-2xl">Login</p>
      <form
        className="flex flex-col gap-5 items-center rounded-xl justify-center py-10 px-5"
        action=""
      >
        <label className="flex flex-col gap-2" htmlFor="">
          Email:
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="text"
          />
        </label>

        <label className="flex flex-col gap-2" htmlFor="">
          Password:
          <input
            className="block mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="password"
          />
        </label>
      </form>
      <hr />
      <p>Sign up?</p>
    </div>
  );
};

export default LoginForm;
