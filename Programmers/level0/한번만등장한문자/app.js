function solution(s) {      
  const str = s.split('');
  let result = [];
  
  str.forEach(v => {
      if (str.indexOf(v) === str.lastIndexOf(v)) result.push(v);
  })
  
  return result.sort().join('');
}