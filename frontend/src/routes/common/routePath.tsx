export const isAuthRoute = (pathname: string): boolean => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};

export const AUTH_ROUTES = {
  LOGIN: "/login",
};

export const PROTECTED_ROUTES = {
  DASHBOARD: "/dashboard",
  TASKS: "/tasks",
};
