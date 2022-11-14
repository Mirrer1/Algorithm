const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().toUpperCase();

const arr = Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  arr[input.charCodeAt(i) - 65]++;
};

const result = [];
const max = Math.max(...arr);
const idx = arr.indexOf(max);
for (let j = 0; j < arr.length; j++) {
  arr[j] === max && result.push(arr[j]);
};

result.length > 1 ? console.log('?') : console.log(String.fromCharCode(idx + 65));