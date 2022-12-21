const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const fixCost = +input[0];
const varCost = +input[1];
const total = +input[2];
const income = total - varCost;

const count = Math.floor(fixCost / income) + 1;
console.log(income <= 0 ? -1 : count);