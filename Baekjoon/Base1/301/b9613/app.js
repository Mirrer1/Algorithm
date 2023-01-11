const rl = require('readline').createInterface({ input: process.stdin, output: process. stdout });

const input = [];
rl.on('line', line => {
  input.push(line);  
}).on('close', () => {  
  sol(input);
  process.exit();
});

const gcd = (a, b) => {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

const sol = input => {
  const N = +input.shift();
  const list = input.map(v => v.split(' ').map(v => +v));
  let sum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      sum += gcd(list[i], list[j]);
    }
  }
  
  console.log(sum);
};