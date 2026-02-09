import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { UserNav } from "../ui/user-nav";
import { useLogout } from "@/hooks/useLogout";

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
  const { handleLogout } = useLogout();

  const pageTitle = getPageTitle(location.pathname);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-4">
          {user && <UserNav user={user} onLogout={handleLogout} />}
        </div>
      </header>
    </>
  );
}
