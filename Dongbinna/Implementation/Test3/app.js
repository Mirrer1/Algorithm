const input = ['a', 1];

const row = input[1];
const col = input[0].charCodeAt(0) - 96;

const step = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
let count = 0;

for (let i = 0; i < step.length; i++) {
  const [stepRow, stepCol] = step[i];
  const nextRow = row + stepRow;
  const nextCol = col + stepCol;

  if ((nextRow >= 1 && nextRow <= 8) && (nextCol >= 1 && nextCol <= 8)) {
    count++;
  }  
}

console.log(count);