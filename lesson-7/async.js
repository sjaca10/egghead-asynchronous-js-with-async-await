const Bluebird = require('bluebird');

/*
async function main() {
  const x = await 42; // Equal than const x = await Promise.resolve(42);
  console.log(x);
}

main();
*/

async function main() {
  console.log('Working...');
  await Bluebird.delay(2000); // Equal than await Promise.resolve(Bluebird.delay(2000));
  console.log('Working...');
}

main();
