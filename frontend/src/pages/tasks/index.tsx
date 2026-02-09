import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import ErrorPage from "../ErrorPage";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import TaskForm from "./_component/task-form";
import { toast } from "sonner";
import Table from "@/components/Table/Table";
import TaskItem from "./_component/task-item";

const listNameTable = [
  { name: "Title" },
  { name: "Status" },
  { name: "Actions" },
];

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask, editTask, error } =
    useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<{
    id?: string;
    title: string;
  } | null>(null);

  const openAddModal = () => {
    setCurrentTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task: { id: string; title: string }) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleSave = (task: { id?: string; title: string }) => {
    if (task.id) {
      editTask(task.id, task.title);
      toast.success("Task updated successfully!");
    } else {
      addTask(task.title);
      toast.success("Task added successfully!");
    }
    setIsModalOpen(false);
  };

  const handleOnDelete = (id: string) => {
    deleteTask(id);
    toast.success("Task deleted successfully!");
  };

  if (error) {
    return <ErrorPage status={500} message={error} />;
  }

  return (
    <>
      <div className="flex mb-4 gap-2">
        <Button onClick={openAddModal}>Add Task</Button>
      </div>
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500">No tasks available.</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <Table.Header>
              {listNameTable.map((item, index) => (
                <th
                  key={index}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  {item.name}
                </th>
              ))}
            </Table.Header>
            <Table.Body
              data={tasks}
              render={(task) => (
                <TaskItem
                  task={task}
                  key={task.id}
                  onToggle={toggleTask}
                  onDelete={() => handleOnDelete(task.id)}
                  onEdit={() => openEditModal(task)}
                />
              )}
            />
          </Table>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentTask ? "Edit Task" : "Add Task"}
      >
        <TaskForm
          initialTask={currentTask}
          onSave={handleSave}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
