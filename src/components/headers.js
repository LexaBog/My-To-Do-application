
import React, { useState } from 'react';
import '../styles/header.css';

const Header = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageSwitch = () => {
      
    const newLanguage = 
    language === 'en' ? 'ru' : 
    language === 'ru' ? 'de' : 
    'en'; 
    setLanguage(newLanguage);
    onLanguageChange(newLanguage); 
  };

  return (
    <header>
       <button className="language-switcher" onClick={handleLanguageSwitch}>
        {language === 'en'
          ? 'En' 
          : language === 'ru'
          ? 'Ru' 
          : 'De' 
        }
      </button>
    </header>
  );
};

export default Header;
