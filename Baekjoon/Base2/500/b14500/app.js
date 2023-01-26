const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout }); 

let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {  
  let answer ='';
  answer = tetro(input);
  console.log(answer)
  process.exit();
});


let tetro = function(input) {
  let tetromino = [];
  let tmp = input.splice(0, 1).join('').split(' ');
  let N = tmp[0] * 1;
  let M = tmp[1] * 1;
  
  let alpha = new Array(M + 4).fill(0);
  tetromino.push(alpha);
  
  input.reduce((acc,cur) => {    
    tetromino.push(('0 '+cur+' 0 0 0').split(' '));
  }, '');  
  
  tetromino.push(alpha);
  tetromino.push(alpha);
  tetromino.push(alpha);
  
  return tetro_max(tetromino, N, M);
}

let tetro_max = function(t,N,M){
  let result = 0;
  
  for(i=1;i<=N;i++){
    for(j=1;j<=M;j++){
      result = Math.max(result, 
      (t[i][j]*1+t[i+1][j]*1+t[i+2][j]*1+t[i+3][j]*1), (t[i][j]*1+t[i][j+1]*1+t[i][j+2]*1+t[i][j+3]*1), (t[i][j]*1+t[i+1][j]*1+t[i][j+1]*1+t[i+1][j+1]*1),
      (t[i][j]*1+t[i+1][j]*1+t[i+2][j]*1+t[i+2][j+1]*1), (t[i][j]*1+t[i+1][j]*1+t[i][j+1]*1+t[i][j+2]*1), (t[i][j]*1+t[i+1][j]*1+t[i+1][j+1]*1+t[i+1][j+2]*1), (t[i][j]*1+t[i+1][j]*1+t[i+2][j]*1+t[i+2][j-1]*1),
      (t[i][j]*1+t[i][j+1]*1+t[i+1][j+1]*1+t[i+2][j+1]*1), (t[i][j]*1+t[i][j+1]*1+t[i][j+2]*1+t[i-1][j+2]*1), (t[i][j]*1+t[i][j+1]*1+t[i][j+2]*1+t[i+1][j+2]*1), (t[i][j]*1+t[i][j+1]*1+t[i+1][j]*1+t[i+2][j]*1),
      (t[i][j]*1+t[i+1][j]*1+t[i+1][j+1]*1+t[i+2][j+1]*1), (t[i][j]*1+t[i][j+1]*1+t[i-1][j+1]*1+t[i-1][j+2]*1), (t[i][j]*1+t[i+1][j]*1+t[i+1][j-1]*1+t[i+2][j-1]*1), (t[i][j]*1+t[i][j+1]*1+t[i+1][j+1]*1+t[i+1][j+2]*1),
      (t[i][j]*1+t[i][j+1]*1+t[i-1][j+1]*1+t[i][j+2]*1), (t[i][j]*1+t[i+1][j]*1+t[i+1][j+1]*1+t[i+2][j]*1), (t[i][j]*1+t[i][j+1]*1+t[i][j+2]*1+t[i+1][j+1]*1), (t[i][j]*1+t[i+1][j]*1+t[i+1][j-1]*1+t[i+2][j]*1))
    }
  }
  return result;
}