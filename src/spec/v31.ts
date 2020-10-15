import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types';
import * as edgewareDefinitions from '../interfaces/definitions';

const edgTypes = Object
  .values(edgewareDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...edgTypes,
  // aliases that don't do well as part of interfaces
  'voting::VoteType': 'VoteType',
  'voting::TallyType': 'TallyType',
  'voting::Tally': 'VotingTally',

  // overrides
  Address: 'GenericAddress',
  Keys: 'SessionKeys4',
  StakingLedger: 'StakingLedgerTo240',
  Votes: 'VotesTo230',
  ReferendumInfo: 'ReferendumInfoTo239',
  Weight: 'u32',
  DispatchInfo: 'DispatchInfoTo244',
  OpenTip: 'OpenTipTo225',
  ContractExecResult: 'ContractExecResultTo255',
  CompactAssignments: 'CompactAssignmentsTo257',
  RewardDestination: 'RewardDestinationTo257',
  RefCount: 'RefCountTo259',
};

const typesAlias: Record<string, OverrideModuleType> = {
  voting: { Tally: 'VotingTally' },
}

export default {
  types, typesAlias
};
