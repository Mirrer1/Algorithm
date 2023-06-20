// 나의 풀이
function solution(land) {
  let answer = 0;
  
  for(let i = 0; i < land.length; i++){
    for(let j = 0; j < 4; j++){
      if(i === 0){
        continue;
      } else {
        let arr = land[i - 1].slice();
        arr[j] = 0;
        land[i][j] += Math.max.apply(null, arr);
        answer = Math.max(land[i][j], answer);
      }
    }       
  }
  
  return answer;
}

// 다른 사람의 풀이
// reduce 메서드를 사용해서 간결하게 풀이
function solution(land) {
  let answer = 0;

  return Math.max(...land.reduce((a, c) => {
    return [
      c[0] + Math.max(a[1], a[2], a[3]),  
      c[1] + Math.max(a[0], a[2], a[3]),
      c[2] + Math.max(a[0], a[1], a[3]),
      c[3] + Math.max(a[0], a[1], a[2]),
    ];
  }, [0, 0, 0, 0]));
}