import { RegistryTypes, OverrideModuleType, OverrideBundleType } from '@polkadot/types/types';
import * as edgewareDefinitions from '../interfaces/definitions';
import v31 from './v31';
import Mainnet from './mainnet';

const edgTypes = Object
  .values(edgewareDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...edgTypes,
  // aliases that don't do well as part of interfaces
  'voting::VoteType': 'VoteType',
  'voting::TallyType': 'TallyType',
  'voting::Tally': 'VotingTally',
};

const typesAlias: Record<string, OverrideModuleType> = {
  voting: { Tally: 'VotingTally' },
}

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    'edgeware': {
      types: [
        {
          minmax: [0, 32],
          types: v31.types,
        },
        {
          minmax: [32, 39],
          types: Mainnet.types,
        },
      ]
    }
  }
}

export default {
  types, typesAlias, typesBundle
};
