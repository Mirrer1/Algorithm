const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((v) => +v);

const num = input.shift();
const list = input;

for (let i = 0; i < num; i++) {
  const end = list[i];
  const notPrime = { 1: true };
  for (let j = 2; j <= Math.ceil(Math.sqrt(end)); j++) {
    for (let z = j + j; z <= end; z += j) {
      notPrime[z] = true;
    }
  }

  const prime = [];
  for (let k = 1; k <= end; k++) {
    if (!notPrime[k]) {
      prime.push(k);
    }
  }  
  
  const partition = [];
  for (let n = 0; n < prime.length; n++) {        
    const firstNum = prime[n];
    for (let m = 0; m < prime.length; m++) {
      const secondNum = prime[m];
      if (firstNum + secondNum === end) {
        partition.push([firstNum, secondNum]);
      }
    }
  }  

  const result = [];
  for (let t = 0; t < partition.length; t++) {
    const diff = Math.abs(partition[t][0] - partition[t][1]);
    result[t] = diff;
  }  

  const idx = result.indexOf(Math.min(...result));  
  console.log(partition[idx].join(' '));  
}