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
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import CreateMeal from "../pages/Dashboard/Chef/CreateMeal/CreateMeal";
import MyMeals from "../pages/Dashboard/Chef/MyMeals/MyMeals";

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
        { path: "/meals/:id", Component: ViewDetails },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, Component: Dashboard },
        { path: "/dashboard/profile", Component: MyProfile },
        { path: "/dashboard/create-meal", Component: CreateMeal },
        { path: "/dashboard/my-meals", Component: MyMeals },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
