import { useContext } from 'react';
import { SnackbarContext } from '../context/snackbarContext';

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export default useSnackbar;
