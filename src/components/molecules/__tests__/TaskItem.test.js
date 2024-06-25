import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";
import { IoCheckmark, IoSaveOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

describe("TaskItem component", () => {
  const task = { id: 1, title: "Sample Task" };
  const newTaskTitle = "Edited Task";

  it("renders task title when not in edit mode", () => {
    const { getByText, queryByTestId } = render(
      <TaskItem
        task={task}
        editingTaskId={null}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={() => {}}
        onCancel={() => {}}
        onSaveEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const titleElement = getByText("Sample Task");
    expect(titleElement).toBeInTheDocument();

    const inputElement = queryByTestId("task-input");
    expect(inputElement).toBeNull();
  });

  it("renders input field and edit buttons when in edit mode", () => {
    const { getByTestId, queryByText } = render(
      <TaskItem
        task={task}
        editingTaskId={1}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={() => {}}
        onCancel={() => {}}
        onSaveEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const inputElement = getByTestId("task-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("Edited Task");

    const titleElement = queryByText("Sample Task");
    expect(titleElement).toBeNull();

    const saveButton = getByTestId("save-button");
    expect(saveButton).toBeInTheDocument();

    const cancelButton = getByTestId("cancel-button");
    expect(cancelButton).toBeInTheDocument();
  });

  it("calls onEdit function when Edit button is clicked", () => {
    const mockOnEdit = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        task={task}
        editingTaskId={null}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={mockOnEdit}
        onCancel={() => {}}
        onSaveEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const editButton = getByTestId("edit-button");
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledWith(1);
  });
});
