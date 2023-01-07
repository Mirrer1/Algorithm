const N = 10;
const arr = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (arr[i]) continue;

  for (let j = i * i; j <= N; j += i) {
    arr[j] = true;
  }
}

const result = [];
for (let i = 2; i <= N; i++) {
  if (!arr[i]) result.push(i);
}

console.log(result.join(' '));