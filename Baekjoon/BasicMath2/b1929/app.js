const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const start = +input[0];
const end = +input[1];
const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(end)); i++) {  
  if (prime[i]) {
    continue;
  };    
  for (let j = i * i; j <= end; j += i) {
    prime[j] = true;
  };  
};

for (let i = start; i <= end; i++) {
  (!prime[i]) && console.log(i);
}