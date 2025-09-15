import React from 'react';
import HomePage from './components/HomePage';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;
