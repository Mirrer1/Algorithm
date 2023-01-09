const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  sol(input);
  process.exit();
})

function sol(input) {  
  for (let i = 0; i < input.length; i++) {
    const str = input[i].split('');
    let small = 0, capital = 0, number = 0, blank = 0;
    
    for (let j = 0; j < str.length; j++) {
      const word = str[j];
  
      if (word >= 'a' && word <= 'z') small++;
      else if (word >= 'A' && word <= 'Z') capital++;
      else if (word === ' ') blank++;
      else number++;
    }
    
    console.log(`${small} ${capital} ${number} ${blank}`);
  };  
}