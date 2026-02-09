type InputProps = {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

export default function Input({
  id,
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
}: InputProps) {
  return (
    <input
      id={id}
      type="text"
      className={`py-2 px-4 rounded-lg block w-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
