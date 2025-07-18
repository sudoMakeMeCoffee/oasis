import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";
import { APIURL } from "../utils/conts";

const VerifyEmailForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("q");

  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const verify = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${APIURL}/auth/verify-email`,
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

  const sendVerificationCode = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${APIURL}/auth/send-verification-email?email=${email}`,
        {
          email: email,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      toast.info("Code sent to your email.Check your inbox.");
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
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium">
          Verify Your Account. <br />
        </h1>
        <span className="font-light text-sm ">
          We have sent a 6 digits code to your email..{" "}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="XXX-XXX"
          name="code"
          className="input-field input-md"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">{err}</span>
      </div>

      <button type="submit" className="btn-primary btn-md" disabled={isLoading}>
        Verify
        {isLoading && (
          <div className=" ml-1 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        )}
      </button>

      <span className="text-center text-sm font-light">
        Didn't receive a code?{" "}
        <span className="underline cursor-pointer" onClick={sendVerificationCode}>
          Resend
        </span>
      </span>
    </form>
  );
};

export default VerifyEmailForm;
