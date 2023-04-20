// 나의 풀이
function solution(N, stages) {
  const answer = [];
  const data = [];
  let stagesCount = 0;
  let reachedCount = 0;
  let failureRate = 0;

  for(let i = 1; i < N + 1; i++) {    
    for(let j = 0; j < stages.length; j++) {        
        if(i === stages[j]) stagesCount++;        
        if(i <= stages[j]) reachedCount++;
    }      
    
    failureRate = stagesCount / reachedCount;    
    data.push({stageNum: i, failureRate: failureRate});    
    stagesCount = 0;
    reachedCount = 0;
  }  

  data.sort((a, b) => b.failureRate - a.failureRate);
  data.map((x) => answer.push(x.stageNum));

  return answer;
}

// 다른 사람의 풀이
// 해당 스테이지를 result에 함께 넣은 뒤 마지막에 내림차순으로 정렬 후 해당 스테이지를 출력
function solution(N, stages) {
  let result = [];
  for(let i=1; i<=N; i++){
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }

  result.sort((a,b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}