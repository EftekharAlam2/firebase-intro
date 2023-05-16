import React, { useContext } from "react";
import { Context } from "./Providers";
import { Navigate, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const location = useLocation();

  console.log(loading);
  if (loading) {
    return <ProgressBar animated now={45} />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
