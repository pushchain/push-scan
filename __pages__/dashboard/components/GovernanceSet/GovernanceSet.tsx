import { Grid, Box } from "@mui/material";
import GovernanceGraph from "__pages__/admin/components/GovernanceGraph";
import { Text } from "__pages__/dashboard/dashboard.styled";

export default function GovernanceSet() {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
      mt={5}
    >
      <Text size="18px">Push Governance</Text>
      <Grid container spacing={3} justifyContent="center" mt={0}>
        <GovernanceGraph
          data={data?.Governance?.PGP_Amount}
          title="Push Grants ($PUSH)"
          label="PGP_Amount"
          value={123456}
        />
        <GovernanceGraph
          data={data?.Governance?.PGIP}
          title="Push Grant Improvement Proposal"
          label="PGIP"
        />
        <GovernanceGraph
          data={data?.Governance?.PGP_Proposals}
          title="Push Grants Proposals"
          label="PGP Proposals"
        />
        <GovernanceGraph
          data={data?.Governance?.PGP_Categories}
          title="Push Grants Proposal Categories"
          label="PGP Category"
        />
        {/* <GovernanceGraph
        data={data?.Downloads}
        title="Application Usage Data"
        label="Used In"
      /> */}
      </Grid>
    </Box>
  );
}
