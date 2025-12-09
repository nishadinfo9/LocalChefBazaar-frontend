import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePayment, MdOutlineReviews } from "react-icons/md";
import { PiListFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import Profile from "../components/Home/Header/Profile";
import useAuth from "../hooks/useAuth";
import Loader from "../utils/Loader";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  const dashboardItem = [
    { path: "/", name: "Homepage", icon: <FiHome className="text-lg" /> },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RxDashboard className="text-lg" />,
    },
    {
      path: "/dashboard/my-orders",
      name: "My Orders",
      icon: <LuShoppingCart className="text-lg" />,
    },
    {
      path: "/dashboard/payment-history",
      name: "Payment History",
      icon: <MdOutlinePayment className="text-lg" />,
    },
    {
      path: "/dashboard/my-reviews",
      name: "My review",
      icon: <MdOutlineReviews className="text-lg" />,
    },
    {
      path: "/dashboard/favorite-meals",
      name: "Favorite Meal",
      icon: <GrFavorite className="text-lg" />,
    },
    {
      path: "/dashboard/profile",
      name: "My Profile",
      icon: <CgProfile className="text-lg" />,
    },
    {
      path: "/dashboard/create-meal",
      name: "Create Meal",
      icon: <IoCreateOutline className="text-xl" />,
    },
    {
      path: "/dashboard/my-meals",
      name: "My Meals",
      icon: <PiListFill className="text-lg" />,
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-200">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="flex items-center justify-between w-full px-5">
            <h2 className="text-lg font-bold">LocalChefBazaar</h2>
            <Profile profile={user?.profileImage} />
          </div>
        </nav>
        <div className="p-4 bg-base-100">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full gap-2 grow">
            {dashboardItem.map((nav, i) => (
              <li key={i}>
                <Link
                  to={nav.path}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip={nav.name}
                >
                  {nav.icon}
                  <span className="is-drawer-close:hidden">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
