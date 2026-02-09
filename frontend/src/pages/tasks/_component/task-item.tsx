import Button from "@/components/Button/Button";
import type { Task } from "@/types/Task";
import { motion } from "framer-motion";
import { PenIcon, Trash2 } from "lucide-react";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: () => void;
};

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  return (
    <>
      <motion.tr
        key={task.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <td className="border-b border-blue-gray-50 p-4">
          <div className="flex items-center text-sm text-black">
            <input
              type="checkbox"
              onClick={() => onToggle(task.id)}
              value=""
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <label
              className={`w-full py-3 ms-2 text-sm font-medium text-heading ${task.completed ? "line-through text-gray-400" : ""}`}
            >
              {task.title}
            </label>
          </div>
        </td>
        <td className="border-b border-blue-gray-50 p-4">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              task.completed
                ? "bg-green-500 text-green-100"
                : "bg-amber-500 text-amber-100"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </td>
        <td className="border-b border-blue-gray-50 p-4">
          <Button onClick={() => onEdit && onEdit()} className="mr-2">
            <PenIcon size={16} />
          </Button>
          <Button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            <Trash2 size={16} />
          </Button>
        </td>
      </motion.tr>
    </>
  );
}
