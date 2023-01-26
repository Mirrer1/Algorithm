const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = +input.shift();
const N = +input.shift();

let brokenButton = [];
if (N > 0) brokenButton = input.shift().split(' ').map(v=>+v);

function check (num, brokenButton) {
  while (true) {
    if (brokenButton.includes(num % 10)) return false;
    else num = Math.floor(num / 10);
    
    if (num === 0) break;
  }
  return true;
};

function solution (brokenButton, target) {
  let min1 = Math.abs(target - 100);
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= 999999; i++) {
    if (check(i, brokenButton)) {      
      let tmp = i.toString().length + Math.abs(target - i);
      
      if (tmp < min2) min2 = tmp;
      else if (tmp > min2) break;
    };
  };
  
  let answer = Math.min(min1, min2);
  return answer;
}

console.log(solution(brokenButton, target));