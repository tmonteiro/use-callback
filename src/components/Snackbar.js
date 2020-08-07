import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useSnackbar from '../hooks/useSnackbar';

export default function Snackbar() {
  const { snackbar, handleSnackbar } = useSnackbar();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    handleSnackbar(null);
  };

  return (
    <MuiSnackbar
      open={!!snackbar.message}
      autoHideDuration={6000}
      onClose={handleClose}
      message={<span>{snackbar.message}</span>}
      action={[
        <IconButton key="close" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
}
