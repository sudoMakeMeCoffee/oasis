import React, { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../assets/images/logo-light.svg";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import useAuthStore from "../store/AuthStore";
import useSideBarStore from "../store/SideBarStore";
import SideBar from "./SideBar";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useAuthStore();
  const { showSideBar, setShowSideBar } = useSideBarStore();

  const sidebarRef = useRef(null);
  const triggerRef = useRef(null);

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

  return (
    <>
      <nav className="w-full bg-black h-[60px]">
        <div className="wrapper w-full max-w-8xl h-full flex items-center justify-between">
          <div>
            <Logo className="w-[70px]" />
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
