import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledDialog } from "__pages__/admin/admin.styled";
import useModal from "hooks/useModal";

export default function FormDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const { handleChange, handleSubmit } = useModal();

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle>Modify data</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Typography variant="h4">Modify Data</Typography>
          <Typography variant="h6" mt={5}>
            Push Grant Proposals
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="inprogress"
            label="In Progress"
            onChange={handleChange("inprogress")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="approved"
            label="Approved"
            onChange={handleChange("approved")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="rejected"
            label="Rejected"
            onChange={handleChange("rejected")}
            fullWidth
            variant="standard"
          />
          <Typography variant="h6" mt={5}>
            Push Grants ($PUSH)
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="approvedgrant"
            label="Approved"
            onChange={handleChange("approvedgrant")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="allocatedgrant"
            label="Allocated"
            onChange={handleChange("allocatedgrant")}
            fullWidth
            variant="standard"
          />
          <Typography variant="h6" mt={5}>
            Push Governance Improvement Proposals
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="approvedimprovement"
            label="Approved"
            onChange={handleChange("approvedimprovement")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="rejectedimprovement"
            label="Rejected"
            onChange={handleChange("rejectedimprovement")}
            fullWidth
            variant="standard"
          />
          <Typography variant="h6" mt={5}>
            PGP Domainwise Distribution
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="defi"
            label="DeFi"
            onChange={handleChange("defi")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="nft"
            label="NFT"
            onChange={handleChange("nft")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="dao"
            label="DAO"
            onChange={handleChange("dao")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="tooling"
            label="Tooling"
            onChange={handleChange("tooling")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="marketing"
            label="Marketing"
            onChange={handleChange("marketing")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="edu"
            label="Edu"
            onChange={handleChange("edu")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="gaming"
            label="Gaming"
            onChange={handleChange("gaming")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="others"
            label="Others"
            onChange={handleChange("others")}
            fullWidth
            variant="standard"
          />
          <Typography variant="h6" mt={5}>
            App Downloads
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="dapp"
            label="Dapp"
            onChange={handleChange("dapp")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="extensions"
            label="Extensions"
            onChange={handleChange("extensions")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="mobile-ios"
            label="Mobile IOS"
            onChange={handleChange("mobile_ios")}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="mobile-android"
            label="Mobile Android"
            onChange={handleChange("mobile_android")}
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button type="submit" onClick={handleClose}>
            Upload
          </Button>
          <Button color="warning" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </StyledDialog>
  );
}
