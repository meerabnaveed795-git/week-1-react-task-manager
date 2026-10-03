import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskText = taskInput.trim();

    if (taskText === "") {
      setErrorMessage("Please enter a task.");
      return;
    }

    onAddTask(taskText);

    setTaskInput("");
    setErrorMessage("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        placeholder="Enter your task..."
      />

      <button type="submit">Add Task</button>

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </form>
  );
}

export default TaskForm;