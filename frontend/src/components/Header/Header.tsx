import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LogoutButton from "../LogoutButton";
import { useEffect } from "react";

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/tasks":
      return "Tasks";
    case "/profile":
      return "Profile";
    default:
      return "Tasks";
  }
};

export default function Header() {
  const { user } = useAuth();
  const location = useLocation();

  const pageTitle = getPageTitle(location.pathname);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
        {user && <p className="text-sm">Logged in as: {user.email}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
          {user?.email[0].toUpperCase()}
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
