import { useTasks } from "@/hooks/useTasks";
import { motion } from "framer-motion";
import StatsCard from "./_component/stats-card";

export default function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <>
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatsCard title="Total Tasks" value={total} />
        <StatsCard title="Completed" value={completed} />
        <StatsCard title="Pending" value={pending} />
      </motion.div>
    </>
  );
}
