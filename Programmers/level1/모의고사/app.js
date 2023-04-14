function solution(answers) {
  const answer = [];  
  
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];  
  
  for (let i = 0; i < answers.length; i++) {
      if (s1[i % s1.length] === answers[i]) score[0]++;
      if (s2[i % s2.length] === answers[i]) score[1]++;
      if (s3[i % s3.length] === answers[i]) score[2]++;
  }  
  
  const max = Math.max(...score);
  for (let j = 0; j < score.length; j++) {
      if (score[j] === max) answer.push(j + 1);
  }
  
  return answer;
}