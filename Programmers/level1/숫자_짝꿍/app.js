// 나의 풀이
function solution(X, Y) {
  let result = ''
  X = X.split("");
  Y = Y.split("");
  
  for(let i = 0 ; i < 10 ; i ++) {
    const curX = X.filter(a => Number(a) === i).length
    const curY = Y.filter(a => Number(a) === i).length
    result+=String(i).repeat(Math.min(curX, curY))
  }
  if(result === '') return "-1"
  if(Number(result) === 0) return "0"
  
  return result.split("").sort((a,b) => Number(b)-Number(a)).join("")
}

// 다른 사람의 풀이
function solution(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
      numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
      if (!numObj[char]) continue;
      result += char;
      numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
      .map((num) => +num)
      .sort((a, b) => b - a)
      .join('');    
}