const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);
const arr = input.shift().split(' ').map(v => +v).sort((a, b) => a - b);
const answer = new Set();
const visited = new Array(arr.length).fill(0);
const tmp = [];

const solution = (arr, M) => {    
  const dfs = (index, cnt) => {
    if (cnt === M) answer.add(tmp.join(" "));
    else {
      for (let i = index; i < arr.length; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          tmp.push(arr[i]);
          dfs(i, tmp.length);
          tmp.pop();
          visited[i] = 0;
        }
      }
    }
  };
  
  dfs(0, 0);
  return [...answer].join("\n");
};

console.log(solution(arr, M));