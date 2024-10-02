import { nanoid } from "nanoid";
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

const matchesNav = [
  { path: "/", title: "Upcoming" },
  { path: "/live", title: "Live" },
  { path: "/completed", title: "Completed" },
];

const MatchesLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div className="flex gap-2 text-white pt-20 mb-4 px-4 max-w-screen-xl mx-auto">
        {matchesNav?.map((navItem) => (
          <NavLink
            to={navItem?.path}
            key={nanoid()}
            className={cn(
              "px-4 rounded-md hover:bg-white/10 transition ease-out py-1.5 text-sm font-medium",
              pathname === navItem?.path && "bg-white hover:bg-white/80 text-black"
            )}
          >
            <span>{navItem?.title}</span>
          </NavLink>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default MatchesLayout;
