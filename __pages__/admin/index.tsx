import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { AdminContainer, StyledEditIcon } from "./admin.styled";
import useModal from "hooks/useModal";
import FormDialog from "./editModal";
import PushStatistics from "./components/PushStatistics";

export default function AdminView() {
  const { open, handleOpen, handleClose } = useModal();

  const data = {
    Governance: {
      PGP_Amount: {
        "Yet To Be Allocated": 80,
        Approved: 20,
      },
      PGP_Proposals: {
        Approved: 4,
        Open: 7,
        Closed: 11,
      },
      PGP_Categories: {
        Defi: 6,
        NFT: 3,
        DAO: 4,
        Tooling: 11,
        Marketing: 2,
        Educational: 6,
        Gaming: 2,
        Other: 2,
      },
      PGIP: {
        Closed: 4,
        Approved: 8,
      },
    },
    Downloads: {
      DApp: 40,
      "Chrome Extension": 10,
      "Mobile-iOS": 25,
      "Mobile-Android": 25,
    },
  };

  return (
    <AdminContainer maxWidth="xl">
      <Button variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Typography variant="h3" sx={{ mt: 5, mb: 10, textAlign: "center" }}>
        Push Protocol Admin dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <PushStatistics
          data={data?.Governance?.PGP_Proposals}
          title="PGP Proposals"
          label="PGP Proposals"
        />
        <PushStatistics
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
        />
        <PushStatistics
          data={data?.Governance?.PGIP}
          title="Push Grant Improvement Proposal"
          label="PGIP"
        />
        <PushStatistics
          data={data?.Governance?.PGP_Categories}
          title="PGP Categories"
          label="PGP Category"
        />
        <PushStatistics
          data={data?.Downloads}
          title="Application Usage Data"
          label="Used In"
        />
      </Grid>

      <FormDialog open={open} handleClose={handleClose} />
    </AdminContainer>
  );
}
