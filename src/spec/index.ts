import { OverrideBundleType } from '@polkadot/types/types';
import v31 from './v31';
import v38 from './v38';
import v41 from './v41';
import v45 from './v45';
import v47 from './v47';

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    'beresheet': {
      types: [
        {
          minmax: [10047, undefined],
          types: v47.types,
        }
      ]
    },
    'edgeware': {
      alias: {
        voting: { Tally: 'VotingTally' },
      },
      types: [
        // Note that minmax are inclusive on both sides
        {    // 3.0.1
          minmax: [0, 31],
          types: v31.types,
        }, { // 3.0.8
          minmax: [32, 38],
          types: v38.types,
        }, { // 3.1.0
          minmax: [39, 41],
          types: v41.types,
        }, { // 3.2.0
          minmax: [42, 46],
          types: v45.types,
        }, { // 3.3.0
          minmax: [47, undefined],
          types: v47.types,
        },
      ]
    }
  }
}

export default {
  typesBundle
};
