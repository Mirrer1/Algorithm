const N = 5;
const arr = [10, 20, 30, 40, 50];

let sum_value = 0;
const prefix_sum = [6];

for (let i = 0; i < N; i++) {
  sum_value += arr[i];
  prefix_sum[i + 1] = sum_value;
}

const left = 3;
const right = 4;
console.log(prefix_sum[right] - prefix_sum[left - 1]);