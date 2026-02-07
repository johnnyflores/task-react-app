import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="max-w-7xl py-6 px-4 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
