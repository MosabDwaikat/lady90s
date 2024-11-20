import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import App from "./App";
import Search from "./pages/Search";
import Collection from "./pages/Collection";
import { Collections } from "./utils/collectionContentProvider";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
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
