// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// Escriba una función que tome un array de números (enteros para las pruebas) y un número objetivo.
// Debería encontrar dos elementos diferentes en el array que, al sumarse, den el valor objetivo.
// Los índices de estos elementos deberían devolverse en una tupla o lista

function twoSum(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    // Guarda el índice actual del número
    numMap[numbers[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));