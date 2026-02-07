import { motion } from "framer-motion";

type Props = { title: string; value: number };

export default function StatsCard({ title, value }: Props) {
  return (
    <motion.div
      className="shadow-lg border-b-4 rounded-lg bg-white"
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(232, 231, 231, 0.5)",
      }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm -font-medium text-gray-900">
          {title}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-600">{value}</p>
      </div>
    </motion.div>
  );
}
