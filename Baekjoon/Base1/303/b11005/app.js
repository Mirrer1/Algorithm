const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let input;
rl.on('line', line => {
  input = line.split(' ').map(v => +v);
  rl.close();
}).on('close', () => {
  main(input);
  process.exit();
});

const main = input => {
  const num = input.shift();
  const base = input.shift();
  
  console.log(num.toString(base).toUpperCase());
}