# edgeware-node-types

## Usage

This repo contains Typescript bindings for custom edgeware-node modules.

In order to use the standard API against Edgeware you must initialize the API's options object as follows:

```
import * as edgewareDefinitions from 'edgeware-node-types/interfaces/definitions';

const types = Object.values(edgewareDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

const options: ApiOptions = {
  provider : new WsProvider('ws://localhost:9944'),
  types: {
    ...types,
    // aliases that don't do well as part of interfaces
    'voting::VoteType': 'VoteType',
    'voting::TallyType': 'TallyType',
    // chain-specific overrides
    Address: 'GenericAddress',
    Keys: 'SessionKeys4',
    StakingLedger: 'StakingLedgerTo223',
    Votes: 'VotesTo230',
    ReferendumInfo: 'ReferendumInfoTo239',
  },
  // override duplicate type name
  typesAlias: { voting: { Tally: 'VotingTally' } },
};

const api = new ApiRx(options);
```

You will also need to update the `tsconfig.json` of your project to include the following:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api/augment": ["./node_modules/edgeware-node-types/interfaces/augment-api.d.ts"],
      "@polkadot/types/augment": ["./node_modules/edgeware-node-types/interfaces/augment-types.d.ts"],
    }
  }
}
```

## Building

This project depends on the [@polkadot/typegen](https://github.com/polkadot-js/api/tree/master/docs/examples/promise/90_typegen) project, which has a step-by-step guide to building this project.

The quick version is as follows:

Ensure that all the `definitions.ts` files in `src/interfaces` are updated to the latest versions of each type.

Run an [edgeware-node](https://github.com/hicommonwealth/edgeware-node) chain on localhost. Then, run `./generateMetadata.bash` to update the `edgeware.json` file.

Once you have an `edgeware.json` file, you can rebuild the types with:

```
$ yarn build
$ yarn lint
```

and ensure the final command does not print any errors.

To rebuild the `interfaces/` folder for publication on npm, simply run `tsc` in the project root.