const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((v) => +v);

const num = input.shift();
let apt = Array.from(Array(15), () => new Array(15));

for (let i = 0; i < num; i++) {
  let k = input.shift();
  let n = input.shift();

  for (let i = 0; i < 15; i++) {
    apt[i][1] = 1;
    apt[0][i] = i;
  }; 

  for (let i = 1; i < 15; i++) {
    for (let j = 2; j < 15; j++) {
      apt[i][j] = apt[i][j - 1] + apt[i - 1][j];
    };
  };
  
  console.log(apt[k][n]);
};