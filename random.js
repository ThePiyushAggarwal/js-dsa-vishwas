// Find the longest string in an array
function longestString(arr) {
  if (arr.length === 0) {
    throw new Error("Input array cannot be empty")
  }

  const longest = {
    index: 0,
    length: arr[0].length,
  }

  arr.forEach((item, index) => {
    if (item.length > longest.length) {
      longest.length = item.length
      longest.index = index
    }
  })

  return arr[longest.index]
}

// Find the largest number in an array
function largestNumber(arr) {
  let largest = arr[0]

  arr.forEach((item) => {
    if (item > arr[0]) {
      largest = item
    }
  })

  return largest
}

/**
 * Find the array with elements from both the arrays.
 * The elements should not repeat.
 * The order of elements in the resulting array should not change
 */
function uniqueElements(arr1, arr2) {
  const set = new Set()

  arr1.forEach((item) => set.add(item))
  arr2.forEach((item) => set.add(item))

  return [...set]
}
