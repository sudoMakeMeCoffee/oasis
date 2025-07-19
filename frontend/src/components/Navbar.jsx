import React, { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../assets/images/logo-light.svg";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import useAuthStore from "../store/AuthStore";
import useSideBarStore from "../store/SideBarStore";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useAuthStore();
  const { showSideBar, setShowSideBar } = useSideBarStore();
  const sidebarRef = useRef(null);
  const triggerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showSideBar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setShowSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSideBar, setShowSideBar]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Challenges" },
    { path: "/leaderboard", label: "Leaderboard" },
    { path: "/progress", label: "Progress" },
  ];

  return (
    <>
      <nav className="w-full bg-black h-[60px]">
        <div className="wrapper w-full max-w-8xl h-full flex items-center justify-between">
          <div>
            <Link to="/">
              <Logo className="w-[70px]" />
            </Link>
          </div>

          <div className="h-full flex gap-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <div
                  className={`h-full flex items-center px-3 justify-center cursor-pointer ${
                    isActive(item.path) ? "border-b-4 border-primary" : ""
                  }`}
                >
                  <span
                    className={`text-white text-sm ${
                      isActive(item.path) ? "font-semibold" : "font-light"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <div
              ref={triggerRef}
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <BiUser className="text-3xl p-1 text-white border border-white rounded-full" />
              <IoIosArrowDown
                className={`text-xl text-white transform transition-transform duration-300 ${
                  showSideBar ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {showSideBar && (
              <div ref={sidebarRef}>
                <SideBar />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
