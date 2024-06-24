import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TaskForm = ({ taskTitle, onTaskTitleChange, onAddTask }) => {
  return (
    <div className="task-form">
      <Input value={taskTitle} onChange={onTaskTitleChange} />
      <Button onClick={onAddTask}>Add</Button>
    </div>
  );
};

export default TaskForm;
