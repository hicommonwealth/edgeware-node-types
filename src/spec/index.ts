import { OverrideBundleType } from '@polkadot/types/types';
import v31 from './v31';
import v38 from './v38';
import v45 from './v45';

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    'edgeware': {
      alias: {
        voting: { Tally: 'VotingTally' },
      },
      types: [
        {
          minmax: [0, 32],
          types: v31.types,
        }, {
          minmax: [32, 42],
          types: v38.types,
        }, {
          minmax: [42, 46],
          types: v45.types,
        },
      ]
    }
  }
}

export default {
  typesBundle
};
