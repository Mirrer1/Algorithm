const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let input;
rl.on('line', line => {
  input = line;
  rl.close();
}).on('close', () => {
  main(input);
  process.exit();
});

const main = input => {  
  let num = +input;
  let remainder;
  let result = [];

  while (num / 2 !== 0) {
    remainder = num % -2;

    if (remainder === -1 || remainder === 1) {
      num = Math.floor(num / -2) + 1;
      result.push(1);
    } else if (remainder === 0) {
      num = Math.floor(num / -2);
      result.push(0);
    }
  }

  console.log(result.length === 0 ? 0 : result.reverse().join(''));
}