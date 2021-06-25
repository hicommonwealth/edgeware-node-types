import v41 from '../src/spec/v41';
import v45 from '../src/spec/v45';
import v47 from '../src/spec/v47';
import all from '../src/spec/index';

// parse args
const args = process.argv.slice(2);
const network = args[0] || 'all';

function printTypes(network: 'v41' | 'v45' | 'v47' | 'all') {
  // TODO: support explicit versions to get v38 e.g.
  if (network === 'all') {
    console.log(JSON.stringify(all, null, 2));
  } else {
    const types = network === 'v41' ? v41.types : network === 'v45' ? v45.types : v47.types;
    console.log(JSON.stringify(types, null, 2));
  }
  process.exit(0);
}

if (network === 'v41' || network === 'v45' || network === 'v47' || network === 'all') {
  printTypes(network);
} else {
  console.error(`Unknown network: ${network}. Please enter "v41", "v45", "v47", or "all".`);
  process.exit(1);
}
