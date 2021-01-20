import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types';
import * as edgewareDefinitions from '../interfaces/definitions';

const edgTypes = Object
  .values(edgewareDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...edgTypes,
  'Address': 'MultiAddress',
  'LookupSource': 'MultiAddress',
};

export default {
  types
};
