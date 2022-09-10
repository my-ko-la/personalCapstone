type Dimensions = {
  height: number;
  width: number;
  depth: number;
};

type Product = {
  name: string;
  price: { amount: number; currency: string };
  description: string;
  productImage: string;
  dimensions: Dimensions;
  isInStock: boolean;
  isOnSale: boolean;
  showcased: boolean;
};

type User = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  billingAddress: string;
  shippingAddress: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
  cart: Product[];
};

type UserStore<T> = {
  user: T;
  populateUserInfo: (data: T) => void;
  reset: () => void;
};

export type { UserStore, User };
