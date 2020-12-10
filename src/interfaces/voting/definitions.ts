export default {
  types: {
    VoteStage: {
      _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
    },
    VoteType: {
      _enum: ['Binary', 'MultiOption', 'RankedChoice']
    },
    TallyType: {
      _enum: ['OnePerson', 'OneCoin']
    },
    VotingScheme: {
      _enum: ['Simple', 'CommitReveal']
    },
    VoteOutcome: '[u8; 32]',
    VoteCommitment: '[u8; 32]',
    VoteData: {
      initiator: 'AccountId',
      stage: 'VoteStage',
      vote_type: 'VoteType',
      tally_type: 'TallyType',
      voting_scheme: 'VotingScheme',
    },
    VoteRecord: {
      id: 'u64',
      commitments: 'Vec<(AccountId, VoteOutcome)>',
      reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
      data: 'VoteData',
      outcomes: 'Vec<VoteOutcome>'
    }
  }
};
