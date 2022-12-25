let [n, k] = [25, 3];
let result = 0;

while (true) {
  let target = Math.floor(n / k) * k;
  result += (n - target);
  n = target;

  if (n < k) break;

  result++;
  n /= k;
}

result += (n - 1);
console.log(result);