import { Mainnet, Beresheet, dev } from '../src';

// parse args
const args = process.argv.slice(2);
const network = args[0] || 'mainnet';

function printTypes(t: typeof Mainnet | typeof Beresheet | typeof dev) {
  const types = t.types;
  console.log(JSON.stringify(types, null, 2));
  process.exit(0);
}

if (network === 'mainnet') {
  printTypes(Mainnet);
} else if (network === 'beresheet') {
  printTypes(Beresheet);
} else if (network === 'dev') {
  printTypes(dev);
} else {
  console.error(`Unknown network: ${network}. Please enter "mainnet", "beresheet", or "dev".`);
  process.exit(1);
}
