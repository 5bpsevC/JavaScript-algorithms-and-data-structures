# **Sliding Window Pattern**

Este patrón implica la creación de una ventana  que puede ser una matriz o un número de una posición a otra.

Dependiendo de una determinada condición, la ventana aumenta o se cierra (y se crea una nueva ventana)

Muy útil para realizar un seguimiento de un subconjunto de datos en una matriz/cadena, etc.

El **Sliding Window Pattern** (patrón de ventana deslizante) es una técnica que se usa para **optimizar la búsqueda de resultados sobre subarrays o subcadenas contiguas**. En lugar de recalcular todo desde cero cada vez, mantenemos un "ventana" de datos y la vamos deslizando sobre el array o string, actualizando el resultado según sea necesario.

**Ventajas:**

- Reduce la complejidad de **O(n \* k)** a **O(n)** cuando se trabaja con subarrays de tamaño fijo `k`.
- Muy útil para problemas como:

  - Suma máxima de subarrays.
  - Longitud máxima de subarrays con ciertas condiciones.
  - Análisis de strings (longest substring, caracteres únicos, etc).

**Cómo funciona:**

1. Calcula un resultado inicial para la primera ventana (los primeros `num` elementos).
2. Desliza la ventana hacia la derecha:

   - Resta el primer elemento que sale de la ventana.
   - Suma el nuevo elemento que entra en la ventana.

3. Actualiza el resultado máximo si es necesario.
4. Repite hasta llegar al final del array.

---

## **Función `maxSubarraySum` en TypeScript**

```ts
function maxSubarraySum(arr: number[], num: number): number | null {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // Calcula la suma inicial de la primera ventana
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Desliza la ventana por el array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Ejemplo de uso
const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result); // 19
```

**Explicación rápida:**

- `arr[i - num]` → elemento que sale de la ventana.
- `arr[i]` → elemento que entra en la ventana.
- `maxSum` → guarda la suma máxima encontrada hasta ahora.

---

## Sliding Window imagínalo como un juego.

**El Juego:** Tienes una fila de números y una "ventana" mágica que solo te deja ver 3 números a la vez. Tu misión es encontrar qué grupo de 3 números seguidos suma más.

**Los Números:** `[2, 6, 9, 2, 1, 8, 5, 6, 3]`

---

### **Paso 1: Mira la primera ventana 👀**

Coloca tu ventana sobre los 3 primeros números.

`[ **2, 6, 9** , 2, 1, 8, 5, 6, 3 ]`

Súmalos: `2 + 6 + 9 = 17`

- **Tu Puntuación Máxima hasta ahora es: 17**

---

### **Paso 2: Desliza la ventana ➡️**

Mueve la ventana un lugar a la derecha.

`[ 2, **6, 9, 2** , 1, 8, 5, 6, 3 ]`

**El truco:** No sumes todo de nuevo. Solo...

1.  Toma la suma anterior: **17**
2.  Réstale el número que dejaste atrás (el **2**): `17 - 2 = 15`
3.  Súmale el número nuevo que entró (el otro **2**): `15 + 2 = 17`

La nueva suma es **17**. ¿Es más grande que tu puntuación máxima (17)? No, es igual. Así que tu máximo sigue siendo **17**.

---

### **Paso 3: Desliza de nuevo ➡️**

Mueve la ventana otra vez.

`[ 2, 6, **9, 2, 1** , 8, 5, 6, 3 ]`

Hacemos lo mismo:

1.  Toma la suma anterior: **17**
2.  Resta el que salió (el **6**): `17 - 6 = 11`
3.  Suma el nuevo (el **1**): `11 + 1 = 12`

La nueva suma es **12**. ¿Es mayor que tu máximo (17)? Para nada. El máximo se queda en **17**.

---

### **Paso 4: ¡Sigue deslizando hasta encontrar un nuevo campeón! 🏆**

Continuas deslizando... hasta que tu ventana llega a estos números:

`[ 2, 6, 9, 2, 1, **8, 5, 6** , 3 ]`

La suma aquí es: `8 + 5 + 6 = 19`

¡Ojo! **19** es MÁS GRANDE que tu puntuación máxima de **17**.

- **¡Nuevo récord! Tu Puntuación Máxima ahora es: 19**

---

### **Paso 5: Termina el juego**

Deslizas una última vez, calculas la suma (`5+6+3=14`), ves que no supera tu récord de 19 y llegas al final.

**El resultado final del juego es la puntuación más alta que encontraste: 19.**

Eso es todo. La "Ventana Deslizante" es solo una forma rápida de calcular la suma de cada grupo sin tener que sumar todos los números cada vez. **Solo restas el que se va y sumas el que llega.** ¡Mucho más fácil!

