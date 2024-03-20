import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const taskToEdit = state.tasks.find((task) => task.id === id);
      if (taskToEdit) {
        taskToEdit.title = newTitle;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
