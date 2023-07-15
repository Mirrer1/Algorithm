function solution(n, k) {
  const base = Array.from({ length: n }, (_, i) => i + 1);
  var answer = [];
  k -= 1;

  while (true) {
    n--;
    if (k === 0) {
      answer.push(...base);
      break;
    }

    const index = Math.floor(k / factorial(n));
    k = k % factorial(n);
    answer.push(base[index]);
    base.splice(index, 1);
  }

  return answer;
}

const factorial = num => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};