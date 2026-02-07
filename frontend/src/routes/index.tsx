import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import ProtectedRoute from "./protectedRoute";
import {
  authenticationRoutePaths,
  protectedRoutePaths,
} from "@/routes/common/routes";
import AppLayout from "@/layouts/app-layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {authenticationRoutePaths.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoute />}>
            {protectedRoutePaths.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
