// Escriba una función llamada sumZero  que acepte un array ordenado de enteros.
// La función debe encontrar el primer par cuya suma sea 0.
// Devuelva un array que incluya ambos valores cuya suma sea cero o indefinido si no existe un par.

const sumZero = (arr: number[]) => {
  // Inicializamos los punteros
  let left = 0;
  let right = arr.length - 1;

  // Recorremos el array mientras left < right
  while (left < right) {
    let sum = arr[left]! + arr[right]!;

    // Si la suma es 0, devolvemos el par
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // Si la suma es mayor que 0, movemos el puntero derecho
    else if (sum > 0) {
      right--;
    }
    // Si la suma es menor que 0, movemos el puntero izquierdo
    else {
      left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])); // [-4, 4]
console.log(sumZero([-3, -2, -1, 0, 1, 2])); // [-2, 2]
console.log(sumZero([1, 2, 3])); // undefined
