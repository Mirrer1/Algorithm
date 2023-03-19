// 나의 풀이
function solution(s){
  const check_p = s.toLowerCase().split("p").length;
  const check_y = s.toLowerCase().split("y").length;
  
  return check_p == check_y ? true : false;
}

// 다른 사람의 풀이
// split에 separator줘서 나누면 리턴되는 배열의 길이는 일치되는 개수 + 1
function numPY(s){ 
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}