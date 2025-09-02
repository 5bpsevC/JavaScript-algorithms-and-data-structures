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
    console.log(`Suma de la ventana actual: ${tempSum} - Suma máxima: ${maxSum}`);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

function maxSubarraySum1(arr: number[], num: number): number | null {
  if (arr.length < num) return null;

  let maxSum = 0;
  let currentSum = 0;
  let start = 0;
  let end = 0;

  // Inicializa la primera ventana
  while (end < num) {
    currentSum += arr[end]!;
    end++;
  }

  maxSum = currentSum;

  // Mueve ambos punteros hacia adelante
  while (end < arr.length) {
    currentSum = currentSum - arr[start]! + arr[end]!;
    maxSum = Math.max(maxSum, currentSum);
    start++;
    end++;
  }

  return maxSum;
}


// Ejemplo de uso
const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result); // 19
