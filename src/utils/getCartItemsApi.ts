import { CartItemType } from "../types/cartItemType";

export const getCartItemsApi = (): Promise<CartItemType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};

const items: CartItemType[] = [
  {
    product: {
      id: "1",
      title: "Product 1",
      price: 100,
      sales: 2,
      imgs: ["https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"]
    },
    quantity: 2
  },
  {
    product: {
      id: "2",
      title: "Product 2",
      price: 140,
      sales: 3,
      imgs: ["https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"]
    },
    quantity: 3
  },
  {
    product: {
      id: "3",
      title: "Product 3",
      price: 200,
      sales: 4,
      imgs: ["https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"]
    },
    quantity: 4
  }
];
