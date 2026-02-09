import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from "react";

type DropdownContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  className?: string;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "DropdownMenu components must be used inside <DropdownMenu>",
    );
  }
  return context;
};

export const DropdownMenu = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className={`relative inline-block ${className ?? ""}`} ref={menuRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

type TriggerProps = {
  children: ReactNode;
  className?: string;
};

export const DropdownMenuTrigger = ({ children, className }: TriggerProps) => {
  const { setOpen, triggerRef } = useDropdown();

  return (
    <button
      ref={triggerRef}
      onClick={() => setOpen((prev) => !prev)}
      className={`inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

type ContentProps = {
  children: ReactNode;
};

export const DropdownMenuContent = ({ children }: ContentProps) => {
  const { open } = useDropdown();

  if (!open) return null;

  return (
    <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1">{children}</div>
    </div>
  );
};
