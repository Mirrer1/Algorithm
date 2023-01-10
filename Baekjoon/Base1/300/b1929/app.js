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

const isPrime = (N, M) => {
  const prime = { 1: true };

  for (let i = 2; i <= Math.floor(Math.sqrt(M)); i++) {
    if (prime[i]) continue;

    for (let j = i * i; j <= M; j += i) {
      prime[j] = true;
    }
  }

  const result = [];
  for (let i = N; i <= M; i++) {
    if (!prime[i]) result.push(i);
  }  

  return result.join('\n');
}

const sol = input => {
  const [num1, num2] = input.split(' ').map(v => +v);
  console.log(isPrime(num1, num2));  
}