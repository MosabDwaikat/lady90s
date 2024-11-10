import Product from "../types/product";

export const getCartItemsApi = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 2,
    image: "https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 140,
    quantity: 3,
    image: "https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    quantity: 4,
    image: "https://lady90s.com/cdn/shop/files/5F09A325-F48E-4A71-A280-CDB02D16DA49.jpg"
  }
];
