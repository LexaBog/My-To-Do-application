import React from "react";
import '../styles/endeTask.css'

const CompletedTaskList = ({ tasks, translation, language, onDelete }) => {
  return (
    <div>
      <h3>Завершённые задачи</h3>
      {tasks.map((task) => (
        <div key={task.id} className="completed-task">
          <p className="textEndeTask">{task.text}</p>
          <p className="dataEndeTask">
            {translation.dateForTask?.[language] || "Дата выполнения"}: {task.dueDate}
          </p>
          <button onClick={() => onDelete(task.id)}>
              {translation.deleteTask?.[language] || "Delete"}
            </button>
        </div>
      ))}
    </div>
  );
};

export default CompletedTaskList;
