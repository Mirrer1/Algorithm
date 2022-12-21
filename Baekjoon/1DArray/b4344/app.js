const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];

for (let i = 1; i <= num; i++) {
  let sum = 0;  
  let avg = 0;  
  let avgCount = 0;
  
  const score = input[i].split(' ').map((v) => +v);
  const classNum = +(score.shift()); 
  
  score.map((v) => sum += v);  
  avg = sum / classNum;
  avgCount = score.filter((v) => v > avg).length;
  
  console.log(`${(avgCount / classNum * 100).toFixed(3)}%`);
}