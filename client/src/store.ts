import create from "zustand";
import { UserStore, User } from "./types";

const populateCart = (data: any): void => {};

const populateUserInfo = (user: User, data: User) => {
  user = { ...data };
};

const emptyCart = (): void => {};

const useStore = create<UserStore<User>>(
  (set): UserStore<User> => ({
    user: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      billingAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      shippingAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      isAdmin: false,
      isLoggedIn: false,
      cart: [],
    },
    populateUserInfo: (data: User) =>
      // isn't this not supposed to be typed ?????
      set((state: any) => ({
        ...state,
        user: populateUserInfo(state.user, data),
      })),
  })
);

export default useStore;
