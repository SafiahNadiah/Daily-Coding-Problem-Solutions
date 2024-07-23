function hasPairWithSum(nums, k) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(k - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Example usage:
const numbers = [10, 15, 3, 7];
const k = 17;
console.log(hasPairWithSum(numbers, k)); // Output: true
