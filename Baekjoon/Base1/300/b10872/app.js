const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;
rl.on("line", line => {
  input = line;
  rl.close();
}).on("close", () => {
  sol(input);
  process.exit();
});

const factorial = N => {
  if (N <= 1) return 1;

  return N * factorial(N - 1);
}

const sol = input => {
  console.log(factorial(+input));
}