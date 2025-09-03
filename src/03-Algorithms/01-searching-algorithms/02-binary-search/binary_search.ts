const binarySearch = (arr: number[], target: number): number => {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid]! === target) {
      return mid;
    } else if (arr[mid]! < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
const arr = [1, 4, 5, 12, 88];

// ✅ Casos donde el elemento está presente
console.log(binarySearch(arr, 1)); // Primer elemento → índice 0
console.log(binarySearch(arr, 5)); // Elemento en medio → índice 2
console.log(binarySearch(arr, 88)); // Último elemento → índice 4

// ❌ Casos donde el elemento no está presente
console.log(binarySearch(arr, 0)); // Menor que el mínimo → -1
console.log(binarySearch(arr, 10)); // Entre valores → -1
console.log(binarySearch(arr, 100)); // Mayor que el máximo → -1

// 🔄 Casos con arrays de tamaño 1
console.log(binarySearch([7], 7)); // Encontrado → índice 0
console.log(binarySearch([7], 3)); // No encontrado → -1

// 🔄 Casos con array vacío
console.log(binarySearch([], 5)); // No encontrado → -1
