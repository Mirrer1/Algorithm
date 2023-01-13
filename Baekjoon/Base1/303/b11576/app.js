const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on('line', line => {
  input.push(line);  
}).on('close', () => {
  main(input);
  process.exit();
});

const main = input => {
  const [A, B] = input.shift().split(' ').map(v => +v);
  const N = +input.shift();
  const arrA = input.shift().split(' ').map(v => +v).reverse();
  let decimal = 0;

  for (let i = 0; i < N; i++) {
    let num = arrA[i];
    decimal += num * (A**i);
  }

  if (decimal === 0) console.log(0);
  else {
    let result = [];

    while (decimal > 0) {
      result.unshift(decimal % B);
      decimal = Math.floor(decimal / B);
    }
    
    console.log(result.join(' '));
  }  
}