import v41 from '../src/spec/v41';
import v45 from '../src/spec/v45';

// parse args
const args = process.argv.slice(2);
const network = args[0] || 'mainnet';

function printTypes(network: 'mainnet' | 'beresheet' | 'dev') {
  // TODO: support explicit versions to get v38 e.g.
  const types = network === 'dev' || network === 'beresheet' ? v45.types : v41.types;
  console.log(JSON.stringify(types, null, 2));
  process.exit(0);
}

if (network === 'mainnet' || network === 'beresheet' || network === 'dev') {
  printTypes(network);
} else {
  console.error(`Unknown network: ${network}. Please enter "mainnet", "beresheet", or "dev".`);
  process.exit(1);
}
