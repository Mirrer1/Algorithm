// 나의 출이
function solution(price, money, count) {
  let totalPrice = 0;  
  for(let i = 1; i <= count; i++) totalPrice += price * i;
  
  return money > totalPrice ? 0 : totalPrice - money;
}

// 다른 사람의 풀이
// 가우스 공식 사용
function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}