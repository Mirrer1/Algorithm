function solution(my_string) {
  return my_string.split('').filter(v => !isNaN(v)).map(v => +v).sort((a, b) => a - b);
}

function solution(box, n) {
  return box.map(v => Math.floor(v / n)).reduce((a, b) => a * b, 1);
}