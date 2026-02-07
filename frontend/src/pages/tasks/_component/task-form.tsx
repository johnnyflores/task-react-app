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
        <label className="block font-semibold">Task Title</label>
        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
