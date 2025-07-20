// components/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import Loading from "./Loading";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuthStore();

  if (authLoading) return <Loading head={"Loading"}/>; 

  return !isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
