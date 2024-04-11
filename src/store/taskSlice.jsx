import { createSlice } from "@reduxjs/toolkit";
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const taskToEdit = state.tasks.find((task) => task.id === id);
      if (taskToEdit) {
        taskToEdit.title = newTitle;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
