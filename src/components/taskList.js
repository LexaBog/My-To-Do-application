import '../styles/taskListStile.css'

const TaskList = ({ tasks, onCompleteTask, onDelete, onToggle, language, translation }) => {
  
  const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
 
    return (
    <div className="taskSo">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div className="task-item">
            <div className="taskText">
              <p>{task.text}</p>
            </div>
            <div className="positionData">
              <p>{translation.dateForTask?.[language] || "Date"}: {task.dueDate}</p>
              <p>{translation.timeForTask?.[language] || "Time"}: {task.reminderTime}</p>
            </div>
          </div>
          <div className="buttonPositioh">
            <button onClick={() => onDelete(task.id)}>
              {translation.deleteTask?.[language] || "Delete"}
            </button>          
            <button onClick={() => onCompleteTask(task.id)}>
              {translation.completeTask?.[language] || "Complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
