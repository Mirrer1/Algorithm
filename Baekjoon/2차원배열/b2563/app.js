const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input.shift();
const list = input;
let paper = new Array(100).fill().map(v => new Array(100).fill(false));

for (let i = 0; i < num; i++) {
  const [x, y] = list[i].split(' ').map((v) => +v);

  for (let n = 0; n < 10; n++) {
    for (let m = 0; m < 10; m++) {
      paper[x + n][y + m] = true;
    };
  };
};

let result = 0;
for (let j = 0; j < paper.length; j++) {
  for (let z = 0; z < paper[j].length; z++) {
    if (paper[j][z]) {
      result++;
    }
  }  
}
console.log(result);