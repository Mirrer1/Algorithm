const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);
const arr = input.shift().split(' ').map(v => +v).sort((a, b) => a - b);
const permutation = [];
const output = [];

const recursion = () => {
  if (permutation.length === M) output.push(permutation.join(' '));
  else {
    for (const i of arr) {
      permutation.push(i);
      recursion();
      permutation.pop();
    }
  }
};

recursion();
console.log(output.join('\n'));