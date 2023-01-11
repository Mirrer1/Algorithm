const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split("\n").map(v => +v);

const largestNum = Math.max(...input);
const check = new Array(largestNum + 1).fill(false);

for (let i = 2; i <= largestNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= largestNum; j += i) check[j] = true;
  }
}

let result = "";
input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (!check[i] && !check[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});

console.log(result);