// 나의 풀이
function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateStr = "2016-" + a + "- " + b;
  const date = new Date(dateStr);
  return week[date.getDay()];
}

// 다른 사람의 풀이
// 생성된 Date를 문자열로 변환
function getDayName(a,b){
  const date = new Date(2016, (a - 1), b);
  return date.toString().slice(0, 3).toUpperCase();
}