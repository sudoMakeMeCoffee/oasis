import React from "react";
import useAuthStore from "../store/AuthStore";
import useSideBarStore from "../store/SideBarStore";
import { CgClose, CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiUser, BiUserCircle } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../utils/conts";

const SideBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();
  const { setShowSideBar, showSideBar } = useSideBarStore();

  const signOut = async () => {
    try {
      await axios.post(
        `${APIURL}/auth/signout`,
        {},
        {
          withCredentials: true,
        }
      );

      setIsAuthenticated(false);
      setUser(null);
      window.location.href = "/";
      toast.success("Successfully Signout");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-[250px] bg-white shadow-md absolute top-[60px] right-[50px] hidden md:block">
      <div className="w-full p-3 flex flex-col gap-4">
        <div className="bg-primary w-full p-3 text-center">
          <Link className=" text-black font-light hover:font-bold">
            @Sithija
          </Link>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex flex-col gap-3 font-light">
          <Link className="hover:font-semibold" to={"/profile"}>
            Profile
          </Link>
          <hr />
          <Link className="hover:font-semibold">Leaderboard</Link>
          <hr />
          <Link className="hover:font-semibold">Settings</Link>
          <hr />
          <Link className="hover:font-semibold">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
