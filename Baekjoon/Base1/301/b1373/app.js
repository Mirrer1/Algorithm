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
  var result = '';

  while(input.length >= 3) {
    result = parseInt(input.slice(input.length - 3), 2).toString(8) + result;
    input = input.slice(0, input.length - 3);
  }

  console.log(input ? result= parseInt(input, 2).toString(8) + result : result);
}