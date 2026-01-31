import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import Profile from "./Profile";
import Logo from "../../Logo/Logo";
import { MdLogin } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const publicNavItems = [
    { path: "/", name: "Home" },
    { path: "/meals", name: "Meals" },
  ];

  const logoutUser = usePost({
    url: "/user/logout",
    invalidateQueries: [["user"]],
    message: "Logout successfully",
  });

  console.log("logoutUser", logoutUser);

  const privateNavItems = [{ path: "/dashboard", name: "Dashboard" }];

  const logoutHandler = () => {
    logoutUser.mutate(null, {
      onSuccess: () => {
        localStorage.clear("accessToken");
        setUser(null);
        navigate("/login");
      },
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {publicNavItems.map((nav, i) => (
              <li key={i}>
                <Link to={nav.path}> {nav.name}</Link>
              </li>
            ))}
            {user &&
              privateNavItems.map((privateNav, i) => (
                <li key={i}>
                  <Link to={privateNav.path}> {privateNav.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-5 font-medium ">
          {publicNavItems.map((nav, i) => (
            <li className="hover:border-b-2  transition-all" key={i}>
              <Link to={nav.path}> {nav.name}</Link>
            </li>
          ))}
          {user &&
            privateNavItems.map((privateNav, i) => (
              <li key={i}>
                <Link to={privateNav.path}> {privateNav.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <button
              onClick={logoutHandler}
              disabled={logoutUser.isPending}
              className="btn text-white btn-primary"
            >
              {logoutUser.isPending ? "Logging out" : "Logout"}
            </button>
            <Profile profile={user?.profileImage} />
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn border-none bg-white rounded-full gap-3 shadow-md"
          >
            <MdLogin size={25} />
            <p className="text-lg font-medium">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
