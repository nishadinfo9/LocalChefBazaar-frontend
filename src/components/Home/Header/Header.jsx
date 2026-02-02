import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import Profile from "./Profile";
import Logo from "../../Logo/Logo";
import { MdLogin } from "react-icons/md";
import Button from "../../../utils/Button";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const publicNavItems = [
    { path: "/", name: "Home" },
    { path: "/our-menu", name: "Our Menu" },
    { path: "/foods", name: "Foods" },
    { path: "/about-us", name: "About Us" },
  ];

  const logoutUser = usePost({
    url: "/user/logout",
    invalidateQueries: [["user"]],
    message: "Logout successfully",
  });

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
    <div className="flex items-center justify-between py-5">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-10">
        {publicNavItems.map((nav, i) => (
          <div key={i} className="relative group">
            <Link
              to={nav.path}
              className="pb-1 transition-colors duration-300 ease-in-out hover:text-primary"
            >
              {nav.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        ))}
        {user &&
          privateNavItems.map((privateNav, i) => (
            <div key={i} className="relative group">
              <Link
                to={privateNav.path}
                className="pb-1 transition-colors duration-300 ease-in-out hover:text-primary"
              >
                {privateNav.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
      </div>
      <div>
        <div className="flex gap-5">
          {user ? (
            <>
              <Button
                onClick={logoutHandler}
                disabled={logoutUser.isPending}
                className="btn text-white w-28"
              >
                {logoutUser.isPending ? "Logging out" : "Logout"}
              </Button>
              <Profile profile={user?.profileImage} />
            </>
          ) : (
            <Link
              to={"/login"}
              className="px-7 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in border-2 border-primary rounded-full gap-3"
            >
              <p className="text-lg font-medium">Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

// return (
//   <div className="navbar py-5">
//     <div className="navbar-start">
//       <div className="dropdown">
//         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {" "}
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />{" "}
//           </svg>
//         </div>
//         <ul
//           tabIndex="-1"
//           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//         >
//           {publicNavItems.map((nav, i) => (
//             <li key={i}>
//               <Link to={nav.path}> {nav.name}</Link>
//             </li>
//           ))}
//           {user &&
//             privateNavItems.map((privateNav, i) => (
//               <li key={i}>
//                 <Link to={privateNav.path}> {privateNav.name}</Link>
//               </li>
//             ))}
//         </ul>
//       </div>
//       <Logo />
//     </div>
//     <div className="navbar-center hidden lg:flex">
//       <ul className="flex items-center gap-8 font-medium ">
//         {publicNavItems.map((nav, i) => (
//           <li key={i} className="relative group">
//             <Link
//               to={nav.path}
//               className="pb-1 transition-colors duration-300 ease-in-out hover:text-primary"
//             >
//               {nav.name}
//               <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//         ))}

//         {user &&
//           privateNavItems.map((privateNav, i) => (
//             <li key={i}>
//               <Link to={privateNav.path}> {privateNav.name}</Link>
//             </li>
//           ))}
//       </ul>
//     </div>
//     <div className="navbar-end gap-5">
//       {user ? (
//         <>
//           <button
//             onClick={logoutHandler}
//             disabled={logoutUser.isPending}
//             className="btn text-white btn-primary"
//           >
//             {logoutUser.isPending ? "Logging out" : "Logout"}
//           </button>
//           <Profile profile={user?.profileImage} />
//         </>
//       ) : (
//         <Link
//           to={"/login"}
//           className="px-7 py-1 text-primary hover:bg-primary hover:text-white transition-all ease-in-out border-2 border-primary rounded-full gap-3"
//         >
//           <p className="text-lg font-medium">Login</p>
//         </Link>
//       )}
//     </div>
//   </div>
// );
