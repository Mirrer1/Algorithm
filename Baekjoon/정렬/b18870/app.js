const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const list = input[0].split(' ').map(v => +v);
const sortArr = Array.from(new Set([...list].sort((a, b) => a - b)));

const dic = {};
sortArr.forEach((v, i) => { dic[v] = i} );

let result = '';
for (let i = 0; i < num; i++) {
  result += dic[list[i]] + ' '
}

console.log(result);