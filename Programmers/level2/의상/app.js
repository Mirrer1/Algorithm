// 나의 풀이
function solution(clothes) {
  const clothesMap = {};
  let answer = 1;
  
  clothes.forEach(arr => {
    const [type, name] = arr;

    clothesMap.hasOwnProperty(name) ? clothesMap[name]++ : clothesMap[name] = 1
  })

  for(const key in clothesMap) {
    answer *= (clothesMap[key] + 1);
  }
  
  return answer - 1;
}

// 다른 사람의 풀이
// reduce 메서드를 사용하여 객체를 초기값으로 설정
function solution(clothes) {
  return Object.values(clothes.reduce((obj, t)=> {
    obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
    return obj;
  } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}