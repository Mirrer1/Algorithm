// 나의 풀이
function solution(t, p) {
  const numberP = +p;
  let count = 0;
  
  for(let i = 0; i < t.length - p.length + 1; i++) {
    const slicedT = t.slice(i, i + p.length);
    const numberT = +slicedT;
    
    if(numberT <= numberP) count += 1;
  }
  
  return count;
}

// 다른 사람의 풀이
// for문안에서 count처리를 함께 수행하여 간결하게 표현
function solution(t, p) {
  let count = 0;

  for(let i=0; i<=t.length-p.length; i++) {
    let value = t.slice(i, i+p.length);
    if(+p >= +value) count++;
  }
  
  return count;
}