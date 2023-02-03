const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);
const arr = input.shift().split(' ').map(v => +v).sort((a, b) => a - b);

let permutation = [];
const chosen = new Array(N).fill(false);
const output = [];

const recursion = () => {
  if (permutation.length === M) {
    output.push(permutation.join(' '));
  } else {
    chosen.forEach((bool, i) => {
      if (!bool) {
        chosen[i] = true;
        permutation.push(arr[i]);
        recursion();
        chosen[i] = false;
        permutation.pop();
      }
    });
  }
};

recursion();
console.log(output.join('\n'));
