const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input.slice(1);

let count = 0;
for (let i = 0; i < num; i++) {    
  const result = [];
  for (let j = 0; j < list[i].length; j++) {
    if (result.includes(list[i][j]) && list[i][j - 1] !== list[i][j]) {      
      count--;
      break;
    }
    result.push(list[i][j]);
  }  
  count++;
}
console.log(count);