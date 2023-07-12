function solution(orders, course) {	
  const candidates = {};    
    
  const dfs = (order, maxLength, candidate = '') => {
    if (candidate.length === maxLength) {
      candidates[candidate] = (candidates[candidate] ?? 0) + 1;
    } else {
      for (const menu of order) {
        if (candidate.includes(menu) || candidate[candidate.length - 1] > menu) {
          continue;
        }
        dfs(order, maxLength, candidate + menu);
      }
    }
  };
    
    
  for (const order of orders) {
    for (const courseLength of course) {
      if (order.length < courseLength) break;

      dfs([...order].sort().join(''), courseLength);
    }
  }
    
  const entries = Object.entries(candidates);
    
  return course.reduce((acc, courseLength) => {        
    const sameLengthCourse = entries.filter(([key]) => key.length === courseLength);          
      
    if (!sameLengthCourse.length) return acc;         
      
    const maxOrderCount = sameLengthCourse.sort((a, b) => b[1] - a[1])[0][1];
                
    if (maxOrderCount < 2) return acc;
                
    sameLengthCourse
      .filter(([, value]) => value === maxOrderCount)
      .forEach(([key]) => acc.push(key));
    return acc;
  }, [])
  .sort();
}