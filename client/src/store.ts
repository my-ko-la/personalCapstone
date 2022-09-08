import create from "zustand";
import { UserStore, User } from "./types";

const populateCart = (data: any): void => {};

const populateUserInfo = (user: User, data: User) => {
  user.fname = data.fname;
  user.lname = data.lname;
  user.email = data.email;
  user.password = data.password;
  user.billingAddress = data.billingAddress;
  user.shippingAddress = data.shippingAddress;
  user.isAdmin = data.isAdmin;
  user.cart = data.cart;
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
