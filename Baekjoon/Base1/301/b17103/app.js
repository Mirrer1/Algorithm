const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on('line', line => {
  input.push(line);  
}).on('close', () => {
  main(input);
  process.exit();
});

const main = input => {  
  let result = [];
  let max = Math.max(...input);
  let prime = [];

  for (let i = 0; i < max; i++) prime.push(true);
  prime[0] = false;
  prime[1] = false;

  for (let i = 2; i <= max / 2; i++) {
    if (prime[i]) {
      for (let j = 2; j <= max / i; j++) prime[i * j] = false;
    }
  }

  for (let i = 1; i < input.length; i++) {
    let splited = +input[i];
    let count = 0;

    for (let j = 1; j <= splited / 2; j++) {
      if(prime[splited - j] && prime[j]) count++;
    }
    result.push(count);
  }

  console.log(result.join('\n').trim());
};