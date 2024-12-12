import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await getTasks();
  return response;
});

export const createTask = createAsyncThunk("tasks/createTask", async (task) => {
  const response = await addTask(task);
  return response;
});

export const removeTask = createAsyncThunk("tasks/removeTask", async (id) => {
  await deleteTask(id);
  return id;
});

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ id, updatedTask }) => {
    const response = await updateTask(id, updatedTask);
    return response;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(removeTask.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload); // Usuń zadanie z listy
      })

      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default tasksSlice.reducer;
