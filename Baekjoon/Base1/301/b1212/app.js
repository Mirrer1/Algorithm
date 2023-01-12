const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let input;
rl.on('line', line => {
  input = line;
  rl.close();
}).on('close', () => {
  main(input);
  process.exit();
});

const main = input => {
  let result = '';

  while (input.length !== 0) {
    if (input.length > 1) result = parseInt(input.slice(input.length - 1), 8).toString(2).padStart(3, '0') + result;
    else result = parseInt(input.slice(input.length - 1), 8).toString(2) + result;

    input = input.slice(0, input.length - 1);
  }

  console.log(result);
}