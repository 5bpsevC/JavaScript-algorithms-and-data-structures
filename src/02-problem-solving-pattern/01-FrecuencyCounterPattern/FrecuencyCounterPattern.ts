// Escriba una función llamada `same` que acepte dos arrays.
// La función debe devolver `true` si cada valor del array tiene su valor correspondiente al cuadrado en el segundo array.
// La frecuencia de los valores debe ser la misma.
function same(arr1: number[], arr2: number[]): boolean {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  const freq1: { [key: number]: number } = {};
  const freq2: { [key: number]: number } = {};

  // Contar frecuencias en arr1
  for (let num of arr1) {
    if (num in freq1) {
      freq1[num]! += 1; // <-- “non-null assertion” para que TS sepa que no es undefined
    } else {
      freq1[num] = 1;
    }
  }

  // Contar frecuencias en arr2
  for (let num of arr2) {
    if (num in freq2) {
      freq2[num]! += 1; // <-- “non-null assertion” para que TS sepa que no es undefined
    } else {
      freq2[num] = 1;
    }
  }

  // Verificar cuadrados
  for (let num in freq1) {
    const square = Number(num) ** 2;
    if (!(square in freq2)) {
      return false;
    }
    if (freq2[square] !== freq1[num]) {
      return false;
    }
  }

  return true;
}

// Pruebas
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
