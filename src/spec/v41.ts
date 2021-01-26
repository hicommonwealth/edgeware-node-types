import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types';

const types: RegistryTypes = {
  // old EDG types
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
  'Balance2': 'u128',
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

  // aliases that don't do well as part of interfaces
  'voting::VoteType': 'VoteType',
  'voting::TallyType': 'TallyType',
  'voting::Tally': 'VotingTally',

  // overrides
  RefCount: 'u32',
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'IndicesLookupSource',
  LookupSource: 'IndicesLookupSource',
};

const typesAlias: Record<string, OverrideModuleType> = {
  voting: { Tally: 'VotingTally' },
}

export default {
  types, typesAlias
};
