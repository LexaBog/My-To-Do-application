import React from 'react';

const HeaderText = ({ language }) => {
  return (
    <div>     
      <h2>
      {language === 'en'
        ? 'My To-Do application' 
        : language === 'ru'
        ? 'Мое To-Do приложение' 
        : 'Meine To-Do-Anwendung' 
      }
      </h2>
    </div>
  );
};

export default HeaderText;
