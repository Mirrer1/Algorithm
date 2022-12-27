const N = 1;
let count = 0;

function check(h, m, s) {
  if (h % 10 === 3 || m / 10 === 3 || m % 10 === 3 || s / 10 === 3 || s % 10 === 3) {
    return true;
  } 
  return false;
}

for (let i = 0; i <= N; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if (check(i, j, k)) count++;
    }
  }
}

console.log(count);
