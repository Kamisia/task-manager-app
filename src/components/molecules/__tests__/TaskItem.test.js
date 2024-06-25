import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";

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

  it("calls onCancel function and reverts to display mode when Cancel button is clicked", () => {
    const mockOnCancel = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        task={task}
        editingTaskId={1}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={() => {}}
        onCancel={() => mockOnCancel(task.id)}
        onSaveEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const cancelButton = getByTestId("cancel-button");
    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledWith(1);
  });

  it("calls onDelete function when Delete button is clicked", () => {
    const mockOnDelete = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        task={task}
        editingTaskId={null}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={() => {}}
        onCancel={() => {}}
        onSaveEdit={() => {}}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = getByTestId("check-button");
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it("calls onSaveEdit function with correct payload when Save button is clicked", () => {
    const mockOnSaveEdit = jest.fn();
    const { getByTestId } = render(
      <TaskItem
        task={task}
        editingTaskId={1}
        newTaskTitle={newTaskTitle}
        onNewTaskTitleChange={() => {}}
        onEdit={() => {}}
        onCancel={() => {}}
        onSaveEdit={() => mockOnSaveEdit(task.id, newTaskTitle)}
        onDelete={() => {}}
      />
    );

    const saveButton = getByTestId("save-button");
    fireEvent.click(saveButton);

    expect(mockOnSaveEdit).toHaveBeenCalledWith(task.id, newTaskTitle);
  });
});
