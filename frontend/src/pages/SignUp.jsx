import axios from "axios";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:8080/api/v1/auth/signup", {
        username: username,
        email: email,
        password: password,
      }, {withCredentials: true});
      setIsLoading(false);
      toast.success(res.data.message)
      navigate("/signin")
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      toast.error(error.response?.data?.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");

    if (username == "" || email == "" || password == "") {
      setErr("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErr("Password and Confirm Password nust be same.");
      return;
    }

    signUp();
  };


  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold">
          Sign Up
        </h1>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-primary">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="input-field"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
            required
          />
        </div>

        <div className="input-primary">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            required
          />
        </div>

        <div className="input-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            required
          />
          {showPassword ? (
            <GoEyeClosed
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <GoEye
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="input-password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirm_password"
            className="input-field"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            disabled={isLoading}
            required
          />
          {showConfirmPassword ? (
            <GoEyeClosed
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <GoEye
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <button
          type="submit"
          className="btn-primary btn-lg"
          disabled={isLoading}

        >
          {isLoading &&  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"> </svg>}
          Sigun Up
        </button>

        <span className="text-center text-sm">
          Already have an account?{" "}
          <Link className="underline" to={"/signin"}>
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
