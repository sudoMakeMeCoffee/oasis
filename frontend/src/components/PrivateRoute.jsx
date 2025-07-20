// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuthStore();

  if (authLoading) return <Loading head={"Loading"}/>; // or a loader/spinner

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
