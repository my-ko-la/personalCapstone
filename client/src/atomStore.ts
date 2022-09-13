import { atom } from "jotai";

export const userAuthAtom = atom({
  email: "",
  fname: "",
  password: "",
  token: "",
});
