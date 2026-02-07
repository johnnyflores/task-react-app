import { createContext, useState, useEffect } from "react";
import { api } from "@/services/api";
import type { Task } from "@/types/Task";

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, title: string) => void;
  error: string | null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext<TasksContextType | undefined>(
  undefined,
);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load tasks. Please try again later.");
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (title: string) => {
    try {
      const res = await api.post("/tasks", { title });
      setTasks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      setError("Failed to add task.");
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const res = await api.patch(`/tasks/${id}`);
      setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
      setError("Failed to update task.");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete task.");
    }
  };

  const editTask = async (id: string, title: string) => {
    try {
      const res = await api.put(`/tasks/${id}`, { title });
      setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
      setError("Failed to edit task.");
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, editTask, error }}
    >
      {children}
    </TasksContext.Provider>
  );
}
