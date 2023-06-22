// 나의 풀이
function solution(skill, skill_trees) {
  const arr = [];
  let answer = 0;

  skill_trees.forEach(v => {
    let str = "";
    for (let i = 0; i < v.length; i++) {
      const idx = skill.indexOf(v[i]);
      if (idx != -1) str += v[i];
    }
    arr.push(str);
  });

  arr.forEach(v => {
    let check = true;
    for (let i = 0; i < v.length; i++) {
      if (v[i] !== skill[i]) check = false;
    }
    if (check) answer++;
  })

  return answer;
}

// 다른 사람의 풀이
// 정규표현식, indexOf 메서드를 사용하여 간결하게 풀이
function solution(skill, skill_trees) {
  let answer = 0;
  const regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
      .map((x) => x.replace(regex, ''))
      .filter((x) => {
          return skill.indexOf(x) === 0 || x === "";
      })
      .length
}