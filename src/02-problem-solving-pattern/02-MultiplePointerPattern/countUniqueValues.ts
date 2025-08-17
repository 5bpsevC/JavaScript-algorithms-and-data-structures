function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;

  arr.sort((a, b) => a - b);

  let i = 0;
  let current = arr[0]; // valor actual seguro

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== current) {
      i++;
      current = arr[j]; // actualizamos el valor único
    }
  }

  return i + 1;
}

function countUniqueValuesFrequency(arr: number[]): number {
  const freq: { [key: number]: number } = {};
  let count = 0;

  for (let num of arr) {
    if (freq[num]) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
      count++;
    }
  }

  return count;
}

console.log("====== POINTER ======");
console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1, 1])); // 4
console.log(countUniqueValues([10, 20, 10, 30, 20])); // 3

console.log("====== CONTADOR DE FRECUENCIA ======");
console.log(countUniqueValuesFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValuesFrequency([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValuesFrequency([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValuesFrequency([])); // 0
console.log(countUniqueValuesFrequency([-2, -1, -1, 0, 1, 1])); // 4
console.log(countUniqueValuesFrequency([10, 20, 10, 30, 20])); // 3
