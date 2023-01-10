const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  sol(input);
  process.exit();
});

const isPrime = N => {  
  if (N === 1) return false;
  
  for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
    if (N % i === 0) return false;
  }

  return true;
}

const sol = input => {
  const T = +input.shift();
  const list = input[0].split(' ').map(v => +v);
  let result = 0;
  
  for (let i = 0; i < T; i++) {
    isPrime(list[i]) && result++;
  }

  console.log(result);
}