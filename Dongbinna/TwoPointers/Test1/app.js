const N = 5;
const M = 5;
const arr = [1, 2, 3, 2, 5];

let count = 0;
let interval_sum = 0;
let end = 0;

for (let i = 0; i < N; i++) {  
  while (interval_sum < M && end < N) { 
    interval_sum += arr[end]; 
    end++;
  }
  
  if (interval_sum === M) count++;

  interval_sum -= arr[i];
}

console.log(count);