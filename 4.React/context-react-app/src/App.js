// App.js
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function App() {

  return (
    <div>
      <ThemeProvider>
      <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}

export default App

