### Plan de estudio: De Codewars a LeetCode y de básico a DSA intermedio

**Duración total**: 4 meses (16 semanas), dividido en tres fases:
- **Fase 1 (2 meses)**: Fundamentos en Codewars (8kyu a 6kyu), conceptos básicos de DSA (iteración, conteo).
- **Fase 2 (1 mes)**: Transición a LeetCode ("Easy") y DSA básico (arrays, objetos, búsqueda).
- **Fase 3 (1 mes)**: LeetCode ("Medium") y DSA intermedio (listas enlazadas, árboles, recursión).

**Estructura general**:
- **Tiempo diario**: 30-60 minutos (aumenta progresivamente), usando técnica Pomodoro (25 minutos de trabajo, 5 de descanso).
- **Días por semana**: 6 días (lunes a sábado), domingo de descanso o repaso ligero.
- **Método de resolución**: Usa los 4 pasos (entender, diseñar, codificar, probar). Intenta sin IA durante 15-20 minutos.
- **Registro**: Usa un cuaderno para anotar:
  - Problema resuelto.
  - Qué intentaste.
  - Qué aprendiste (por ejemplo, "Usé `slice` para cadenas").
  - Errores y cómo los corregiste.
- **Enfoque**:
  - Trabaja en un lugar sin distracciones (apaga notificaciones, usa música instrumental si ayuda).
  - Celebra pequeñas victorias (por ejemplo, resolver un problema sin IA).
  - Si te distraes, anota qué te distrajo y vuelve al problema.

**Recursos**:
- **Codewars**: Filtra por "JavaScript" y nivel (8kyu, 7kyu, 6kyu).
- **LeetCode**: Usa la sección "Problems" (filtra por "Easy" o "Medium") y "Explore" (temas como "Array", "Hash Table").
- **MDN Web Docs**: Para sintaxis de JavaScript (arrays, cadenas, bucles).
- **freeCodeCamp**: Curso "JavaScript Algorithms and Data Structures" (gratis).
- **"Eloquent JavaScript"**: Capítulos 4-6 para fundamentos y DSA básico.
- **YouTube**: Canales como "NeetCode" o "Tech With Tim" para explicaciones.

---

### Calendario detallado (4 meses)

#### Mes 1: Fundamentos básicos en Codewars (8kyu y 7kyu)
**Objetivo**: Dominar fundamentos de JavaScript (condicionales, bucles, cadenas, arrays) y resolver problemas de 8kyu y 7kyu con confianza. Introducir conceptos básicos de DSA (iteración, conteo).

**Tiempo diario**: 30 minutos (1 sesión Pomodoro: 25 minutos de trabajo, 5 de descanso).

**Conceptos de DSA**:
- Iteración (`for`, `for...of`, `map`).
- Condicionales (`if`, ternario).
- Manipulación de cadenas (`slice`, `split`).
- Conteo básico (usar objetos).

**Semana 1**:
- **Lunes**: "Even or Odd" (8kyu)
  - Enunciado: Devuelve `"Even"` si el número es par, `"Odd"` si es impar.
  - Ejemplo: `evenOrOdd(4) → "Even"`.
  - Código: `return number % 2 === 0 ? "Even" : "Odd";`
- **Martes**: "Remove First and Last Character" (8kyu)
  - Enunciado: Elimina el primer y último carácter de una cadena.
  - Ejemplo: `removeChar("hello") → "ell"`.
  - Código: `return str.slice(1, -1);`
- **Miércoles**: "Sum of Positive" (8kyu)
  - Enunciado: Suma los números positivos de un array.
  - Ejemplo: `sumPositive([1, -2, 3]) → 4`.
  - Código: Usa un bucle `for...of` con `if (num > 0)`.
- **Jueves**: "Opposite Number" (8kyu)
  - Enunciado: Devuelve el opuesto de un número.
  - Ejemplo: `opposite(5) → -5`.
  - Código: `return -number;`
- **Viernes**: "Convert Boolean to String" (8kyu)
  - Enunciado: Convierte un booleano a `"Yes"` o `"No"`.
  - Ejemplo: `boolToWord(true) → "Yes"`.
  - Código: `return bool ? "Yes" : "No";`
- **Sábado**: Repaso
  - Reintenta un problema (por ejemplo, "Even or Odd") sin mirar la solución.
  - Lee MDN sobre el operador módulo (`%`) o `slice`.

