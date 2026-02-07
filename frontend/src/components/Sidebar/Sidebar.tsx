import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BarChart2, Menu, BookOpen } from "lucide-react";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart2, color: "#6366f1", href: "/dashboard" },
  { name: "Tasks", icon: BookOpen, color: "#10b981", href: "/tasks" },
];

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out shrink-0 ${
        isSidebarOpen ? "w-47" : "w-22"
      }`}
      animate={{ width: isSidebarOpen ? 188 : 88 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          id="buttonMenu"
          aria-label="Menu"
        >
          <Menu size={24} color="#fff" />
        </motion.button>
        <nav className="mt-8 grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href} aria-label={item.name}>
              <motion.div
                data-testid={item.name}
                className={`flex items-center p-4 text-sm text-white font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 ${location.pathname === item.href ? "bg-gray-700" : ""}`}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className="ml-4 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
