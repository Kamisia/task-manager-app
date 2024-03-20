import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../store/taskSlice";
import { IoCheckmark } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setNewTaskTitle(taskToEdit.title);
    }
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
  if (tasks.length == 0) {
    return (
      <div className="tasks-list">
        <h2>Task List</h2>
        <p> The task list is empty</p>
      </div>
    );
  }
  return (
    <div className="tasks-list">
      <h2>Task List</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
            ) : (
              <div className="title">{task.title}</div>
            )}
            {editingTaskId === task.id ? (
              <button onClick={handleSaveEdit}>save</button>
            ) : (
              <button onClick={() => handleEdit(task.id)}>
                <CiEdit />
              </button>
            )}
            <button onClick={() => handleDelete(task.id)}>
              <IoCheckmark />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