**Semana 2**:
- **Lunes**: "Multiply" (8kyu)
  - Enunciado: Multiplica dos números.
  - Ejemplo: `multiply(2, 3) → 6`.
- **Martes**: "Return Negative" (8kyu)
  - Enunciado: Convierte un número en negativo (o déjalo si ya lo es).
  - Ejemplo: `makeNegative(5) → -5`.
- **Miércoles**: "Vowel Count" (7kyu)
  - Enunciado: Cuenta las vocales en una cadena.
  - Ejemplo: `getCount("hello") → 2`.
  - Código: Usa un bucle y verifica si el carácter está en `"aeiou"`.
- **Jueves**: "Square Every Digit" (7kyu)
  - Enunciado: Eleva al cuadrado cada dígito de un número.
  - Ejemplo: `squareDigits(9119) → 811181`.
- **Viernes**: "Highest and Lowest" (7kyu)
  - Enunciado: Encuentra el mayor y menor número en una cadena.
  - Ejemplo: `highAndLow("1 2 3") → "3 1"`.
- **Sábado**: Repaso
  - Reintenta "Vowel Count". Lee MDN sobre `split` y `join`.

**Semana 3**:
- **Lunes**: "Disemvowel Trolls" (7kyu)
  - Enunciado: Elimina vocales de una cadena.
  - Ejemplo: `disemvowel("hello") → "hll"`.
- **Martes**: "Is this a triangle?" (7kyu)
  - Enunciado: Verifica si tres lados forman un triángulo.
  - Ejemplo: `isTriangle(3, 4, 5) → true`.
- **Miércoles**: "You're a square!" (7kyu)
  - Enunciado: Verifica si un número es un cuadrado perfecto.
  - Ejemplo: `isSquare(25) → true`.
- **Jueves**: "Mumbling" (7kyu)
  - Enunciado: Transforma una cadena (por ejemplo, "abcd" → "A-Bb-Ccc-Dddd").
- **Viernes**: "List Filtering" (7kyu)
  - Enunciado: Filtra números de una lista con valores mixtos.
  - Ejemplo: `filterList([1, "a", 2]) → [1, 2]`.
- **Sábado**: Repaso
  - Reintenta "Square Every Digit". Lee freeCodeCamp sobre bucles.

**Semana 4**:
- **Lunes**: "Shortest Word" (7kyu)
  - Enunciado: Encuentra la longitud de la palabra más corta en una cadena.
  - Ejemplo: `findShort("bitcoin take over") → 4`.
- **Martes**: "Descending Order" (7kyu)
  - Enunciado: Ordena los dígitos de un número en orden descendente.
  - Ejemplo: `descendingOrder(123) → 321`.
- **Miércoles**: "Exes and Ohs" (7kyu)
  - Enunciado: Verifica si una cadena tiene el mismo número de "x" y "o".
  - Ejemplo: `XO("xxoo") → true`.
- **Jueves**: "Get the Middle Character" (7kyu)
  - Enunciado: Devuelve el carácter (o caracteres) del medio de una cadena.
  - Ejemplo: `getMiddle("test") → "es"`.
- **Viernes**: Repaso
  - Reintenta "Highest and Lowest". Explora `map` en MDN.
- **Sábado**: Práctica libre
  - Elige un problema 7kyu nuevo (filtra por "JavaScript", "Fundamentals").
  - Anota en tu cuaderno qué patrón aprendiste (por ejemplo, iteración).

**Evaluación al final del mes**:
- Deberías resolver problemas de 7kyu en 15-20 minutos con mínima ayuda.
- Si te cuesta, repite los problemas de la semana 3-4 antes de avanzar.

---

#### Mes 2: Transición a 6kyu y conceptos básicos de DSA
**Objetivo**: Resolver problemas de 6kyu en Codewars y consolidar fundamentos. Introducir conceptos básicos de DSA (arrays, objetos como hash maps, búsqueda lineal).

**Tiempo diario**: 45 minutos (2 sesiones Pomodoro: 25 minutos + 20 minutos).

**Conceptos de DSA**:
- Arrays: Métodos avanzados (`map`, `filter`, `reduce`).
- Objetos: Usar como hash maps para conteo.
- Búsqueda lineal: Recorrer arrays para encontrar elementos.
- Manipulación avanzada de datos.

