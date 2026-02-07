import { Target } from "lucide-react";
import { Link } from "react-router-dom";
import { PROTECTED_ROUTES } from "@/routes/common/routePath";

type LogoProps = {
  url?: string;
};

const Logo = (props: LogoProps) => {
  return (
    <Link
      to={props.url || PROTECTED_ROUTES.DASHBOARD}
      className="flex items-center gap-2"
    >
      <div className="bg-blue-500 text-white h-6.5 w-6.5 rounded flex items-center justify-center">
        <Target className="size-4" />
      </div>
      <span className="font-semibold text-lg">Tasks APP</span>
    </Link>
  );
};

export default Logo;
