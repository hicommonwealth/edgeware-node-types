# edgeware-node-types

## Usage

This repo contains Typescript bindings for custom edgeware-node modules.

In order to use the standard API against Edgeware you must initialize the API's options object as follows:

```
import { Mainnet } from '@edgeware/node-types';

const options: ApiOptions = {
  provider : new WsProvider('ws://localhost:9944'),
  ...Mainnet,
};

const api = new ApiRx(options);
```

You will also need to update the `tsconfig.json` of your project to include the following:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api/augment": ["./node_modules/@edgeware/node-types/interfaces/augment-api.d.ts"],
      "@polkadot/types/augment": ["./node_modules/@edgeware/node-types/interfaces/augment-types.d.ts"],
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
$ yarn generate
$ yarn lint
```

You will notice that the output of the lint command contains an error. This is because the typegen script does not handle relative paths well for custom modules that depend on each other. You will have to make a manual change to [signaling/types.ts](src/interfaces/signaling/types.ts) as follows:

```diff
- import { VoteStage } from './voting';
+ import { VoteStage } from '../voting';
```

Once completed, you will need to compile the typescript to javascript to publish on npm, as follows:

```
$ yarn build
```

The above command should not produce any errors.

Alternatively: to rebuild the `interfaces/` folder for publication on npm without generating new types, simply run `tsc` in the project root.
