function collectOddValues(arr: number[]): number[] {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr; // Caso base
  }

  if (arr[0]! % 2 !== 0) {
    newArr.push(arr[0]!);
  }

  // Concatenar el resultado con el resto del array recursivamente
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

// ✅ Ejemplo de uso
console.log(collectOddValues([1, 2, 3, 4, 5]));
// Output: [1, 3, 5]
