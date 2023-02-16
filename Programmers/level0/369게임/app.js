function solution(order) {        
  return (order + '')
      .split('').map(v => +v)
      .filter(v => v === 3 || v === 6 || v === 9)
      .length;
}