import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import useAuthStore from "./store/AuthStore";

function App() {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/check-auth", {
        withCredentials: true,
      })
      .then((res) => {
        // ✅ Authenticated
        setUser(res.data.data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  const hideNavbarRoutes = ["/signin", "/signup"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to={"/"} /> : <SignIn />}
        />
       
        <Route path="*" element={<NotFound />} />
      </Routes>


      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      
    </>
  );
}

export default App;
