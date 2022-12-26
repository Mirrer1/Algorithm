const N = 5;
const cmd = ['R', 'R', 'R', 'U', 'D', 'D'];

let x = 1;
let y = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const moveTypes = ['L', 'R', 'U', 'D'];

for (let i = 0; i < cmd.length; i++) {
  let nx = -1;
  let ny = -1;

  for (let j = 0; j < moveTypes.length; j++) {
    if (cmd[i] === moveTypes[j]) {
      nx = x + dx[j];
      ny = y + dy[j];
    }
  }

  if (nx < 1 || ny < 1 || nx > N || ny > N) continue;
  x = nx;
  y = ny;
}

console.log(x, y);