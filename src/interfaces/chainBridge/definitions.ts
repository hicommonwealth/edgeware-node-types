export default {
  types: {
    // ChainId: 'u8',
    DepositNonce: 'u64',
    ResourceId: '[u8; 32]',
    ProposalStatus: {
      _enum: ['Initiated', 'Approved', 'Rejected']
    },
    ProposalVotes: {
      votes_for: 'Vec<AccountId>',
      votes_against: 'Vec<AccountId>',
      staus: 'ProposalStatus',
      expiry: 'BlockNumber',
    }
  }
};