**Semana 5**:
- **Lunes**: "Multiples of 3 or 5" (6kyu)
  - Enunciado: Suma los múltiplos de 3 o 5 menores que un número.
  - Ejemplo: `solution(10) → 23`.
- **Martes**: "Find the Unique Number" (6kyu)
  - Enunciado: Encuentra el número único en un array.
  - Ejemplo: `findUniq([1, 1, 2]) → 2`.
- **Miércoles**: "Count Characters in Your String" (6kyu)
  - Enunciado: Cuenta la frecuencia de cada carácter.
  - Ejemplo: `count("abba") → {a: 2, b: 2}`.
- **Jueves**: "Who Likes It?" (6kyu)
  - Enunciado: Devuelve un mensaje según los nombres en un array.
  - Ejemplo: `likes(["Peter", "Paul"]) → "Peter and Paul like this"`.
- **Viernes**: "Stop gninnipS My sdroW!" (6kyu)
  - Enunciado: Invierte palabras de 5 o más letras.
  - Ejemplo: `spinWords("Hey warriors") → "Hey sroirraw"`.
- **Sábado**: Repaso
  - Reintenta "Count Characters". Lee MDN sobre objetos.

**Semana 6**:
- **Lunes**: "Unique in Order" (6kyu)
  - Enunciado: Devuelve elementos únicos en orden de un iterable.
  - Ejemplo: `uniqueInOrder("AABBC") → ["A", "B", "C"]`.
- **Martes**: "Equal Sides of an Array" (6kyu)
  - Enunciado: Encuentra el índice donde la suma de ambos lados es igual.
  - Ejemplo: `findEvenIndex([1, 2, 3, 4, 3, 2, 1]) → 3`.
- **Miércoles**: "Bit Counting" (6kyu)
  - Enunciado: Cuenta los 1s en la representación binaria de un número.
  - Ejemplo: `countBits(7) → 3` (7 en binario es 111).
- **Jueves**: "Create Phone Number" (6kyu)
  - Enunciado: Formatea un array de 10 dígitos como número de teléfono.
  - Ejemplo: `createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) → "(123) 456-7890"`.
- **Viernes**: Repaso
  - Reintenta "Multiples of 3 or 5". Lee freeCodeCamp sobre `reduce`.
- **Sábado**: Práctica libre
  - Elige un problema 6kyu nuevo.

**Semana 7**:
- **Lunes**: "Find the Odd Int" (6kyu)
  - Enunciado: Encuentra el número que aparece un número impar de veces.
  - Ejemplo: `findOdd([7]) → 7`.
- **Martes**: "Tribonacci Sequence" (6kyu)
  - Enunciado: Genera una secuencia Tribonacci.
  - Ejemplo: `tribonacci([1, 1, 1], 10) → [1, 1, 1, 3, 5, 9, 17, 31, 56, 104]`.
- **Miércoles**: "Your Order, Please" (6kyu)
  - Enunciado: Ordena palabras según el número en cada una.
  - Ejemplo: `order("is2 Thi1s") → "Thi1s is2"`.
- **Jueves**: "Mexican Wave" (6kyu)
  - Enunciado: Crea un "ola" capitalizando cada letra de una cadena.
  - Ejemplo: `wave("hello") → ["Hello", "hEllo", "heLlo", "helLo", "hellO"]`.
- **Viernes**: Repaso
  - Reintenta "Find the Unique Number". Lee sobre búsqueda lineal.
- **Sábado**: Estudio DSA
  - Lee freeCodeCamp sobre `map`, `filter`, `reduce`.

**Semana 8**:
- **Lunes**: "Replace With Alphabet Position" (6kyu)
  - Enunciado: Reemplaza cada letra con su posición en el alfabeto.
  - Ejemplo: `alphabetPosition("The") → "20 8 5"`.
- **Martes**: "Persistent Bugger" (6kyu)
  - Enunciado: Multiplica los dígitos de un número hasta obtener uno solo.
  - Ejemplo: `persistence(39) → 3` (3*9 = 27, 2*7 = 14, 1*4 = 4).
- **Miércoles**: "Duplicate Encoder" (6kyu)
  - Enunciado: Convierte una cadena en paréntesis según repeticiones.
  - Ejemplo: `duplicateEncode("recede") → "()()()"`.
