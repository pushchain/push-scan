import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledDialog } from "__pages__/admin/admin.styled";

export default function FormDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle>Modify data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Modify data source
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="extensions"
          label="extensions"
          type="extensions"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="extensions"
          label="extensions"
          type="extensions"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="extensions"
          label="extensions"
          type="extensions"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Save</Button>
        <Button color="warning" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}
