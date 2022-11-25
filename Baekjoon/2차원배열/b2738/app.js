const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = input.shift().split(' ');
const N = +num[0];
const nArr = input.splice(0, N);
const mArr = input;

for (let i = 0; i < N; i++) {
  const firstArr = nArr[i].split(' ').map((v) => +v);
  const secondArr = mArr[i].split(' ').map((v) => +v);
  const result = [];

  for (let j = 0; j < firstArr.length; j++) {
    result.push(firstArr[j] + secondArr[j]);
  };
  console.log(result.join(' '));  
};