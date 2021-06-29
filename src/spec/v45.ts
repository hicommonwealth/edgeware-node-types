import { RegistryTypes } from '@polkadot/types/types';

const types: RegistryTypes = {
  'Balance2': 'u128',
  'ChainId': 'u8',
  'DepositNonce': 'u64',
  'ResourceId': '[u8; 32]',
  'ProposalStatus': {
    '_enum': [
      'Initiated',
      'Approved',
      'Rejected'
    ]
  },
  'ProposalVotes': {
    'votes_for': 'Vec<AccountId>',
    'votes_against': 'Vec<AccountId>',
    'staus': 'ProposalStatus',
    'expiry': 'BlockNumber'
  },
  'VoteStage': {
    '_enum': [
      'PreVoting',
      'Commit',
      'Voting',
      'Completed'
    ]
  },
  'VoteType': {
    '_enum': [
      'Binary',
      'MultiOption',
      'RankedChoice'
    ]
  },
  'TallyType': {
    '_enum': [
      'OnePerson',
      'OneCoin'
    ]
  },
  'VoteOutcome': '[u8; 32]',
  'VotingTally': 'Option<Vec<(VoteOutcome, u128)>>',
  'VoteData': {
    'initiator': 'AccountId',
    'stage': 'VoteStage',
    'vote_type': 'VoteType',
    'tally_type': 'TallyType',
    'is_commit_reveal': 'bool'
  },
  'Commitments': 'Vec<(AccountId, VoteOutcome)>',
  'Reveals': 'Vec<(AccountId, Vec<VoteOutcome>)>',
  'VoteRecord': {
    'id': 'u64',
    'commitments': 'Commitments',
    'reveals': 'Reveals',
    'data': 'VoteData',
    'outcomes': 'Vec<VoteOutcome>'
  },
  'ProposalRecord': {
    'index': 'u32',
    'author': 'AccountId',
    'stage': 'VoteStage',
    'transition_time': 'u32',
    'title': 'Text',
    'contents': 'Text',
    'vote_id': 'u64'
  },
  'ProposalContents': 'Bytes',
  'ProposalTitle': 'Bytes',
  'AccountInfo': 'AccountInfoWithRefCount',
  'Address': 'MultiAddress',
  'LookupSource': 'MultiAddress',
};

export default {
  types,
};
