import { Link, useLocation } from "react-router-dom";

type ErrorPageProps = {
  status?: number;
  message?: string;
};

export default function ErrorPage({ status, message }: ErrorPageProps) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">{status || 404}</h1>
      <p className="text-xl mb-2">
        {message || `Oops! The page "${path}" does not exist.`}
      </p>
      <Link
        to="/dashboard"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
