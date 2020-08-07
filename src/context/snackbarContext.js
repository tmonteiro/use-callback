import React, { useState, createContext, useCallback } from 'react';

export const SnackbarContext = createContext({});

export const SnackbarContainer = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    message: '',
    type: 'default',
  });

  const handleSnackbar = useCallback(message => {
    setSnackbar({ message });
  }, []);

  return (
    <SnackbarContext.Provider value={{ snackbar, handleSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
