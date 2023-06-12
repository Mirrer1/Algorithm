// 나의 풀이
function solution(str1, str2) {
  const regEx = /^[a-zA-Z]+$/;
  const arr1 = [];
  const arr2 = [];
  let result = 0;  
  
  for (let i = 0; i < str1.length - 1; i++) {
    const subStr = str1.toLowerCase().substring(i, i + 2);
    if(regEx.test(subStr)) arr1.push(subStr);
  }
  
  for (let j = 0; j < str2.length - 1; j++) {
    const subStr = str2.toLowerCase().substring(j, j + 2);
    if(regEx.test(subStr)) arr2.push(subStr);
  }

const union = [];
const intersect = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) >= 0) {
    intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
  }
  union.push(arr2[i]);
}

for (let i = 0; i < arr1.length; i++) {
  union.push(arr1[i]);
}

  union.length === 0 ? result = 65536 : result = Math.floor((intersect.length / union.length) * 65536);

  return result;
}

// 다른 사람의 풀이
// Set 자료구조와 Math.max, min을 사용하여 간결하게 풀이
function solution (str1, str2) {
  function explode(text) {
    const result = [];

    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);

      if (node.match(/[A-Za-z]{2}/)) result.push(node.toLowerCase());
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);  
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}