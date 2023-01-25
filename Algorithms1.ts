// Fibonacci Sequence
const fibonacci = (n: number): number[] => {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib
}

console.log(fibonacci(7))