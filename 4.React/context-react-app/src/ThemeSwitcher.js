import React, { createContext, useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () =>  {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
 
   const Clickhandler = () => {
    toggleTheme(isDarkMode => !isDarkMode) 
    }



  return (
    <div
    style={{
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <button onClick={Clickhandler}>
        click
    </button>
     <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
   </div>
   );
 
}

export default ThemeSwitcher;