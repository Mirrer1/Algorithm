const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout});

let input;
rl.on('line', line => {
  input = line;
  rl.close();
}).on('close', () => {
  sol(input);
  process.exit();
});

const getPowerN = (num, power) => {
  let count = 0;

  while (num >= power) {
    count += Math.floor(num / power);
    num /= power;
  }

  return count;
}

const sol = input => {
  const [N, M] = input.split(' ').map(v => +v);
  
  const num2 = getPowerN(N, 2) - getPowerN(N - M, 2) - getPowerN(M, 2);
  const num5 = getPowerN(N, 5) - getPowerN(N - M, 5) - getPowerN(M, 5);
  
  console.log(Math.min(num2, num5));
}