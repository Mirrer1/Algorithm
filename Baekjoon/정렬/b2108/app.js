const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const num = input.shift();
const list = input.sort((a, b) => a - b);

const avg = Math.round(list.reduce((a, b) => a + b, 0) / num);
const median = list[Math.floor(num / 2)];

let modeCount = 0;
let mode = [];
for (let i = 0; i < num; i++) {  
  const count = list.filter(v => v === list[i]).length;  
  if (count === modeCount) {
    modeCount = count;
    mode.push(list[i]);
  } else if (count > modeCount) {
    modeCount = count;
    mode = [list[i]];
  };
};
const modeResult = [...new Set(mode)];
const diff = Math.max(...list) - Math.min(...list);

if (avg === -0) {
  console.log(0);
} else {
  console.log(avg);
}
console.log(median);
if (list.length === 1) {
  console.log(list[0]);  
  console.log(0);
} else {
  console.log(modeResult.length === 1 ? modeResult[0] : modeResult[1]);
  console.log(diff);
}