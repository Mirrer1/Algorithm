function solution() {
  for (let i = 0; i < 20; i++) {
    const num = i.toString().split('').map((v) => +v);
    const sum = num.reduce((a, b) => a + b, 0);
    
    console.log(num, sum);
  }
}

console.log(solution());