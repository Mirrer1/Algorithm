const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const currentTime = input[0].split(' ').map((item) => +item);
const cookTime = +input[1];

solution(currentTime[0], currentTime[1] ,cookTime);

function solution(hour, miniute, cookTime) {
  hour = Math.floor(((hour * 60) + miniute + cookTime) / 60);
  miniute = ((hour * 60) + miniute + cookTime) % 60;

  if (hour >= 24) {
    hour -= 24;
  }

  console.log(hour, miniute);
}