- **Jueves**: Repaso
  - Reintenta "Count Characters". Practica con objetos como hash maps.
- **Viernes**: Práctica libre
  - Elige un problema 6kyu nuevo.
- **Sábado**: Estudio DSA
  - Implementa búsqueda lineal:
    ```javascript
    function linearSearch(arr, target) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
      }
      return -1;
    }
    ```

**Evaluación al final del mes**:
- Deberías resolver problemas de 6kyu en 15-20 minutos.
- Si no, repite la semana 7-8 antes de pasar al Mes 3.

---

#### Mes 3: Transición a LeetCode y DSA básico
**Objetivo**: Resolver problemas "Easy" en LeetCode y 6kyu en Codewars. Aprender DSA básico (arrays, objetos, búsqueda, pilas, colas).

**Tiempo diario**: 45 minutos (2 sesiones Pomodoro: 25 minutos + 20 minutos).

**Conceptos de DSA**:
- Arrays: Suma de subarrays, métodos avanzados.
- Objetos: Hash maps para conteo y búsqueda.
- Búsqueda: Lineal y binaria.
- Pilas y colas: Usar arrays (`push`, `pop`, `shift`).

**Semana 9**:
- **Lunes**: LeetCode "Two Sum" (Easy)
  - Enunciado: Encuentra dos números en un array que sumen un target.
  - Ejemplo: `twoSum([2, 7, 11], 9) → [0, 1]`.
- **Martes**: LeetCode "Reverse String" (Easy)
  - Enunciado: Invierte una cadena.
  - Ejemplo: `reverseString(["h", "e", "l", "l", "o"]) → ["o", "l", "l", "e", "h"]`.
- **Miércoles**: Codewars "Valid Braces" (6kyu)
  - Enunciado: Verifica si una cadena de paréntesis es válida.
  - Ejemplo: `validBraces("()[]") → true`.
- **Jueves**: LeetCode "Contains Duplicate" (Easy)
  - Enunciado: Verifica si un array tiene duplicados.
  - Ejemplo: `containsDuplicate([1, 2, 3, 1]) → true`.
- **Viernes**: Repaso
  - Reintenta "Two Sum". Lee sobre hash maps.
- **Sábado**: Estudio DSA
  - Implementa una pila con arrays:
    ```javascript
    class Stack {
      constructor() {
        this.items = [];
      }
      push(item) { this.items.push(item); }
      pop() { return this.items.pop(); }
    }
    ```

**Semana 10**:
- **Lunes**: LeetCode "Valid Anagram" (Easy)
  - Enunciado: Verifica si dos cadenas son anagramas.
  - Ejemplo: `isAnagram("rat", "tar") → true`.
- **Martes**: Codewars "The Supermarket Queue" (6kyu)
  - Enunciado: Calcula el tiempo total en una cola.
  - Ejemplo: `queueTime([5, 3, 4], 1) → 12`.
- **Miércoles**: LeetCode "Palindrome Number" (Easy)
  - Enunciado: Verifica si un número es palíndromo.
  - Ejemplo: `isPalindrome(121) → true`.
- **Jueves**: LeetCode "First Unique Character in a String" (Easy)
  - Enunciado: Encuentra el primer carácter no repetido.
  - Ejemplo: `firstUniqChar("leetcode") → 0`.
- **Viernes**: Repaso
  - Reintenta "Valid Anagram". Lee sobre búsqueda lineal.
- **Sábado**: Estudio DSA
  - Lee freeCodeCamp sobre `reduce`.

**Semana 11**:
- **Lunes**: LeetCode "Majority Element" (Easy)
  - Enunciado: Encuentra el elemento que aparece más de n/2 veces.
  - Ejemplo: `majorityElement([2, 2, 1, 1, 2]) → 2`.
- **Martes**: Codewars "Find the Parity Outlier" (6kyu)
  - Enunciado: Encuentra el número que no sigue el patrón (par/impar).
  - Ejemplo: `findOutlier([2, 4, 0, 7]) → 7`.
- **Miércoles**: LeetCode "Move Zeroes" (Easy)
  - Enunciado: Mueve todos los ceros al final de un array.
  - Ejemplo: `moveZeroes([0, 1, 0, 3]) → [1, 3, 0, 0]`.
