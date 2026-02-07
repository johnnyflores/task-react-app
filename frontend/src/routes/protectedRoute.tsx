import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { AUTH_ROUTES } from "./common/routePath";

export default function ProtectedRoute() {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not authenticated
    return (
      <Navigate
        to={AUTH_ROUTES.LOGIN}
        replace
        state={{ error: "You must login first" }}
      />
    );
  }

  return <Outlet />;
}
