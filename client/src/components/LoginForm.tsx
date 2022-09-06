const LoginForm = () => {
  return (
    <div className="font-poppins flex flex-col max-w-xl bg-slate-50 shadow-md items-center">
      <h1 className="pt-4">Login</h1>
      <form
        className="flex flex-col gap-5 items-center rounded-xl justify-center py-10 px-5"
        action=""
      >
        <label className="flex flex-col gap-2" htmlFor="">
          Email:
          <input className="rounded" type="text" />
        </label>

        <label className="flex flex-col gap-2" htmlFor="">
          Password:
          <input type="password" />
        </label>
      </form>
      <hr />
    </div>
  );
};

export default LoginForm;
