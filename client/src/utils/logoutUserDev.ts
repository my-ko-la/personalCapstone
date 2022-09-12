import { User, UserStore } from "../types";

const logoutUserDev = async (store: UserStore<User>) => {
  // no store data is sent in the request
  console.log(JSON.stringify(store.user));

  const res = await fetch("http://localhost:5000/users/logout", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(store.user),
  });
  store.reset();
  console.log(store);
};

export default logoutUserDev;
