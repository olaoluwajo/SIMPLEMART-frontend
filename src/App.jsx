import { get_categories } from "./store/reducers/homeReducer";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./components/layouts/AppLayout";
import ProtectUser from "./utils/ProtectUser";
import ChangePassword from "./components/dashboard/ChangePassword";
import Wishlist from "./components/dashboard/Wishlist";
import PageNotFound from "./pages/PageNotFound";
import OrderDetails from "./components/dashboard/OrderDetails";
const Home = lazy(() => import("./pages/Home"));
const Shops = lazy(() => import("./pages/Shops"));
const Cart = lazy(() => import("./pages/Cart"));
const Delivery = lazy(() => import("./pages/Delivery"));
const Details = lazy(() => import("./pages/Details"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const CategoryShop = lazy(() => import("./pages/CategoryShop"));
const SearchProducts = lazy(() => import("./pages/SearchProducts"));
const Payment = lazy(() => import("./pages/Payment"));
const Index = lazy(() => import("./components/dashboard/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./components/dashboard/Orders"));

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
              {
                path: "my-orders",
                element: <Orders />,
              },
              {
                path: "change-password",
                element: <ChangePassword />,
              },
              {
                path: "my-wishlist",
                element: <Wishlist />,
              },
              {
                path: "order/details/:orderId",
                element: <OrderDetails />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
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
