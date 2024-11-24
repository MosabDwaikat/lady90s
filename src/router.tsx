import { createBrowserRouter, LoaderFunctionArgs } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import App from "./App";
import Search from "./pages/Search";
import Collection from "./pages/Collection";
import { Collections } from "./utils/collectionContentProvider";
import Product from "./pages/Product";
import getProductById from "./utils/getProductById";
import Cart from "./pages/Cart";

const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Error("invalid id");
  }
  const product = await getProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/product/:id",
        element: <Product />,
        loader: productLoader
      },
      ...Collections.map((collection) => {
        return {
          path: `/${collection.target}`,
          element: <Collection targetURL={collection.target} info={collection.info} />
        };
      })
    ],

    errorElement: <ErrorPage />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true
  }
});
export default router;
