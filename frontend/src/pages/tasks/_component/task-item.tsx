import Button from "@/components/Button/Button";
import type { Task } from "@/types/Task";
import { PenIcon, Trash2 } from "lucide-react";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: () => void;
};

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  return (
    <li className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
      <span
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>
      <div className="flex gap-2">
        <Button onClick={() => onEdit && onEdit()}>
          <PenIcon size={16} />
        </Button>
        <Button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </li>
  );
}
