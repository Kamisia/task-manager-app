import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TaskForm = ({ taskTitle, onTaskTitleChange, onAddTask }) => {
  const handleTaskTitleChange = (event) => {
    onTaskTitleChange(event.target.value);
  };

  return (
    <div className="task-form">
      <Input
        value={taskTitle}
        onChange={handleTaskTitleChange}
        dataTestId="task-input"
      />
      <Button onClick={onAddTask} dataTestId="add-task-button">
        Add
      </Button>
    </div>
  );
};

export default TaskForm;
