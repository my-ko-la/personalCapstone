import { User, UserStore } from "../types";

const logoutUserDev = async (store: UserStore<User>) => {
  // no store data is sent in the request
  console.log(JSON.stringify(store.user));

  const res = await fetch("http://localhost:5000/users/logout", {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:5173",
    },
    body: JSON.stringify(store.user),
    mode: "cors",
  });
  store.reset();
  console.log(store);
};

export default logoutUserDev;
