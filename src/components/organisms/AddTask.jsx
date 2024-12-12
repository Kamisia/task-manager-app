import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/taskSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "../molecules/TaskForm";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(createTask({ title: taskTitle, completed: false }));
      toast.info("The task has been added", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTaskTitle("");
    } else {
      toast.error("Complete the task...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleTaskTitleChange = (value) => {
    setTaskTitle(value);
  };

  return (
    <div className="add-task">
      <h2>Start now, succeed!</h2>
      <TaskForm
        taskTitle={taskTitle}
        onTaskTitleChange={handleTaskTitleChange}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default AddTask;
