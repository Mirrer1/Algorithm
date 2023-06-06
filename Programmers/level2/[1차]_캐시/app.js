function solution(cacheSize, cities) {  
  const MISS = 5;
  const HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0;  
  const cache = [];

  cities.forEach((city) => {    
    const cityUp = city.toUpperCase();    
    const idx = cache.indexOf(cityUp);

    if (idx === -1) {      
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    } else {
      cache.splice(idx, 1);            
      answer += HIT;
    }
    cache.push(cityUp);
  });

  return answer;
}