// String Repeat
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// Tengo una función que recibe dos parametros: un número positivo y un string
// La función debe retornar el string repetidas veces según el número positivo que reciba

// ¿Qué recibe la función? (n y s).
// ¿Qué devuelve? (Una cadena repetida n veces).
// Ejemplo: n = 2, s = "a" → "aa"

// Crear una cadena vacía llamada resultado
// Para i desde 0 hasta n-1:
//   Agregar s a resultado
// Devolver resultado

function repeatStr(n: number, s: string): string {
  let result: string = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}


