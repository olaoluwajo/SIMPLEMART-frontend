import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CategoryShop from "./pages/CategoryShop";
import { get_categories } from "./store/reducers/homeReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchProducts from "./pages/SearchProducts";
import AppLayout from "./components/layouts/AppLayout";
import Payment from "./pages/Payment";
import ProtectUser from "./utils/ProtectUser";
import Dashboard from "./pages/Dashboard";
import Index from "./components/dashboard";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/products?",
        element: <CategoryShop />,
      },
      {
        path: "/products/search?",
        element: <SearchProducts />,
      },
      {
        path: "/product/details/:slug",
        element: <Details />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard",
        element: <ProtectUser />,
        children: [
          {
            path: "",
            element: <Dashboard />,
            children: [
              {
                path: "",
                element: <Index />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
