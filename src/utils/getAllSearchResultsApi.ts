import ProductType from "../types/productType";

const getAllSearchResultsApi = (keyword: string): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = [
        {
          id: "1",
          title: keyword,
          price: 100,
          sales: 2,
          imgs: [
            "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
            "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823"
          ]
        },
        ...items
      ];
      resolve(results);
    }, 2000);
  });
};

export default getAllSearchResultsApi;

const items: ProductType[] = [
  {
    id: "1",
    title: "Product 1",
    price: 100,
    sales: 2,
    imgs: [
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823"
    ]
  },
  {
    id: "2",
    title: "Product 2",
    price: 140,
    sales: 3,
    imgs: [
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823"
    ]
  },
  {
    id: "3",
    title: "Product 3",
    price: 200,
    sales: 4,
    imgs: [
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/329904BD-6431-41EE-8503-B68F791919AB.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/CB707E89-EFD8-440B-8FD0-C925B90C1D55.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/B96075BA-BA07-42C2-94D7-AEA37DEFDF3C.jpg?v=1730208823",
      "https://lady90s.com/cdn/shop/files/8E39D147-A506-4633-8026-5565A8EC112C.jpg?v=1730208823"
    ]
  }
];
