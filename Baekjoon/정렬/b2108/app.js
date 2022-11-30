const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const num = input.shift();
const list = input.sort((a, b) => a - b);

const avg = Math.round(list.reduce((a, b) => a + b, 0) / num);
const median = list[Math.floor(num / 2)];

const map = new Map();
let max = 1;
for (let number of list) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else {
    map.set(number, 1);
  }
}

const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

console.log(avg === -0 ? 0 : avg);
console.log(median);
console.log(maxArr.length === 1 ? maxArr[0] : maxArr[1]);
console.log(list[num - 1] - list[0]);