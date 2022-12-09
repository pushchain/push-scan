import { useState } from 'react';
import { updateGovernanceData } from '../utils/api';
import { useData } from '../contexts/DataContext';

export default function useModal() {
  const { updateTracker, setUpdateTracker, stagingToken } = useData();
  const [open, setOpen] = useState<boolean>(false);
  const token = stagingToken;
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
    chat_requests: 0,
  });

  const handleChange = (prop: any) => (event: any) => {
    setFormData({ ...formData, [prop]: parseInt(event.target.value) });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      Governance: {
        PGP_Amount: {
          'Yet To Be Allocated': formData.allocatedgrant,
          Approved: formData.approvedgrant,
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
          Tooling: formData.tooling,
          Marketing: formData.marketing,
          Educational: formData.edu,
          Gaming: formData.gaming,
          Other: formData.others,
        },
        PGIP: {
          Closed: formData.rejectedimprovement,
          Approved: formData.approvedimprovement,
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
        Chat_Requests: formData.chat_requests,
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
