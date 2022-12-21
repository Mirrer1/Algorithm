const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +(input.shift());
const list = input[0].split(' ').map((v) => +v);
let result = 0;

for (let i = 0; i < num; i++) {  
  if (list[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < list[i]; j++) {      
      (list[i] % j === 0) && count++;
    }
    (count === 0) && result++;
  }  
}
console.log(result);