// https://www.hackerrank.com/challenges/pairs
// Dada una matriz de números enteros y un valor objetivo, determine la cantidad de pares de elementos de la matriz que tienen una diferencia igual al valor objetivo.

function pairs(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    const diff = arr[right]! - arr[left]!;

    if (diff === k) {
      count++;
      left++; // avanzamos ambos punteros
      right++;
    } else if (diff < k) {
      right++; // necesitamos una diferencia mayor
    } else {
      // diff > k
      left++; // necesitamos una diferencia menor
    }

    // siempre aseguramos que right > left
    if (left === right) right++;
  }

  return count;
}

function pair1(k: number, arr: number[]): number {
  let count = 0;
  const numMap: Record<number, boolean> = {};

  for (const num of arr) {
    numMap[num] = true;
  }

  for (const num of arr) {
    if (numMap[num + k]) {
      count++;
    }
  }
  return count;
}

// Recibo un array de números enteros, y un valor objetivo
// Debo retornar la cantidad de pares que tienen una diferencia igual al valor objetivo
// Ejemplo: arr = [1, 5, 3, 4, 2] y k = 2
// Si pensamos en diferencia absoluta (|a - b| = k):
// 5 - 3 = 2 → ✅ es un par válido ((5,3) o (3,5) dependiendo de cómo lo cuentes).
// 3 - 1 = 2 → ✅ otro par válido ((3,1)).
// 4 - 2 = 2 → ✅ otro par válido ((4,2)).
// Entonces hay tres pares:
// (5,3), (3,1), (4,2)

// Si encuentro 2 pares válidos, devuelvo 2.

// Si encuentro 4 pares válidos, devuelvo 4

// Los números estarán ordenados?
// Si no lo están, lo debo ordenar?

console.log(pairs(2, [1, 5, 3, 4, 2]));
