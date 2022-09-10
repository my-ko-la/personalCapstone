import create from "zustand";
import { persist } from "zustand/middleware";
import { User, UserStore } from "./types";

const initialUserState: User = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  billingAddress: "",
  shippingAddress: "",
  isAdmin: false,
  isLoggedIn: false,
  cart: [],
};

const populateCart = (data: any): void => {};

const populateUserInfo = (user: User, data: User) => {
  user = Object.assign(user, data);
};

const emptyCart = (): void => {};

const useStore = create<UserStore<User>>(
  // see https://github.com/pmndrs/zustand/issues/650
  (persist as any)(
    (set: any): UserStore<User> => ({
      user: Object.assign(initialUserState),
      populateUserInfo: (data: User) =>
        set((state: any) => ({
          ...state,
          user: populateUserInfo(state.user, data),
        })),
      reset: () => set(initialUserState),
    }),
    {
      name: "user",
    }
  )
);

export default useStore;
