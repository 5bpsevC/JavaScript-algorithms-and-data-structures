const binarySearchRecursive = (
  arr: number[],
  low: number,
  high: number,
  target: number
): number => {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid]! < target) {
    return binarySearchRecursive(arr, mid + 1, high, target);
  } else {
    return binarySearchRecursive(arr, low, mid - 1, target);
  }
};

// Array de ejemplo
const arr = [1, 4, 5, 12, 88];

// ✅ Casos donde el elemento está presente
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 1)); // 0
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 5)); // 2
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 88)); // 4

// ❌ Casos donde el elemento no está presente
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 0)); // -1
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 10)); // -1
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 100)); // -1

// 🔄 Casos con arrays de tamaño 1
console.log(binarySearchRecursive([7], 0, 0, 7)); // 0
console.log(binarySearchRecursive([7], 0, 0, 3)); // -1

// 🔄 Casos con array vacío
console.log(binarySearchRecursive([], 0, -1, 5)); // -1
