import React from "react";
import { IoCheckmark, IoSaveOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const TaskItem = ({
  task,
  editingTaskId,
  newTaskTitle,
  onNewTaskTitleChange,
  onEdit,
  onCancel,
  onSaveEdit,
  onDelete,
}) => {
  return (
    <li key={task.id}>
      {editingTaskId === task.id ? (
        <Input
          value={newTaskTitle}
          onChange={onNewTaskTitleChange}
          dataTestId="task-input"
        />
      ) : (
        <div className="title">{task.title}</div>
      )}
      {editingTaskId === task.id ? (
        <>
          <Button
            id="save"
            onClick={onSaveEdit}
            icon={IoSaveOutline}
            dataTestId="save-button"
          />
          <Button
            id="cancel"
            onClick={onCancel}
            icon={MdOutlineCancel}
            dataTestId="cancel-button"
          />
        </>
      ) : (
        <>
          <Button
            id="edit"
            onClick={() => onEdit(task.id)}
            icon={CiEdit}
            dataTestId="edit-button"
          />
          <Button
            id="check"
            onClick={() => onDelete(task.id)}
            icon={IoCheckmark}
            dataTestId="check-button"
          />
        </>
      )}
    </li>
  );
};

export default TaskItem;
