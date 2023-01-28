const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

const [N, M] = input;
let result = '';
const output = [];
const visited = new Array(N).fill(false);

function dfs(count, start) {
  if (count === M) {
      result += `${output.join(' ')}\n`;
      return;
  };

  for (let i = start; i < N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(count + 1, i);
      output.pop();
      visited[i] = false;
  };
};

dfs(0, 0);
console.log(result);