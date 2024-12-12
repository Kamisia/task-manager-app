import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, removeTask, editTask } from "../../store/taskSlice";
import TaskItem from "../molecules/TaskItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = () => {
  const dispatch = useDispatch();
  const { items: tasks, loading, error } = useSelector((state) => state.tasks);

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    toast.success("Task deleted successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(removeTask(id));
  };

  const handleEdit = (id, currentTitle) => {
    setEditingTaskId(id);
    setNewTaskTitle(currentTitle);
  };

  const handleSaveEdit = (id) => {
    const updatedTask = { title: newTaskTitle, completed: false };
    dispatch(editTask({ id, updatedTask }));
    setEditingTaskId(null);
    setNewTaskTitle("");
  };

  const handleCancel = () => {
    setEditingTaskId(null);
    setNewTaskTitle("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (tasks.length === 0) {
    return (
      <div className="tasks-list">
        <h2>Task List</h2>
        <p>The task list is empty</p>
      </div>
    );
  }
  return (
    <div className="tasks-list">
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editingTaskId={editingTaskId}
            newTaskTitle={newTaskTitle}
            onNewTaskTitleChange={(e) => setNewTaskTitle(e.target.value)}
            onEdit={handleEdit}
            onCancel={handleCancel}
            onSaveEdit={() => handleSaveEdit(task.id)}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
