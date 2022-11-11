function solution(num) {    
  const sum = num.split('').map((v) => +v).reduce((a, b) => a + b, 0);  
  num = +num;

  return sum + num;  
}

let arr = Array(10000).fill().map((v, i) => i + 1);
for (let i = 1; i < 10000; i++) {  
  let result = solution(String(i)); 

  if (result <= 10000) {
    let newArr = arr.filter((v) => v !== result);
    arr = newArr;
  }  
}

arr.map((v) => console.log(v));