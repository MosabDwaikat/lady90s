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
import Wishlist from "./pages/Wishlist";
import getAllSearchResultsApi from "./utils/getAllSearchResultsApi";
import ProductType from "./types/productType";

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

const searchResultsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { keyword } = params;
  if (!keyword) {
    throw new Error("invalid keyword");
  }
  const searchResults: ProductType[] = await getAllSearchResultsApi(keyword);

  if (!searchResults) {
    throw new Error("no search results found");
  }
  return searchResults;
};

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/search/:keyword",
        element: <Search />,
        loader: searchResultsLoader
      },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
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
