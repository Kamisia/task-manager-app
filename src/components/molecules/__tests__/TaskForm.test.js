import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskForm from "../TaskForm";

describe("TaskForm component", () => {
  it("updates task title when input value changes", () => {
    const mockOnTaskTitleChange = jest.fn();
    const { getByTestId } = render(
      <TaskForm
        taskTitle=""
        onTaskTitleChange={mockOnTaskTitleChange}
        onAddTask={() => {}}
      />
    );

    const input = getByTestId("task-input");
    fireEvent.change(input, { target: { value: "New Task Title" } });

    expect(mockOnTaskTitleChange).toHaveBeenCalledWith("New Task Title");
  });

  it("calls onAddTask function when Add button is clicked", () => {
    const mockOnAddTask = jest.fn();
    const { getByTestId } = render(
      <TaskForm
        taskTitle="New Task"
        onTaskTitleChange={() => {}}
        onAddTask={mockOnAddTask}
      />
    );

    const addButton = getByTestId("add-task-button");
    fireEvent.click(addButton);

    expect(mockOnAddTask).toHaveBeenCalled();
  });
});
