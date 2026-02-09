type MenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
};

const MenuItem = ({ children, onClick, danger }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-gray-100 ${
        danger ? "text-red-600" : "text-gray-700"
      }`}
    >
      {children}
    </button>
  );
};
export default MenuItem;
