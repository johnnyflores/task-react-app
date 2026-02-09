import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../Dropdown/DropdownMenu";
import Avatar from "../Avatar/Avatar";
import MenuItem from "../Menu/MenuItem";

type User = {
  name?: string;
  email?: string;
  image?: string;
};

type UserNavProps = {
  user: User;
  onLogout: () => void;
};

export const UserNav = ({ user, onLogout }: UserNavProps) => {
  return (
    <DropdownMenu className="bg-transparent">
      <DropdownMenuTrigger className="bg-transparent hover:bg-gray-700">
        <div className="flex items-center gap-0.5">
          <Avatar image={user.image} name={user.email || "User"} />
          <ChevronDown className="w-3! h-3! ml-1 text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="px-4 py-3">
          <p className="text-sm font-medium">{user.name}</p>
          {user.email && (
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          )}
        </div>
        <div className="border-t border-gray-100" />
        <MenuItem danger onClick={onLogout}>
          Log out
        </MenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
