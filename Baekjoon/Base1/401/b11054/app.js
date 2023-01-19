const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);

const increaseDP = new Array(N).fill(1);
const decreaseDP = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  const cur = nums[i];
  let cnt = 1;

  for (let j = 0; j < i; j++) {
    const compare = nums[j];
    if (cur > compare) cnt = Math.max(cnt, increaseDP[j] + 1);
  };

  increaseDP[i] = cnt;
};

for (let i = N - 1; i >= 0; i--) {
  const cur = nums[i];
  let cnt = 1;

  for (let j = i + 1; j < N; j++) {
    const compare = nums[j];
    if (cur > compare) cnt = Math.max(cnt, decreaseDP[j] + 1);
  };

  decreaseDP[i] = cnt;
};

console.log(Math.max(...increaseDP.map((v, i) => v + decreaseDP[i])) - 1);