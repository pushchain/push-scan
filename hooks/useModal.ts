import { useState } from 'react';
import { updateGovernanceData } from '../utils/api';
import { useData } from '../contexts/DataContext';

export default function useModal() {
  const { updateTracker, setUpdateTracker, token } = useData();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    inprogress: 0,
    approved: 0,
    rejected: 0,
    pushgrants: 0,
    approvedgrant: 0,
    allocatedgrant: 0,
    approvedimprovement: 0,
    rejectedimprovement: 0,
    defi: 0,
    nft: 0,
    dao: 0,
    tooling: 0,
    marketing: 0,
    edu: 0,
    gaming: 0,
    others: 0,
    dapp: 0,
    mobile_ios: 0,
    mobile_android: 0,
    extensions: 0,
    push_integrations: 0,
  });

  const handleChange = (prop: any) => (event: any) => {
    setFormData({ ...formData, [prop]: parseInt(event.target.value) });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      Governance: {
        PGP_Amount: {
          Approved: formData.approvedgrant,
          'Yet To Be Allocated': formData.allocatedgrant,
        },
        PGP_Proposals: {
          Approved: formData.approved,
          Open: formData.inprogress,
          Closed: formData.rejected,
        },
        PGP_Categories: {
          Defi: formData.defi,
          NFT: formData.nft,
          DAO: formData.dao,
          Education: formData.edu,
          Marketing: formData.marketing,
          Tooling: formData.tooling,
          Gaming: formData.gaming,
          Other: formData.others,
        },
        PGIP: {
          Approved: formData.approvedimprovement,
          Closed: formData.rejectedimprovement,
        },
      },
      Downloads: {
        DApp: formData.dapp,
        'Chrome Extension': formData.extensions,
        'Mobile-iOS': formData.mobile_ios,
        'Mobile-Android': formData.mobile_android,
      },
      Miscellaneous: {
        Push_Grants: formData.pushgrants,
        Push_Integrations: formData.push_integrations,
      },
    };
    await updateGovernanceData({ data, token });
    setUpdateTracker(!updateTracker);
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleChange,
    handleSubmit,
  };
}
