import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Notfound from "../pages/Notfound/Notfound";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Meals from "../pages/Meals/Meals";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Loader from "../utils/Loader";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import CreateMeal from "../pages/Dashboard/Chef/CreateMeal/CreateMeal";
import MyMeals from "../pages/Dashboard/Chef/MyMeals/MyMeals";
import OrderPage from "../pages/OrderPage/OrderPage";
import MyOrders from "../pages/Dashboard/User/MyOrders/MyOrders";
import PaymentSuccess from "../pages/Dashboard/User/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/User/Payment/PaymentCancel";
import MyReviews from "../pages/Dashboard/User/MyReviews/MyReviews";
import FavoriteMeals from "../pages/Dashboard/User/FavoriteMeals/FavoriteMeals";
import PaymentHistory from "../pages/Dashboard/User/Payment/PaymentHistory";
import OrderRequests from "../pages/Dashboard/Chef/OrderRequests/OrderRequests";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageRequests from "../pages/Dashboard/Admin/ManageRequests/ManageRequests";
import Protected from "../Protected/Protected";
import Forbidden from "../pages/Forbidden/Forbidden";
import PlatformStatistics from "../pages/Dashboard/Admin/PlatformStatistics/PlatformStatistics";
import ChefProtected from "../Protected/ChefProtected";
import AdminProtected from "../Protected/AdminProtected";
import Banned from "../pages/Banned/Banned";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import TermsOfService from "../pages/Terms/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const AppRoute = () => {
  const router = createBrowserRouter([
    { path: "/*", Component: Notfound },
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
    {
      path: "/",
      element: <Layout />,
      HydrateFallback: <Loader />,
      children: [
        { index: true, Component: Home },
        { path: "/meals", Component: Meals },
        { path: "/forbidden", Component: Forbidden },
        { path: "/banned", Component: Banned },
        { path: "/terms", Component: TermsOfService },
        { path: "/privacy-policy", Component: PrivacyPolicy },
        {
          path: "/meals/:id",
          element: (
            <Protected>
              <ViewDetails />
            </Protected>
          ),
        },
        {
          path: "/meals/order/:mealId",
          element: (
            <Protected>
              <OrderPage />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <DashboardLayout />
        </Protected>
      ),
      HydrateFallback: <Loader />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/dashboard/profile", element: <MyProfile /> },
        { path: "/dashboard/my-orders", element: <MyOrders /> },
        { path: "/dashboard/my-reviews", element: <MyReviews /> },
        { path: "/dashboard/favorite-meals", element: <FavoriteMeals /> },
        { path: "/dashboard/payment-history", element: <PaymentHistory /> },
        { path: "/dashboard/payments-success", element: <PaymentSuccess /> },
        { path: "/dashboard/payments-cancel", element: <PaymentCancel /> },

        //chef route
        {
          path: "/dashboard/my-meals",
          element: (
            <ChefProtected>
              <MyMeals />
            </ChefProtected>
          ),
        },
        {
          path: "/dashboard/create-meal",
          element: (
            <ChefProtected>
              <CreateMeal />
            </ChefProtected>
          ),
        },
        {
          path: "/dashboard/order-requests",
          element: (
            <ChefProtected>
              <OrderRequests />
            </ChefProtected>
          ),
        },

        //admin route
        {
          path: "/dashboard/manage-users",
          element: (
            <AdminProtected>
              <ManageUser />
            </AdminProtected>
          ),
        },
        {
          path: "/dashboard/manage-requests",
          element: (
            <AdminProtected>
              <ManageRequests />
            </AdminProtected>
          ),
        },
        {
          path: "/dashboard/slatform-statistics",
          element: (
            <AdminProtected>
              <PlatformStatistics />
            </AdminProtected>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
