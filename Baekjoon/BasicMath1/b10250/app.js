const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input.splice(1);

for (let i = 0; i < num; i++) {
  const [H, W, N] = [...list[i].split(' ').map((v) => +v)];  
  let floor;
  let num;

  if (N % H === 0) {
    floor = H;
    num = Math.ceil(N / H);
  } else {
    floor = N % H;
    num = Math.ceil(N / H);
  }
  console.log(`${floor}${num < 10 ? `0${num}` : num}`);
}