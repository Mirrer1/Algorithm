const [N, M] = [4, 6];
const arr = [19, 15, 10, 17];

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) total += arr[i] - mid;
  }

  if (total < M) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }  
}

console.log(result);