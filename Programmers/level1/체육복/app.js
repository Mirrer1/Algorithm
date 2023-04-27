// 나의 풀이
function solution(n, lost, reserve) {    
  let result = 0;  
  const noReserveLost = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));    
  let hasReserve = reserve.sort((a, b) => a - b).filter((reverse) => !lost.includes(reverse));  
  
  const finalLost = noReserveLost.filter((lost) => {            
    const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);      
    
    if(!lend) return lost;            
    hasReserve = hasReserve.filter((reverse) => reverse !== lend);
  })
  
  result = n - finalLost.length;  
  return result;
}

// 다른 사람의 풀이
function solution(n, lost, reserve) {      
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r-a) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}