function solution(numbers, k) {
    let getBall = 0
    
    for(let i = 1; i < k; i++){
        getBall += 2;
        if(getBall > numbers.length) getBall %= numbers.length
    }

    return numbers[getBall];
}

function solution(numbers, k) {
  k = (2 * (k - 1)) % numbers.length
  return numbers[k];
}