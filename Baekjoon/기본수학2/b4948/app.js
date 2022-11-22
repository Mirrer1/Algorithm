const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const list = input.map((v) => +v);

for (let i = 0; i < list.length; i++) {
  const prime = { 1: true };
  const start = list[i];
  const end = 2 * list[i];

  if (start === 0) {
    break;
  }

  for (let j = 2; j <= Math.ceil(Math.sqrt(end)); j++) {
    if (prime[j]) {
      continue;
    }
    for (let z = j * j; z <= end; z += j ) {
      prime[z] = true;
    }
  }
  
  const result =[];
  for (let k = start + 1; k <= end; k++) {
    if (!prime[k]) {
      result.push(prime[k]);
    }  
  }
  console.log(result.length);
}