type User = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  isAdmin: boolean;
};

export type { User };
