function solution(k, ranges) {
  const result = [];
  const [y, accr] = [[k], [0]];
  
  while (k > 1) {
    if (k % 2 === 0) k /= 2;
    else k = 3 * k + 1;
    y.push(k);
  }

  const last = y.length - 1;
  
  for (let i = 1; i <= last; i += 1) {
    accr[i] = accr[i - 1] + (y[i - 1] + y[i]) / 2;
  }
  
  for (const range of ranges) {
    const [x1, x2] = [range[0], last + range[1]];
    if (x1 > x2) result.push(-1);
    else result.push(accr[x2] - accr[x1]);
  }
  return result;
}