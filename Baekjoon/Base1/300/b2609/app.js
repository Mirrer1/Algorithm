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

const gcd = (N, M) => {
  if (N % M === 0) return M;
  else return gcd(M, N % M);
}

const sol = input => {
  const [num1, num2] = input.split(' ').map(v => +v);
  const gcdValue = gcd(num1, num2);

  console.log(gcdValue);
  console.log(num1 * num2 / gcdValue);
}