const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout});

let input;
rl.on('line', line => {
  input = line;
  rl.close();
}).on('close', () => {
  sol(+input);
  process.exit();
});

const sol = N => {
  let count = 0;

  while (N > 0) {
    N = Math.floor(N / 5);
    count += N;
  }

  console.log(count);
}