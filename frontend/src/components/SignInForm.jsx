import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { isValidEmail } from "../utils/utils";
import { toast } from "react-toastify";
import { CiWarning } from "react-icons/ci";

const SignInForm = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async () => {
    setErrors((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "Enter a valid email" : "",
    }));
  };

  useEffect(() => {
    setErr("");
    const timeout = setTimeout(() => {
      if (email) {
        checkEmail();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [email]);

  useEffect(() => {
    setErr("");
  }, [password]);
  
  const signIn = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      setIsAuthenticated(true);
      setUser(res.data.data);
      navigate("/");
    } catch (error) {
      if (error.response?.data?.error == "ACCOUNT-NOT-VERIFIED") {
        toast.info("Verify your email to login");
        navigate(`/verify-email?q=${email}`);
      }
      setErr(error.response?.data?.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    checkEmail();
    if (password.length < 1) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
      return;
    }

    signIn();
  };
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium">
          Welcome ! <br />
        </h1>
        <span className="font-light text-sm">
          Connect with Oasis — where developers thrive.{" "}
        </span>
        {err && (
          <>
            <br />
            <div className="bg-red-200 px-3 py-3 rounded-md">
              <span className="flex items-center gap-1 text-sm font-light text-red-500">
                <CiWarning className="text-lg" /> {err}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-field input-md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">{errors.email}</span>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input-field input-md"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">
          {errors.password}
        </span>
      </div>

      <button type="submit" className="btn-primary btn-md" disabled={isLoading}>
        SignIn
        {isLoading && (
          <div className=" ml-1 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        )}
      </button>

      <span className="text-center text-sm font-light">
        Don't have an account?{" "}
        <Link className="underline" to={"/signup"}>
          Sign Up
        </Link>
      </span>
    </form>
  );
};

export default SignInForm;
