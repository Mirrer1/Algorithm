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
  const list = input.split(' ');
  const A = +list.shift();
  const B = +list.shift();
  const C = +list.shift();
  
  const result = [];
  result.push((A + B) % C);
  result.push(((A % C) + (B % C)) % C);
  result.push((A * B) % C);
  result.push(((A % C) * (B % C)) % C);
  
  console.log(result.join('\n'));
}