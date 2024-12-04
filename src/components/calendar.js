import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendarStiles.css';

const CalendarView = ({ tasks = [], onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date); 
  };

  const adjustedDate = new Date(selectedDate);
  adjustedDate.setDate(adjustedDate.getDate() + 1);

  const formattedDate = adjustedDate.toISOString().split('T')[0];
  const tasksForSelectedDate = tasks.filter((task) => task.dueDate === formattedDate);

  return (
    <div className="calendar-view">
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        className="react-calendar"
      />
      <h3>Задачи на выбранную дату:</h3>
      <ul>
        {tasksForSelectedDate.length > 0 ? (
          tasksForSelectedDate.map((task) => (
            <li key={task.id}>{task.text} - {task.dueDate}</li>
          ))
        ) : (
          <p>Нет задач на эту дату</p>
        )}
      </ul>
    </div>
  );
};

export default CalendarView;
