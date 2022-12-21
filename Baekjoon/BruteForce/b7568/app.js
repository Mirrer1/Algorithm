const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const list = input.map(v => v.split(' ').map(v => +v));
const result = [];

for (let i = 0; i < num; i++) {
  let counter = 0;
  for (let j = 0; j < num; j++) {
    if (i === j) continue;
    if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) counter++;    
  }
  result.push(counter + 1);
}

console.log(result.join(' '));