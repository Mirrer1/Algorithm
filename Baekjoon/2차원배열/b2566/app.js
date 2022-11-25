const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let max = 0;
let row = 0; 
let col = 0; 

for (let i = 0; i < input.length; i++) {
  const list = input[i].split(' ').map((v) => +v);  
  for (let j = 0; j < input.length; j++) {
    if (list[j] > max) {
      max = list[j];
      row = i;
      col = j;      
    }
  }
}
console.log(max);
console.log(row + 1, col + 1);