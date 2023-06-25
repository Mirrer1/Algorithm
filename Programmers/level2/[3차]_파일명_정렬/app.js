// 나의 풀이
const solution = (files) => {  
  const parsedFile = [];

  files.forEach(file => {
    const parts = ['', '', ''];

    [...file].forEach(word => {
      const isNumber = !isNaN(parseInt(word));  

      if (!isNumber && !parts[1].length) parts[0] += word;            
      else if (isNumber && !parts[2].length) parts[1] += word;            
      else parts[2] += word;
    });

    parsedFile.push(parts);
  });
  
  parsedFile.sort((a, b) => {
      const stringA = a[0].toUpperCase(), stringB = b[0].toUpperCase();
  
      if (stringA > stringB) return 1;
      else if (stringA < stringB) return -1;
      else {
        const parseIntA = parseInt(a[1]), parseIntB = parseInt(b[1]);
        return parseIntA - parseIntB;
      };
  });

  return parsedFile.map(arr => arr.join(''))
}

// 다른 사람의 풀이
// 정규표현식을 사용하여 간결하게 풀이
function solution(files) {
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/
  let dict = []
  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re)
    dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
  })

  return dict.sort((a, b) => {
    if (a.head > b.head) return  1
    if (a.head < b.head) return -1
    if (a.num > b.num) return  1
    if (a.num < b.num) return -1
    return a.idx - b.idx
  }).map(e => e.fn)
}