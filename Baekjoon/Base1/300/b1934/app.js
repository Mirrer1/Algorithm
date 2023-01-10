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

const gcd = (N, M) => {
  if (N % M === 0) return M;
  else return gcd(M, N % M);
}

const sol = input => {
  const T = +input.shift();
  const list = input.map(v => v.split(' ').map(v => +v));
  
  for (let i = 0; i < T; i++) {    
    const [num1, num2] = list[i];    
    console.log(num1 * num2 / gcd(num1, num2));
  }
}