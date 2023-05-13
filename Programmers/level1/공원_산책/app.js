const solution = (park, routes) => {
  const start = park.join('').indexOf('S')  
  const len = park[0].length;  
  let pos = [Math.floor(start / len), start % len]
  
  if (pos[0] === park.length && pos[1] === len) return [-1, -1]

  routes.map((v) => {    
    let arr = v.split(' ')    
    const vtc = arr[0] === 'N' || arr[0] === 'S';    
    const dir = arr[0] === 'N' || arr[0] === 'W' ? -1 : 1;    
    arr[1] = arr[0] === 'N' || arr[0] === 'W' ? Number(-arr[1]) : +arr[1]
    
    for (let a = 1; a <= Math.abs(arr[1]); a++) {      
      const check = vtc ? park[pos[0] + a * dir] : park[pos[0]]      
      if (!check || check[pos[1]] === 'X') return      
      if ((vtc ? !check[pos[1]] : (!check[pos[1] + a * dir] || check[pos[1] + a * dir] === 'X'))) return;
    }
    
    vtc ? pos[0] += arr[1] : pos[1] += arr[1]
  })
  return pos;
}
