const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  main(input);
  process.exit();
});

const gcd = (a, b) => {
  if (b === 0) return a;
  else return gcd(b, a % b);
}

const main = input => {
  const [N, S] = input.shift().split(' ').map(v => +v);
  const brother = input.shift().split(' ').map(v => +v);
  let diff = [];

  for (let i = 0; i < N; i++) {
    diff.push(Math.abs(brother[i] - S));
  }; 
  let result = diff[0];

  for (let i = 0; i < diff.length; i++) {
    result = gcd(result, diff[i]);
  };
  console.log(result);
};