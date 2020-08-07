import React from 'react';
import useSnackbar from '../hooks/useSnackbar';

function Home() {
  const { handleSnackbar } = useSnackbar();
  return (
    <div>
      <p>Home</p>
      <button onClick={() => handleSnackbar('Você está na home')}>
        Call Snackbar
      </button>
    </div>
  );
}

export default Home;
