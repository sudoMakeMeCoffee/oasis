import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  
  const verify = async () => {
    const email = searchParams.get("q");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/verify-email",
        {
          email: email,
          code: code,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      toast.success(res.data.message);
      navigate("/signin");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErr(error.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    verify();
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex items-center gap-3 flex-col">
        <h1 className="text-3xl font-bold">Verify Your Email</h1>
        <span className="text-sm text-primary">
          We have sent a 6 digits verification code to your email.
        </span>
        <span className="text-sm text-red-500">{err}</span>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className=" input-primary">
          <input
            type="text"
            placeholder="XXX-XXX"
            name="code"
            className="input-field"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            required
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className="btn-primary btn-lg"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>

        <span className="text-center text-sm">
          <Link className="underline" to={"/"}>
            Resend
          </Link>
        </span>
      </form>
    </div>
  );
};

export default VerifyEmail;
