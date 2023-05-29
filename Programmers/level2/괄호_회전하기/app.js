// 나의 풀이
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = arr => {
  let answer = 1;

  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};

// 다른 사람의 풀이
// 삼항 연산자와 재귀함수를 사용하여 간결하게 풀이
const GCD = (a, b) => a % b ? GCD(b, a % b) : b;
const LCM = (a, b) => a * b / GCD(a, b);

function solution(arr) {
  return arr.reduce((ac, v) => LCM(ac, v));
}

