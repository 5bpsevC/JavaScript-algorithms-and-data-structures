// Escriba una función llamada maxSubarraySum que acepte un array de enteros y un número llamado n .
// La función debe calcular la suma máxima de n elementos consecutivos del array.

function maxSubarraySum(arr: number[], num: number): number | null {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // Calcula la suma inicial de la primera ventana
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]!;
  }

  tempSum = maxSum;

  // Desliza la ventana por el array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num]! + arr[i]!;
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Ejemplo de uso
const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result); // 19
