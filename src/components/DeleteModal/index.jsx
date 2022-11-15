import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const DeleteModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Remover Venda</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deseja Remover esta venda?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="success" variant="outlined">
          Não
        </Button>
        <Button onClick={handleClose} color="success" variant="contained">
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
