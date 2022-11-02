import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { AdminContainer, StyledEditIcon } from "./admin.styled";
import ApplicationStatistics from "./components/ApplicationStatistics";
import useModal from "hooks/useModal";
import FormDialog from "./editModal";

export default function AdminView() {
  const { open, handleOpen, handleClose } = useModal();
  return (
    <AdminContainer maxWidth="xl">
      <Button variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Typography variant="h3" sx={{ m5: 5, mb: 10, textAlign: "center" }}>
        Push Protocol Admin dashboard
      </Typography>

      <Grid container spacing={2}>
        <ApplicationStatistics />
      </Grid>
      <FormDialog open={open} handleClose={handleClose} />
    </AdminContainer>
  );
}
