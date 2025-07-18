import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";
import { APIURL } from "../utils/conts";
import Loading from "./Loading";
import { CiWarning } from "react-icons/ci";

const VerifyEmailForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("q");
  const password = searchParams.get("p")

  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const sendVerificationCode = async () => {
    try {
      setIsPageLoading(true);
      const res = await axios.post(
        `${APIURL}/auth/send-email-verification-code?email=${email}`,
        {},
        {
          withCredentials: true,
        }
      );
      setIsPageLoading(false);
      toast.info("Verification code sent to your email");
    } catch (error) {
      setIsPageLoading(false);
      setErr(error.response?.data?.message);
    }
  };

  useEffect(() => {
    sendVerificationCode();
  }, []);

  const verify = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${APIURL}/auth/verify-email`,
        {
          email: email,
          password: password,
          code: code,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      navigate("/signin")
      console.log(res)
    } catch (error) {
      console.log(error.response?.data);
      setIsLoading(false);
      setErr(error.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    verify();
  };

  if (isPageLoading) {
    return (
      <Loading
        head={"Sending verification code"}
        subHead={"You will get a verification code to your email"}
      />
    );
  }
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
          type="text"
          placeholder="XXX-XXX"
          name="code"
          className="input-field input-md"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          disabled={isLoading}
        />
      </div>

      <button type="submit" className="btn-primary btn-md" disabled={isLoading}>
        Verify
        {isLoading && (
          <div className=" ml-1 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        )}
      </button>

      <span className="text-center text-sm font-light">
        Didn't receive a code?{" "}
        <span
          className="underline cursor-pointer"
          onClick={sendVerificationCode}
        >
          Resend
        </span>
      </span>
    </form>
  );
};

export default VerifyEmailForm;
