const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);
const arr = input.shift().split(' ').map(v => +v).sort((a, b) => a - b);
const answer = new Set();
const tmp = [];

const solution = (arr, M) => {
  const dfs = (cnt) => {
    if (cnt === M) answer.add(tmp.join(" "));
    else {
      for (let i = 0; i < arr.length; i++) {
        tmp.push(arr[i]);
        dfs(cnt + 1);
        tmp.pop();
      }
    }
  };
  dfs(0);
  return [...answer].join("\n");
};
console.log(solution(arr, M));