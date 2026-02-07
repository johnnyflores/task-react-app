import Dashboard from "@/pages/dashboard";
import Tasks from "@/pages/tasks";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routePath";
import SignIn from "@/pages/auth/sign-in";

export const authenticationRoutePaths = [
  {
    path: AUTH_ROUTES.LOGIN,
    element: <SignIn />,
  },
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.DASHBOARD, element: <Dashboard /> },
  { path: PROTECTED_ROUTES.TASKS, element: <Tasks /> },
];
