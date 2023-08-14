const count = (ary,word) => ary.filter(el => el === word).length

function solution(picks, minerals) {
    let ret = 0
    const m = [];
    
    minerals = minerals.slice(0, picks.reduce((a, c) => a + 5 * c, 0));
    const fatigue = [
      {'diamond' : 1 , 'iron' : 1 , 'stone' : 1},
      {'diamond' : 5 , 'iron' : 1 , 'stone' : 1},
      {'diamond' : 25 , 'iron' : 5 , 'stone' : 1}
    ];
    
    for (let i = 0; i < minerals.length ; i += 5) m.push(minerals.slice(i, i + 5));
    m.sort((a, b) => {
      const aDiaCnt = count(a, 'diamond');
      const bDiaCnt = count(b, 'diamond');
      
      if (aDiaCnt === bDiaCnt) {
        const aIronCnt = count(a, 'iron');
        const bIronCnt = count(b, 'iron');

        return bIronCnt - aIronCnt;
      }
      return bDiaCnt-aDiaCnt;
    })
    
    let i = picks[0] ? 0 : picks[1] ? 1 : 2;
    
    for (const mine of m){
      ret += mine.reduce((a, c) => a + fatigue[i][c], 0);
      
      if (--picks[i] <= 0) i++;
      if (picks.every(el => !el)) return ret;
    }
    return ret;
}