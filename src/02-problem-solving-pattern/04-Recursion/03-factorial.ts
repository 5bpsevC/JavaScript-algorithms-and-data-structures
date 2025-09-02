function factorial(num: number): number {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorialRecursive(num: number): number {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorialRecursive(4));
