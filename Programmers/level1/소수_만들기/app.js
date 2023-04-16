function solution(nums) {
  const result = [];

  const isPrimeNumber = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const size = nums.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        const num = nums[i] + nums[j] + nums[k];
        
        if (isPrimeNumber(num)) result.push(num);
      }
    }
  }

  return result.length;
}