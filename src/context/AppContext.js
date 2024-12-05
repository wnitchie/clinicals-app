// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState('/');

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      {children}
    </AppContext.Provider>
  );
};