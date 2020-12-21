import { RegistryTypes, OverrideModuleType, OverrideBundleType } from '@polkadot/types/types';
import v31 from './v31';
import v38 from './v38';

const types: RegistryTypes = v38.types;

const typesAlias: Record<string, OverrideModuleType> = v38.typesAlias;

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    'edgeware': {
      types: [
        {
          minmax: [0, 32],
          types: v31.types,
        }, {
          minmax: [32, 42],
          types: v38.types,
        },
      ],
    }
  }
}

export default {
  types, typesAlias, typesBundle
};
