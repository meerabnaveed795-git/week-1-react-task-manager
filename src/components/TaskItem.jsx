function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span
        className="task-text"
        onClick={() => onToggleComplete(task.id)}
      >
        {task.text}
      </span>

      <div className="task-actions">
        <button
          type="button"
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;