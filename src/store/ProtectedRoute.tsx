import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  protectedCondition: boolean;
  component: React.ComponentType;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  protectedCondition,
  component: Component,
  redirectTo,
}) => {
  return protectedCondition ? <Component /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
