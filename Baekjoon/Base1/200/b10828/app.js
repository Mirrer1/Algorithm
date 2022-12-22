const solution = input => {  
  const num = +input.shift();
  const list = input;
  
  const stack = [];
  const result = [];
  
  for (let i = 0; i < num; i++) {
    const command = list[i].split(' ');
    
    switch (command[0]) {
      case 'push':    
        stack.unshift(+command[1]);
        break;
      case 'pop':   
        stack.length === 0 ? result.push(-1) : result.push(stack.shift());        
        break;
      case 'size':      
        result.push(stack.length);
        break;
      case 'empty':       
      stack.length === 0 ? result.push(1) : result.push(0);
        break;
      case 'top':      
        stack.length === 0 ? result.push(-1) : result.push(stack[0]);
        break;
      default:       
        break;
    }      
  }  
  console.log(result.join('\n'));
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    input.push(line);
    
  })
  .on('close', () => {    
    solution(input);
    process.exit();
  })