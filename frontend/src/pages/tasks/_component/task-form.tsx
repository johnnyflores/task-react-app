import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import { useState } from "react";

type TaskFormProps = {
  initialTask: { id?: string; title: string } | null;
  onSave: (task: { id?: string; title: string }) => void;
  onCancel: () => void;
};

const TaskForm: React.FC<TaskFormProps> = ({
  initialTask,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialTask?.title || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: initialTask?.id, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Label htmlFor="task-title" className="font-normal!">
          Task Title
        </Label>
        <Input
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-black!"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
