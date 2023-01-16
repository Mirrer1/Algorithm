const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);
let dp = new Array(N).fill(0);
let arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;
  
  for (let j = 0; j < i; j++) {
    if(nums[i] > nums[j] && dp[j] > max){
      max = dp[j];
      maxIdx = j;
    }
  }
  
  dp[i] = max + 1;
	arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(nums[i]) : [nums[i]];
}

const maxLength = Math.max(...dp);
console.log(maxLength);
console.log(arr[dp.indexOf(maxLength)].join(' '));