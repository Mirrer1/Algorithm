const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  main(input);
  process.exit();
});

const isPrime = N => {
  const prime = { 1: true };
  
  for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
    if (prime[i]) continue;

    for (let j = i * i; j <= N; j += i) {
      prime[j] = true;
    }
  }
  
  const result = [];
  for (let i = 2; i < N; i++) {
    if (!prime[i] && i % 2 !== 0) result.push(i);
  }  

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i] + result[j] === N && result[i] !== result[j]) {
        return `${N} = ${result[i]} + ${result[j]}`;
      }
    }
  }
  return "Goldbach's conjecture is wrong.";
}

const main = input => {
  const list = input.map(v => +v);
  let answer = '';

  for (let i = 0; i < list.length; i++) {    
    if (list[i] !== 0) answer += isPrime(list[i]) + '\n';
  }

  console.log(answer);
}