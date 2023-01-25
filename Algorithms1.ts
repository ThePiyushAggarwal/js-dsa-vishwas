// From Vishwas Video 7
// Fibonacci Sequence
const fibonacci = (n: number): number[] => {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib
}
console.log(fibonacci(7))

// Factorial
// From Vishwas Video 8
const factorial = (n: number): number => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}
console.log("factorial", factorial(5))
// Big-O = O(n)
// Mine
const factorial2 = (n: number): number => {
  if (n <= 0) {
    return 1
  }
  return factorial2(n - 1) * n
}
