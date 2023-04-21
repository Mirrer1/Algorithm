// 나의 풀이
function solution(dartResult) {
  const cnt = [];
  let answer = 0;
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {    
    if (!isNaN(dartResult[i])) {      
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);      
    } else if (dartResult[i] === "S") {
      cnt.push(score);      
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2));      
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3));      
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;      
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  }
  
  answer = cnt.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

// 다른 사람의 풀이
// 정규표현식 사용
function solution(dartResult) {
  const bonus = { 'S': 1, 'D': 2, 'T': 3 }, 
  options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
        score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