¡Excelente pregunta! Saber _cuándo_ usar un patrón es tan importante como saber _cómo_ funciona.

Piensa en el patrón de Ventana Deslizante como una herramienta especializada, como si tuvieras unos binoculares para buscar algo en un paisaje. No los usarías para mirar algo en tus pies, sino para escanear una sección a lo lejos.

Aquí están los casos y las pistas clave para saber cuándo usarlo:

---

### **La Regla de Oro**

Usa el patrón de Ventana Deslizante cuando un problema te pida encontrar algo **óptimo** (como el más largo, el más corto, el más grande, el más pequeño) sobre una **subsección CONTIGUA** (elementos seguidos, sin saltos) de un array o un string.

---

### **Pistas Clave en la Descripción del Problema**

Busca estas palabras o ideas en el enunciado:

1.  **El Input es una Estructura Lineal:** El problema te dará un **array**, un **string** o una lista.

    - Ej: `[1, 2, 3, 4, 5, 6]` o `"holamundo"`

2.  **Se Pide Algo sobre un "Sub-Array" o "Sub-String":** La pregunta se enfoca en una porción de esos datos.

    - "Encuentra la **suma máxima** del **sub-array**..."
    - "Encuentra la **sub-cadena más larga**..."
    - "¿Cuál es el **promedio de todos los sub-arrays contiguos**...?"

3.  **La Condición es sobre un Rango Contiguo:** La clave es que los elementos deben estar uno al lado del otro. Si el problema te permitiera escoger elementos salteados, ya no sería una ventana deslizante.

4.  **Hay un Tamaño Fijo o una Condición Dinámica:**
    - **Tamaño Fijo (el caso más fácil):** El problema te dice exactamente el tamaño de la ventana.
      - "Encuentra la suma máxima de todos los sub-arrays de **tamaño 3**."
      - "Calcula el promedio de todos los sub-arrays de **tamaño k**."
    - **Condición Dinámica (un poco más avanzado):** El tamaño de la ventana cambia. Crece y se encoge para cumplir una regla.
      - "Encuentra el sub-array **más corto** cuya suma sea **mayor o igual a 10**." (La ventana se expande hasta que la suma es >= 10, y luego se encoge desde la izquierda para ver si puede ser más corta).
      - "Encuentra la sub-cadena **más larga** con no más de **2 caracteres únicos**." (La ventana se expande mientras tenga <= 2 caracteres únicos. Si aparece un 3ro, se encoge desde la izquierda hasta volver a cumplir la regla).

### **Ejemplos de Problemas Típicos**

| Tipo de Problema                                    | Ejemplo                                                                                                             | ¿Por qué funciona la Ventana Deslizante?                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Suma/Promedio Máximo o Mínimo (Tamaño Fijo)**     | "Dado `[1, 4, 2, 10, 23, 3]`, encuentra la suma máxima de un sub-array de tamaño 3."                                | Buscas un MÁXIMO en un SUB-ARRAY CONTIGUO de TAMAÑO FIJO. Es el caso de libro de texto.                                                 |
| **Sub-cadena más Larga/Corta (Condición Dinámica)** | "Dada la cadena `"abaccc"`, encuentra la longitud de la sub-cadena más larga con no más de 2 caracteres distintos." | Buscas la MÁS LARGA que cumple una condición. La ventana crece y se encoge para mantener esa condición.                                 |
| **Encontrar si Existe Algo (Tamaño Fijo)**          | "Dado un string `s` y otro `p`, encuentra si alguna permutación de `p` existe como sub-cadena en `s`."              | La ventana tendrá el tamaño de `p` y la deslizarás por `s` para ver si los caracteres dentro de la ventana coinciden.                   |
| **Sub-array más Pequeño (Condición Dinámica)**      | "Dado `[2, 3, 1, 2, 4, 3]`, encuentra el sub-array más corto cuya suma sea al menos 7."                             | Buscas el MÁS CORTO que cumple una condición de suma. La ventana se expande para llegar a la suma y se encoge para optimizar el tamaño. |

### **¿Cuándo NO Usarlo?**

- **Cuando los elementos NO necesitan ser contiguos:** Si el problema dice "encuentra cualquier combinación de 3 números que sumen X", los números pueden estar en cualquier parte. Esto no es una ventana.
- **Cuando necesitas ordenar los datos:** El patrón de ventana deslizante depende del orden original de los datos. Si la solución implica ordenar el array, probablemente sea otro tipo de algoritmo.

