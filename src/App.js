import React from 'react';
import Users from './components/Users';
import Home from './components/Home';
import { SnackbarContainer } from './context/snackbarContext';
import Snackbar from './components/Snackbar';

function App() {
  return (
    <>
      <SnackbarContainer>
        <Home />
        <Users />
        <Snackbar />
      </SnackbarContainer>
    </>
  );
}

export default App;