- **Jueves**: LeetCode "Intersection of Two Arrays" (Easy)
  - Enunciado: Encuentra la intersección de dos arrays.
  - Ejemplo: `intersection([1, 2, 2], [2, 2]) → [2]`.
- **Viernes**: Repaso
  - Reintenta "Move Zeroes". Lee sobre búsqueda binaria.
- **Sábado**: Estudio DSA
  - Implementa búsqueda binaria:
    ```javascript
    function binarySearch(arr, target) {
      let left = 0, right = arr.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return -1;
    }
    ```

**Semana 12**:
- **Lunes**: LeetCode "Plus One" (Easy)
  - Enunciado: Suma 1 a un número representado como array de dígitos.
  - Ejemplo: `plusOne([1, 2, 3]) → [1, 2, 4]`.
- **Martes**: Codewars "Split Strings" (6kyu)
  - Enunciado: Divide una cadena en pares de caracteres.
  - Ejemplo: `solution("abc") → ["ab", "c_"]`.
- **Miércoles**: LeetCode "Single Number" (Easy)
  - Enunciado: Encuentra el número que aparece una vez en un array.
  - Ejemplo: `singleNumber([2, 2, 1]) → 1`.
- **Jueves**: Repaso
  - Reintenta "Valid Braces". Lee sobre pilas.
- **Viernes**: Práctica libre
  - Elige un problema "Easy" de LeetCode (tema "Array").
- **Sábado**: Estudio DSA
  - Lee "Eloquent JavaScript" (capítulo 4) sobre arrays.

**Evaluación al final del mes**:
- Deberías resolver problemas "Easy" de LeetCode en 20-30 minutos.
- Si no, dedica 1-2 semanas extra a problemas 6kyu y "Easy".

---

#### Mes 4: LeetCode Medium y DSA intermedio
**Objetivo**: Resolver problemas "Medium" en LeetCode y 5kyu en Codewars. Aprender DSA intermedio (listas enlazadas, árboles, recursión, ventana deslizante).

**Tiempo diario**: 60 minutos (2-3 sesiones Pomodoro).

**Conceptos de DSA**:
- Listas enlazadas: Crear y recorrer.
- Árboles: Recorridos básicos (recursivo o iterativo).
- Recursión: Casos base y recursivos.
- Ventana deslizante: Para problemas de subarrays o subcadenas.

**Semana 13**:
- **Lunes**: LeetCode "Add Two Numbers" (Medium)
  - Enunciado: Suma dos números como listas enlazadas.
  - Ejemplo: `2->4 + 5->6 → 7->0->1`.
- **Martes**: Codewars "Valid Parentheses" (5kyu)
  - Enunciado: Verifica si una cadena de paréntesis es válida.
  - Ejemplo: `validParentheses("()") → true`.
- **Miércoles**: LeetCode "Longest Substring Without Repeating Characters" (Medium)
  - Enunciado: Encuentra la subcadena más larga sin caracteres repetidos.
  - Ejemplo: `lengthOfLongestSubstring("abcabcbb") → 3`.
- **Jueves**: LeetCode "Group Anagrams" (Medium)
  - Enunciado: Agrupa anagramas en un array de cadenas.
  - Ejemplo: `groupAnagrams(["eat", "tea", "ate"]) → [["eat", "tea", "ate"]]`.
- **Viernes**: Repaso
  - Reintenta "Add Two Numbers". Lee sobre listas enlazadas.
- **Sábado**: Estudio DSA
  - Implementa una lista enlazada:
    ```javascript
    class ListNode {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }
    ```

**Semana 14**:
- **Lunes**: LeetCode "Top K Frequent Elements" (Medium)
  - Enunciado: Encuentra los k elementos más frecuentes en un array.
  - Ejemplo: `topKFrequent([1, 1, 2], 2) → [1, 2]`.
- **Martes**: Codewars "Moving Zeros To The End" (5kyu)
  - Enunciado: Mueve ceros al final de un array.
  - Ejemplo: `moveZeros([false, 1, 0, 2, 0]) → [false, 1, 2, 0, 0]`.
- **Miércoles**: LeetCode "3Sum" (Medium)
  - Enunciado: Encuentra todas las tripletas que sumen 0.
  - Ejemplo: `threeSum([-1, 0, 1, 2, -1]) → [[-1, -1, 2], [-1, 0, 1]]`.
