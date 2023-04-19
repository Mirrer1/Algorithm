// 나의 풀이
function solution(name, yearning, photos) {
  const answer = [];

  for (const photo of photos) {
    let count = 0;

    for (const man of photo) {
      if (name.includes(man)) count += yearning[name.indexOf(man)];
    }
    answer.push(count);
  }

  return answer;
}

// 다른 사람의 풀이
// 연산 과정을 return문에서 간결하게 수행
function solution(name, yearning, photo) {
  let obj = {};
  for(let i = 0; i < name.length; i++){
      obj[name[i]] = yearning[i];
  }
  return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}
