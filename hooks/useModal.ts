import { useState } from 'react';
import { updateGovernanceData } from '../utils/api';
import { useData } from '../contexts/DataContext';

export default function useModal() {
  const { updateTracker, setUpdateTracker } = useData();
  const [open, setOpen] = useState<boolean>(false);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicHVzaF9zdGFnaW5nX3VzZXIiLCJpYXQiOjE2NzA1MDg1OTAsImV4cCI6MTY3MDU5NDk5MH0.d-R-DJCeGnu-d5SmdavVgKfJstdOl2UihcCZUTIPAi4';
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    inprogress: 0,
    approved: 0,
    rejected: 0,
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
    };
    const res = await updateGovernanceData({ data, token });
    setUpdateTracker(!updateTracker);
    console.log('Result', res);
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleChange,
    handleSubmit,
  };
}
