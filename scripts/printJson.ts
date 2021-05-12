import v41 from '../src/spec/v41';
import v45 from '../src/spec/v45';
import v46 from '../src/spec/v46';

// parse args
const args = process.argv.slice(2);
const network = args[0] || 'mainnet';

function printTypes(network: 'v41' | 'v45' | 'v46') {
  // TODO: support explicit versions to get v38 e.g.
  const types = network === 'v41' ? v41.types : network === 'v45' ? v45.types : v46.types;
  console.log(JSON.stringify(types, null, 2));
  process.exit(0);
}

if (network === 'v41' || network === 'v45' || network === 'v46') {
  printTypes(network);
} else {
  console.error(`Unknown network: ${network}. Please enter "v41", "v45", or "v46".`);
  process.exit(1);
}
