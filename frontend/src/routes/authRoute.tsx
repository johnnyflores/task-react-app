import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { PROTECTED_ROUTES } from "./common/routePath";

const AuthRoute = () => {
  const { user } = useAuth();

  if (user) return <Outlet />;

  return <Navigate to={PROTECTED_ROUTES.DASHBOARD} replace />;
};

export default AuthRoute;
