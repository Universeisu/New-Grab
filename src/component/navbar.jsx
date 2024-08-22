import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const menus = {
    ROLES_ADMIN: [
      { name: "Add restaurant", link: "/add" },
      { name: "Search", link: "/search" },
    ],
    ROLES_USER: [
      {
        name: "Search",
        link: "/search",
      },
    ],
    ROLES_MODERATOR: [
      { name: "Add restaurant", link: "/add" },
      { name: "Search", link: "/search" },
    ],
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {user &&
              menus[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                </li>
              ))}
          </ul>
        </button>
      </div>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Grab Restaurant
        </a>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <div>
            Welcome,{" "}
            <span className="text-red-500">
              {user.name}
              {""}
              {user.roles.map((role, index) => (
                <div key={index} className="badge text-xs badge-accent">
                  {role}
                </div>
              ))}
            </span>
          </div>
        )}
        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <RegisterButton />
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
