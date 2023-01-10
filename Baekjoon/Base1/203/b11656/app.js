const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;
rl.on('line', line => {
  input = line;
  rl.close();
}).on('close', () => {
  sol(input);
  process.exit();
});

const sol = input => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input.slice(i));
  };

  console.log(result.sort().join('\n'));
};