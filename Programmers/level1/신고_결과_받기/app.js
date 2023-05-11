// 나의 풀이
function solution(id_list, report, k) {
  const answer = [];
  const arr = [];  
  const reportFrom = [];
  
  let prevFrom = "";
  let prevTo = "";

  for (let i = 0; i < id_list.length; ++i) {
    const temp = [];
    reportFrom.push(temp);
    arr[i] = 0;
    answer[i] = 0;
  }
  report.sort();

  for (let i = 0; i < report.length; ++i) {
    const temp = [];
    let str = report[i].split(' ');
    let f, t;

    if (prevFrom == str[0] && prevTo == str[1]) continue;

    for (let j = 0; j < id_list.length; ++j) {
        if (str[0] == id_list[j]) f = j;                
        if(str[1] == id_list[j]) t = j;                
    } 
    
    reportFrom[t].push(f);
    temp.push(str[0]);
    prevFrom = str[0];
    prevTo = str[1];
    ++arr[t];
  }    

  for (let i = 0; i < arr.length; ++i) {
    if(arr[i] < k) continue;

    for(let j = 0; j < reportFrom.length; ++j) {
      ++answer[reportFrom[i][j]];
    }
  }
  return answer;
}

// 다른 사람의 풀이
// Map, Set자료구조를 사용하여 간결하게 풀이
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}