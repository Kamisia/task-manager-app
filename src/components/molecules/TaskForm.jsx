import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TaskForm = ({ taskTitle, onTaskTitleChange, onAddTask }) => {
  return (
    <div className="task-form">
      <Input
        value={taskTitle}
        onChange={onTaskTitleChange}
        dataTestId="task-input"
      />
      <Button onClick={onAddTask} dataTestId="add-task-button">
        Add
      </Button>
    </div>
  );
};

export default TaskForm;
