// Remove First and Last Character
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// removeChar('eloquent') // -> 'loquen'
// removeChar('country')  // -> 'ountr'
// removeChar('person')   // -> 'erso'
// removeChar('ab')       // -> '' (empty string)
// removeChar('xyz')      // -> 'y'

// ¡Qué recibe la función? "s" (string)
// ¿Qué devuelve la función? un string sin el primer y último caracter
// Ejemplo: xyz -> "y"

// Crear una cadena vacía llamada result
// Para cada índice desde 0 hasta str.length - 1:
//   Si el índice no es 0 ni str.length - 1:
//     Agregar el carácter en ese índice a result
// Devolver result

function removeChar(str: string): string {
  let result = "";

  for (let index = 0; index < str.length; index++) {
    if (index !== 0 && index !== str.length - 1) {
      result += str[index];
    }
  }

  return result;
}

console.log(removeChar("eloquent"));