En resumen, si lees un problema y piensas "ok, necesito revisar todos los grupos de elementos seguidos para encontrar el mejor", es una señal muy fuerte para usar el patrón de **Ventana Deslizante**.

Claro, aquí tienes ejemplos clásicos de problemas que se resuelven con el patrón de Ventana Deslizante en las plataformas de programación más populares.

---

### \#\# **LeetCode**

LeetCode es probablemente la mejor plataforma para practicar este patrón, ya que tiene muchos problemas etiquetados específicamente para ello.

1.  **[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (Medium)**

    - **Descripción:** Encontrar la subcadena más larga que no tenga caracteres repetidos.
    - **Por qué es Ventana Deslizante:** Este es un ejemplo clásico de **ventana de tamaño dinámico**. La ventana se expande hacia la derecha para incluir nuevos caracteres. Si se encuentra un carácter repetido, la ventana se encoge desde la izquierda hasta que la repetición desaparece. El objetivo es encontrar el tamaño máximo que alcanzó la ventana.

2.  **[Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) (Medium)**

    - **Descripción:** Encontrar la longitud del sub-array contiguo más corto cuya suma sea mayor o igual a un valor objetivo.
    - **Por qué es Ventana Deslizante:** Otro caso de **ventana dinámica**. Expandes la ventana sumando elementos hasta que superas el objetivo. Luego, la encoges desde la izquierda, restando elementos, para encontrar el tamaño mínimo posible que todavía cumple la condición.

3.  **[Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) (Easy)**

    - **Descripción:** Dado un array y un número `k`, encontrar el promedio máximo de todos los sub-arrays contiguos de tamaño `k`.
    - **Por qué es Ventana Deslizante:** Este es el ejemplo perfecto de una **ventana de tamaño fijo**. La ventana siempre tiene tamaño `k`. Calculas la suma de la primera ventana y luego la deslizas, restando el elemento que sale y sumando el que entra, manteniendo un registro de la suma máxima encontrada.

---

### \#\# **HackerRank**

HackerRank integra estos problemas a menudo dentro de su "Interview Preparation Kit".

1.  **[Subarray Division](https://www.hackerrank.com/challenges/the-birthday-bar/problem) (Easy)**

    - **Descripción:** Dada una barra de chocolate con números, encontrar cuántos segmentos contiguos de un tamaño `m` suman un total de `d`.
    - **Por qué es Ventana Deslizante:** Es un problema sencillo de **ventana de tamaño fijo**. El tamaño de la ventana es `m`. Deslizas la ventana a lo largo del array y cuentas cada vez que la suma de los elementos dentro de ella es igual a `d`.

2.  **[Max Min](https://www.hackerrank.com/challenges/angry-children/problem) (Medium)**

    - **Descripción:** Dado un array y un entero `k`, elegir un sub-array de tamaño `k` tal que la diferencia entre su elemento máximo y mínimo sea la menor posible.
    - **Por qué es Ventana Deslizante:** Aunque está en la sección de algoritmos "Greedy", la solución más eficiente es **ordenar el array primero** y luego usar una **ventana de tamaño fijo** `k`. Como el array está ordenado, el mínimo de la ventana siempre será el primer elemento y el máximo el último. Simplemente deslizas la ventana y buscas la diferencia `arr[i+k-1] - arr[i]` más pequeña.

---

### \#\# **CodeWars**

En CodeWars, los problemas (llamados "kata") a menudo tienen nombres más creativos, pero los conceptos son los mismos.

1.  **[Maximum Subarray Sum](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c) (5 kyu)**

    - **Descripción:** Encontrar la suma máxima de un sub-array contiguo.
    - **Nota importante:** La versión más famosa de este problema (con números positivos y negativos) se resuelve de forma óptima con el "Algoritmo de Kadane". Sin embargo, la variante donde se pide la suma máxima de un **sub-array de tamaño fijo `k`** es un problema puro de Ventana Deslizante.

2.  **[Longest Substring With Distinct Characters](https://www.google.com/search?q=https://www.codewars.com/kata/58846d50f54f021d79000024) (4 kyu)**

    - **Descripción:** Esencialmente es el mismo problema que el \#1 de LeetCode. Se pide devolver la subcadena más larga con todos los caracteres distintos.
    - **Por qué es Ventana Deslizante:** Es una implementación directa del patrón de **ventana dinámica**, donde se usan estructuras de datos (como un Set o un Map) para llevar la cuenta de los caracteres únicos dentro de la ventana actual.

Practicar con estos ejercicios te dará una base muy sólida para reconocer y aplicar el patrón de Ventana Deslizante rápidamente.
