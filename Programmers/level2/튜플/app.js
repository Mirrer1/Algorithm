function solution(s) {  
  const sArr = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((e) => e.split(",").map((e) => parseInt(e)))
    .sort((a, b) => a.length - b.length);
  
  const answer = [];
  
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      const temp = sArr[i][j];
      if (!answer.includes(sArr[i][j])) answer.push(sArr[i][j]);
    }
  }
  return answer;
}