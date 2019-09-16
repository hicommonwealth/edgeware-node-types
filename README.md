# edgeware-node-types
This repo contains Typescript bindings for custom edgeware-node modules. In order to use the standard API against Edgeware you must import these types into the Polkadot API as is shown below.

After adding this npm module to your project, use the following snippet to connect an API 
```
import { ApiOptions } from '@polkadot/api/types';
import { ApiRx } from '@polkadot/api';
import { IdentityTypes } from 'edgeware-node-types/dist/identity';
import { SignalingTypes } from 'edgeware-node-types/dist/signaling';
import { TreasuryRewardTypes } from 'edgeware-node-types/dist/treasuryReward';
import { VotingTypes } from 'edgeware-node-types/dist/voting';

const options: ApiOptions = {
  provider : new WsProvider('ws://localhost:9944'),
  types : {
    ...IdentityTypes,
    ...SignalingTypes,
    ...TreasuryRewardTypes,
    ...VotingTypes,
  },
};

const api = new ApiRx(options);
```
