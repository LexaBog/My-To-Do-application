import React, { useState, useEffect } from 'react';
import translation from "./components/rtanslation";
import HeaderText from './components/LangualegeSelector';
import Header from './components/headers'; 
import TaskList from './components/taskList';
import TaskForm from './components/TaskForm';
import CalendarView from './components/calendar';
import CompletedTaskList from './components/CompletedTaskList';
import './styles/header.css';
import './styles/App.css';
import './styles/endeTask.css';
import './styles/taskListStile.css';

const App = () => {
  const [language, setLanguage] = useState('en'); 
  const [tasks, setTasks] = useState([]); 
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedCompletedTasks = localStorage.getItem("completedTasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); 
    }

    if (savedCompletedTasks) {
      setCompletedTasks(JSON.parse(savedCompletedTasks));
    }
  }, []); 
 
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }
  }, [tasks]); 

  useEffect(() => {
    if (completedTasks.length > 0) {
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks)); 
    }
  }, [completedTasks]); 

  const handleLanguageChange = (newLanguage) => {
    setLanguage((newLanguage) => {
      if (newLanguage === "en") return "ru";
      if (newLanguage === "ru") return "de";
      return "en";
    });
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      console.log('Updated tasks:', updatedTasks); 
      return updatedTasks;
    });
  };

  const markTaskAsCompleted = (taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    if (taskToComplete) {
      setTasks(tasks.filter((task) => task.id !== taskId)); 
      setCompletedTasks([...completedTasks, taskToComplete]); 
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); 
  };

  const deleteCompletedTask = (taskId) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId)); 
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDateSelect = (date) => {
    const selectedDate = date.toISOString().split('T')[0];
    const tasksForSelectedDate = tasks.filter((task) => task.dueDate === selectedDate);
    console.log("Задачи на выбранную дату:", tasksForSelectedDate);
  };

  return (
    <>
      <div className="App">
        <div className='header'>
          <Header language={language} onLanguageChange={handleLanguageChange}></Header>
            <div className='headerTexKontent'>
              <HeaderText language={language} />
            </div>
        </div>  
        <div className='headerBottom'>
          <div className='headerBottomLeft'></div> 
          <div className='headerBottomRight'></div> 
        </div>
        <body className='fulBody'>
            <div className="endeTask">
                <CompletedTaskList 
                  language={language}
                  tasks={completedTasks} 
                  translation={translation} 
                  onDelete={deleteCompletedTask}
                />
              </div>
            <div className='midlContainer'>
            <div className='taskLiskBox'>           
                <TaskList 
                  translation={translation}
                  language={language}
                  onToggle={toggleTask}
                  onDelete={deleteTask} 
                  tasks={tasks} 
                  onCompleteTask={markTaskAsCompleted}
                />           
            </div>
          </div>
          <div className='taskKalendarBox'>
            <div className='taskBox'>
              <TaskForm 
                translation={translation}
                language={language} 
                onAddTask={handleAddTask}
              />
              <div className='calendar'>
                <CalendarView 
                  tasks={tasks} 
                  onDateSelect={handleDateSelect}
                /> 
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default App;
