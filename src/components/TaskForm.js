import React, { useState } from "react";

const TaskForm = ({ onAddTask, translation, language }) => {
  const [taskFormInput, setTaskFormInput] = useState(''); 
  const [dueDate, setDueDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
   
  const handleAddTask = () => {
    console.log('Кнопка нажата');
    console.log('Значения:', { taskFormInput, dueDate, reminderTime });
  
    if (!taskFormInput.trim() || !dueDate || !reminderTime) {
      alert("Заполните все поля");
      return;
    }
  
    const newTask = {
      id: Date.now(),
      text: taskFormInput,
      dueDate,
      reminderTime,
    };
  
    onAddTask(newTask);
  
    setTaskFormInput('');
    setDueDate('');
    setReminderTime('');
  };
  
  return (
    <div className="boxTask">
      <input className="inputTaskBox"
        type="text"
        placeholder={translation.placeholderText[language]}
        value={taskFormInput}
        onChange={(e) => setTaskFormInput(e.target.value)}
      />
      <div className="timeDataBox">
       <input className="inputData"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
        <input className="inputTime"
         type="time"
         value={reminderTime}
         onChange={(e) => setReminderTime(e.target.value)}
       />
      </div>
      <button className="butonAddTask" onClick={() => { console.log('Кнопка нажата'); handleAddTask(); }}>
        {translation.addTaskButton[language]}
      </button>
    </div>
  );
};

export default TaskForm;
