import { Mainnet, Beresheet, dev } from '../src';
import { WsProvider, ApiPromise } from '@polkadot/api';
import { TypeRegistry } from '@polkadot/types';
import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types/registry';

const networks: { [name: string]: string } = {
  'mainnet': 'ws://mainnet1.edgewa.re:9944',
  'dev': 'ws://localhost:9944',
  'beresheet': 'wss://beresheet1.edgewa.re',
};

type SpecType = { types?: RegistryTypes, typesAlias?: Record<string, OverrideModuleType>, };

const specs: {[name: string]: SpecType } = {
  'mainnet': Mainnet,
  'dev': dev,
  'beresheet': Beresheet,
}

const verify = async (spec: SpecType, url: string, blockNumber?: number) => {
  // connect to chain via provider
  console.log(`Connecting to url: ${url}...`);
  const provider = new WsProvider(url);
  const unsubscribe: () => void = await new Promise((resolve) => {
    return provider.on('connected', () => resolve());
  });
  if (unsubscribe) unsubscribe();

  // construct API using provider
  console.log('Constructing API...');
  const registry = new TypeRegistry();
  const api = new ApiPromise({
    provider,
    registry,
    ...spec,
  });
  await api.isReady;

  // test a query to verify type construction
  console.log('Querying events...');
  if (!blockNumber) {
    const result = await api.query.system.events();
    console.log(`Got events: ${JSON.stringify(result.toHuman(), null, 2)}`)
  } else {
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    const result = await api.query.system.events.at(blockHash);
    console.log(`Got events at block ${blockNumber}: ${JSON.stringify(result.toHuman(), null, 2)}`)
  }
};

// parse args
const args = process.argv.slice(2);
const network = args[0] || 'mainnet';
const url = networks[network];
const spec = specs[network];
const block = args[1];

// kick off function
verify(spec, url, block ? +block : undefined)
.then(() => {
  console.log('Done!');
  process.exit(0);
});
