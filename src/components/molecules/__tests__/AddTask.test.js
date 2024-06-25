import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AddTask from "../../organisms/AddTask";
import { addTask } from "../../../store/taskSlice";
import { toast } from "react-toastify";

jest.mock("../../../store/taskSlice", () => ({
  addTask: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

const mockStore = configureStore([]);

describe("AddTask component", () => {
  let store;

  beforeEach(() => {
    store = mockStore([]);
    store.dispatch = jest.fn();
  });

  it("renders AddTask component", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    expect(getByText("Start now, succeed!")).toBeInTheDocument();
    expect(getByTestId("task-input")).toBeInTheDocument();
  });

  it("dispatches addTask action with correct payload when taskTitle is not empty", async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    const input = getByTestId("task-input");
    const button = getByTestId("add-task-button");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        addTask({ id: expect.any(Number), title: "New Task" })
      );
      expect(toast.info).toHaveBeenCalledWith(
        "The task has been added",
        expect.any(Object)
      );
    });
  });

  it("shows error toast when taskTitle is empty", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    const button = getByTestId("add-task-button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "Complete the task...",
        expect.any(Object)
      );
    });
  });
});
