const [N, K] = [5, 3];
const arrA = [1, 2, 5, 4, 3];
const arrB = [5, 5, 6, 6, 5];

const sortA = arrA.sort((a, b) => a - b);
const sortB = arrB.sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
  if (sortA[i] < sortB[i]) {
    let temp = sortA[i];
    sortA[i] = sortB[i];
    sortB[i] = temp;
  } else break;
}

console.log(sortA.reduce((a, b) => a + b, 0));