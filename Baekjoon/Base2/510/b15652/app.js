const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

const [N, M] = input;
let result = '';
const output = [];

function dfs(count, start) {
  if (count === M) {
    result += `${output.join(' ')}\n`;
    return;
  };

  for (let i = start; i < N; i++) {
    output.push(i + 1);
    dfs(count + 1, i);
    output.pop();
  };
};

dfs(0, 0);
console.log(result);