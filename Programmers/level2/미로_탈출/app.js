function solution(maps) {
  const [row, column] = [maps.length, maps[0].length];  
  const lArr = Array.from(Array(row), (e) => Array(column).fill(0));
  const eArr = Array.from(Array(row), (e) => Array(column).fill(0));  
  const position = [[1,0],[0,1],[-1,0],[0,-1]];
  
  let need = [];  
  let l = [];
  let e = [];
  let s = [];  
  let isL = false;
  let isE = false;
    
  maps.forEach((v,i) => {
    if(v.includes("S")) s.push(i,v.indexOf("S"));
    if(v.includes("L")) l.push(i,v.indexOf("L"));
    if(v.includes("E")) e.push(i,v.indexOf("E"));
  })
    
  lArr[s[0]][s[1]] = 1;
  need.push(s)
  
  while((!isL || !isE) && need.length){  
    const [r, c] = need.shift();
    
    if(!isL){
      for(let i = 0; i < 4; i++){
        const [newR, newC] = [r+position[i][0], c+position[i][1]];
        if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
        if(!lArr[newR][newC] && maps[newR][newC] !== "X"){                
          lArr[newR][newC] = lArr[r][c] + 1;
          need.push([newR, newC]);
        }
        
        if(lArr[l[0]][l[1]]) {
          isL = true;
          need = [l];
          eArr[l[0]][l[1]] = 1;
        }
      }
  }else{        
      for(let i = 0; i < 4; i++){
        const [newR, newC] = [r+position[i][0], c+position[i][1]];
        if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
        if(!eArr[newR][newC] && maps[newR][newC] !== "X"){
          eArr[newR][newC] = eArr[r][c] + 1;
          need.push([newR, newC]);
        }
        if(eArr[e[0]][e[1]]) {
          isE = true;
          need = [];
        }
      }
    }
  }
 
  return eArr[e[0]][e[1]] ? lArr[l[0]][l[1]] + eArr[e[0]][e[1]] - 2 : -1;
}