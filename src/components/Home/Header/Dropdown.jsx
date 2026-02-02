import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dropdown = ({ publicNavItems, privateNavItems }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="md:hidden relative">
        <div onClick={() => setIsOpen(!isOpen)}>
          <RiMenu3Fill size={25} />
        </div>

        <ul
          className={`absolute right-0 z-50 w-32 p-2 rounded-box shadow-md bg-[#FFF1E1] transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {publicNavItems.map((nav, i) => (
            <li key={i}>
              <Link
                to={nav.path}
                onClick={() => setIsOpen(false)}
                className="block hover:bg-gray-100 rounded"
              >
                {nav.name}
              </Link>
            </li>
          ))}
          {!!user &&
            privateNavItems.map((nav, i) => (
              <li key={i}>
                <Link
                  to={nav.path}
                  onClick={() => setIsOpen(false)}
                  className="block  hover:bg-gray-100 rounded"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
