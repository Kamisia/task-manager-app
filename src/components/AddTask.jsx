import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle !== "") {
      dispatch(addTask({ id: Date.now(), title: taskTitle }));
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

  return (
    <div className="add-task">
      <h2>Start now, succeed!</h2>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
