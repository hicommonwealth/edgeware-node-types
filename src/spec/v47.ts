import { RegistryTypes } from '@polkadot/types/types';
import * as edgewareDefinitions from '../interfaces/definitions';

const edgTypes = Object
  .values(edgewareDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...edgTypes,
  'AccountInfo': 'AccountInfoWithTripleRefCount',
  'Address': 'MultiAddress',
  'LookupSource': 'MultiAddress',
};

export default {
  types,
};
