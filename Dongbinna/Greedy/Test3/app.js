const input = '567';

const nums = input.split('').map(v => +v);
let result = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= 1 || result <= 1) result += nums[i];
  else result *= nums[i];
}

console.log(result);