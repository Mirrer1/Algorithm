const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(num) {
  let count = 0;  
  for (let i = 1; i <= num; i++) {
    const numArr = i.toString().split('').map((v) => +v);  
    const firstDiff = numArr[1] - numArr[0];
    const secondDiff = numArr[2] - numArr[1];

    numArr.length <= 2 && count++;
    firstDiff === secondDiff && count++;
  }
  console.log(count);
}