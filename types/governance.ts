export type GovernanceType = {
  Governance: {
    PGIP: {
      Approved: string | number;
      Closed: string | number;
    };
    PGP_Amount: {
      Approved: string | number;
      'Yet To Be Allocated': string | number;
    };
    PGP_Categories: {
      DAO: string | number;
      Defi: string | number;
      Education: string | number;
      Gaming: string | number;
      Marketing: string | number;
      NFT: string | number;
      Other: string | number;
      Tooling: string | number;
    };
    PGP_Proposals: {
      Approved: string | number;
      Closed: string | number;
      Open: string | number;
    };
  };
  Miscellaneous: {
    Push_Grants: string | number;
    Push_Integrations: string | number;
  };
};
