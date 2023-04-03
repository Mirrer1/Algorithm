// 나의 풀이
function solution(strings, n) {
  for(let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split("");
    strings[i].unshift(strings[i].splice(n, 1).join(""));
    strings[i] = strings[i].join("");
  }  
  
  strings.sort();  

  for(let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].split("");
    strings[j].splice(n,0,strings[j].shift());
    strings[j] = strings[j].join("");
  }
    
  return strings;
}

// 다른 사람의 풀이
// 내부 인덱스로 비교, 내부 character가 같다면 전체 string을 비교
// 내부 character가 다르면 내부 character을 비교
function solution(strings, n) {  
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}