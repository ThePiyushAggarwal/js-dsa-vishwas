// Give a positive integer 'n', determine if the number is a power of 2 or not

// My solution
function isPowerOfTwo(num: number) {
  if (num < 1) return false
  if (num === 1) return true

  // if num > 1
  let afterDividing: number = num

  for (let i = 0; i <= num; i++) {
    if (afterDividing % 2 !== 0) {
      return false
    }
    afterDividing = afterDividing / 2
    if (afterDividing === 1) {
      return true
    }
  }

  return false
}

// Vikash's
function isPowerOfTwo2(n: number) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo2(0), 0)
console.log(isPowerOfTwo2(1), 1)
console.log(isPowerOfTwo2(2), 2)
console.log(isPowerOfTwo2(3), 3)
console.log(isPowerOfTwo2(4), 4)
console.log(isPowerOfTwo2(6), 6)
console.log(isPowerOfTwo2(8), 8)
console.log(isPowerOfTwo2(10), 10)
console.log(isPowerOfTwo2(12), 12)
console.log(isPowerOfTwo2(16), 16)
console.log(isPowerOfTwo2(32), 32)
console.log(isPowerOfTwo2(128), 128)
console.log(isPowerOfTwo2(257), 257)
console.log(isPowerOfTwo2(2097152), 2097152)
console.log(isPowerOfTwo2(4194304), 4194304)
console.log(isPowerOfTwo2(4194306), 4194306)
