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
        <Input value={newTaskTitle} onChange={onNewTaskTitleChange} />
      ) : (
        <div className="title">{task.title}</div>
      )}
      {editingTaskId === task.id ? (
        <>
          <Button id="save" onClick={onSaveEdit} icon={IoSaveOutline}></Button>
          <Button
            id="cancel"
            onClick={onCancel}
            icon={MdOutlineCancel}
          ></Button>
        </>
      ) : (
        <>
          <Button
            id="edit"
            onClick={() => onEdit(task.id)}
            icon={CiEdit}
          ></Button>
          <Button
            id="check"
            onClick={() => onDelete(task.id)}
            icon={IoCheckmark}
          ></Button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
