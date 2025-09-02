function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]): void {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0]! % 2 !== 0) {
      result.push(helperInput[0]!);
    }

    // Llamada recursiva con el array reducido
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// ✅ Ejemplo de uso
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [1, 3, 5, 7, 9]
