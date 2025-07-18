import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/utils";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkUsername = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/username-exists?username=${username}`
      );
      console.log(res);
      setErrors((prev) => ({
        ...prev,
        username:
          res.data.data != null
            ? "Username already taken."
            : username.length < 3
            ? "Username must have minimum 3 caracters"
            : "",
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const checkEmail = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/email-exists?email=${email}`
      );
      console.log(res);

      setErrors((prev) => ({
        ...prev,
        email:
          res.data.data != null
            ? "Email already exists."
            : !isValidEmail(email)
            ? "Enter a valid email"
            : "",
      }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (username) {
        checkUsername();
      }
    }, 500); // Debounce by 500ms

    return () => clearTimeout(timeout);
  }, [username]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (email) {
        checkEmail();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [email]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors((prev) => ({
        ...prev,
        password:
          password != confirmPassword
            ? "Password and Confirm Password doen't match."
            : "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [password, confirmPassword]);

  const signUp = async () => {
    console.log(errors.email);

    if (errors.email == "" && errors.password == "" && errors.username == "") {
      try {
        setIsLoading(true);
        const res = await axios.post(
          "http://localhost:8080/api/v1/auth/signup",
          {
            username: username,
            email: email,
            password: password,
          },
          { withCredentials: true }
        );
        setIsLoading(false);
        navigate(`/verify-email?q=${email}`);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkEmail();
    checkUsername();
    if (password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be minimum 8 characters.",
      }));
      return;
    }

    signUp();
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium">
          Join Us <br />
          Create an Oasis Account
        </h1>
        <span className="font-light text-sm">
          Find your breakthrough in the coding desert.{" "}
        </span>
      </div>

      <br />

      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input-field input-md"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">
          {errors.username}
        </span>
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

      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          className="input-field input-md"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          disabled={isLoading}
        />
      </div>

      <button type="submit" className="btn-primary btn-md" disabled={isLoading}>
        Sign Up
        {isLoading && <div className=" ml-1 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />}
      </button>

      <span className="text-center text-sm font-light">
        Already have an account?{" "}
        <Link className="underline" to={"/signin"}>
          Sign In
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;
