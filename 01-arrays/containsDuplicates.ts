// Dado un array de enteros nums, devuelve true si hay al menos un valor que aparece dos o más veces, y false si todos los elementos son únicos.

// Queremos verificar si algún número aparece más de una vez.
// Usaremos un hash set (una estructura que almacena elementos únicos) para rastrear los números que hemos visto.
// Si encontramos un número que ya está en el set, hay un duplicado.

// Pseudocódigo:
// Crear un hash set vacío
// Para cada número en nums:
//   Si el número ya está en el hash set:
//     Devolver true (hay duplicado)
//   Agregar el número al hash set
// Devolver false (no hay duplicados)

// Análisis de DSA:
// Estructura de datos: Hash Set (Set en JavaScript/TypeScript).
// Permite inserciones y búsquedas en tiempo O(1) en promedio.
// Almacena elementos únicos, ideal para detectar duplicados.
// Complejidad:
// Tiempo: O(n), donde n es la longitud de nums, ya que recorremos el array una vez.
// Espacio: O(n), para almacenar hasta n elementos en el hash set.
// Alternativa: Ordenar el array (O(n log n)) y comparar adyacentes (nums[i] === nums[i+1]). Menos eficiente, pero también válido.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums: number[]): boolean {
  const map: { [key: number]: boolean } = {};
  for (const num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = true;
  }
  return false;
}

