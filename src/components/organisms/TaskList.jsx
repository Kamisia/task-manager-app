// components/organisms/TaskList.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../store/taskSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TaskItem from "../molecules/TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      dispatch({ type: "tasks/setTasks", payload: tasksFromLocalStorage });
    }
  }, [dispatch]);

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setNewTaskTitle(taskToEdit.title);
    }
  };

  const handleCancel = () => {
    setEditingTaskId(null);
    setNewTaskTitle("");
  };

  const handleSaveEdit = () => {
    dispatch(editTask({ id: editingTaskId, newTitle: newTaskTitle }));
    setEditingTaskId(null);
    toast.info("Task updated successfully!");
  };

  const handleDelete = (taskId) => {
    toast.success("Good job, keep it up!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(deleteTask(taskId));
  };

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
      <h2>Task List</h2>
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
            onSaveEdit={handleSaveEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