- **Jueves**: LeetCode "Reverse Linked List" (Easy, pero útil)
  - Enunciado: Invierte una lista enlazada.
  - Ejemplo: `1->2->3 → 3->2->1`.
- **Viernes**: Repaso
  - Reintenta "Group Anagrams". Lee sobre ventana deslizante.
- **Sábado**: Estudio DSA
  - Lee "Grokking Algorithms" (capítulo sobre recursión).

**Semana 15**:
- **Lunes**: LeetCode "Maximum Subarray" (Medium)
  - Enunciado: Encuentra el subarray con la suma máxima.
  - Ejemplo: `maxSubArray([-2, 1, -3, 4, -1]) → 4`.
- **Martes**: Codewars "Rot13" (5kyu)
  - Enunciado: Aplica el cifrado ROT13 a una cadena.
  - Ejemplo: `rot13("test") → "grfg"`.
- **Miércoles**: LeetCode "Product of Array Except Self" (Medium)
  - Enunciado: Devuelve un array con el producto de todos los elementos excepto el actual.
  - Ejemplo: `productExceptSelf([1, 2, 3, 4]) → [24, 12, 8, 6]`.
- **Jueves**: LeetCode "Merge Two Sorted Lists" (Easy, pero útil)
  - Enunciado: Combina dos listas enlazadas ordenadas.
  - Ejemplo: `1->3 + 2->4 → 1->2->3->4`.
- **Viernes**: Repaso
  - Reintenta "Longest Substring". Lee sobre árboles binarios.
- **Sábado**: Estudio DSA
  - Implementa factorial recursivo:
    ```javascript
    function factorial(n) {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    }
    ```

**Semana 16**:
- **Lunes**: LeetCode "Longest Palindromic Substring" (Medium)
  - Enunciado: Encuentra la subcadena palindrómica más larga.
  - Ejemplo: `longestPalindrome("babad") → "bab"`.
- **Martes**: Codewars "Human Readable Time" (5kyu)
  - Enunciado: Convierte segundos a formato HH:MM:SS.
  - Ejemplo: `makeReadable(3600) → "01:00:00"`.
- **Miércoles**: LeetCode "Validate Binary Search Tree" (Medium)
  - Enunciado: Verifica si un árbol binario es válido.
- **Jueves**: Repaso
  - Reintenta "3Sum". Lee sobre recursión.
- **Viernes**: Práctica libre
  - Elige un problema "Medium" de LeetCode (tema "Tree" o "Linked List").
- **Sábado**: Evaluación final
  - Reintenta un problema "Medium". Escribe un resumen de lo aprendido en los 4 meses.

**Evaluación al final del mes**:
- Deberías resolver problemas "Medium" en 30-40 minutos.
- Si no, dedica 1-2 semanas extra a problemas "Easy" y 5kyu.

---

Dado que quieres mejorar tu lógica, este plan empieza con problemas accesibles en Codewars (8kyu) para construir confianza, te lleva a LeetCode para prepararte para entrevistas, y te introduce gradualmente a DSA sin abrumarte. El método de 4 pasos (entender, diseñar, codificar, probar) está integrado en cada fase para ayudarte a desarrollar lógica y reducir la dependencia de la IA. 

**Siguientes pasos**:
- **Empieza el lunes** con "Even or Odd" (Mes 1, Semana 1). Sigue el calendario y anota tu progreso.
- Si un problema te resulta difícil, aplica los 4 pasos y dime dónde te trabaste para explicártelo.
- Al final de cada semana, revisa tu cuaderno y dime cómo te fue para ajustar el plan si es necesario.

## Plan de Estudio de DSA - Tabla Resumen

| Fase    | Meses | Ejercicios por día      | Tiempo diario  | Plataforma            | Nivel           |
|---------|-------|-------------------------|----------------|-----------------------|-----------------|
| Fase 1  | 1-2   | 1-2 problemas           | 30 minutos     | Codewars              | 8kyu a 6kyu     |
| Fase 2  | 3     | 1-2 problemas           | 45 minutos     | Codewars + LeetCode   | 6kyu, "Easy"    |
| Fase 3  | 4+    | 1 principal + 1 opcional| 60 minutos     | Codewars + LeetCode   | 5kyu, "Medium"  |

