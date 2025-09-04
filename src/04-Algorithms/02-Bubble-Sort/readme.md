# Algoritmos de Ordenamiento: Fundamentos

Ordenar es el proceso fundamental de reorganizar una colección de elementos (como números en un array o nombres en una lista) para que sigan un criterio específico. Es una de las tareas más comunes en la programación.

**¿Por qué es importante aprender sobre algoritmos de ordenamiento?**

- **Es una tarea universal:** Te encontrarás con la necesidad de ordenar datos constantemente.
- **Diversidad de soluciones:** Existen muchos algoritmos, cada uno con **ventajas y desventajas** según el contexto. Conocerlos te permite elegir el más adecuado.
- **Comprensión profunda:** Entender cómo funcionan te ayuda a manejar casos especiales y optimizar tu código.

---

## El Método `sort()` en JavaScript

Antes de implementar nuestros propios algoritmos, es útil saber que JavaScript ya tiene un método incorporado: `Array.prototype.sort()`.

Este método puede recibir una **función de comparación** opcional para indicarle cómo ordenar los elementos. La función toma dos elementos, `a` y `b`, y debe devolver un valor numérico:

- **Si devuelve un número negativo:** `a` se ordena antes que `b`.
- **Si devuelve un número positivo:** `b` se ordena antes que `a`.
- **Si devuelve 0:** El orden entre `a` y `b` no cambia.

### Ejemplos

1.  **Ordenar números de menor a mayor:**

    ```javascript
    function numberCompare(num1, num2) {
      return num1 - num2;
    }

    const numeros = [6, 4, 15, 10];
    numeros.sort(numberCompare);
    // Resultado: [4, 6, 10, 15]
    ```

2.  **Ordenar strings por su longitud:**

    ```javascript
    function compareByLen(str1, str2) {
      return str1.length - str2.length;
    }

    const palabras = ["Steele", "Colt", "Data Structures", "Algorithms"];
    palabras.sort(compareByLen);
    // Resultado: ["Colt", "Steele", "Algorithms", "Data Structures"]
    ```

---

## ¡Antes de Ordenar: La Función de Intercambio (Swap)\!

Muchos algoritmos de ordenamiento requieren intercambiar la posición de dos elementos en un array. Esta es una operación fundamental.

### Implementación en ES5

```javascript
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

### Implementación Moderna en ES2015 (con Destructuring)

Esta versión es más concisa y legible.

```javascript
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

---

## Algoritmos de Ordenamiento Fundamentales

A continuación se describen tres de los algoritmos de ordenamiento más básicos, ideales para entender los conceptos clave.

### 1\. Bubble Sort (Ordenamiento de Burbuja)

Este es un algoritmo simple donde los valores más grandes "burbujean" (suben) hacia su posición final en cada pasada, como burbujas en el agua.

**Visualización del Proceso:**

Partimos del array: `[5, 3, 4, 1, 2]`

1.  **Primera Pasada:** Compara pares adyacentes y el más grande se mueve a la derecha.

    - `[3, 5, 4, 1, 2]`
    - `[3, 4, 5, 1, 2]`
    - `[3, 4, 1, 5, 2]`
    - `[3, 4, 1, 2, 5]` -\> **El 5 ya está en su posición final.**

2.  **Siguientes Pasadas:** El proceso se repite, reduciendo el rango de comparación en uno cada vez, hasta que todo el array está ordenado.

#### Pseudocódigo de BubbleSort

1.  Inicia un bucle `i` que recorra el array desde el final hacia el principio.
2.  Dentro, inicia un bucle anidado `j` que vaya desde el principio hasta `i - 1`.
3.  Si `arr[j]` es mayor que `arr[j+1]`, intercámbialos.
4.  Al finalizar los bucles, devuelve el array ordenado.

### 2\. Selection Sort (Ordenamiento por Selección)

Similar a Bubble Sort, pero en lugar de mover los elementos más grandes, este algoritmo "selecciona" el elemento más pequeño del resto del array y lo coloca al principio de la porción no ordenada.

**Visualización del Proceso:**

Partimos del array: `[5, 3, 4, 1, 2]`

1.  **Primera Pasada:** Busca el mínimo en `[5, 3, 4, 1, 2]`. El mínimo es **1**.

    - Intercambia el mínimo (1) con el elemento en la primera posición (5).
    - Resultado: `[1, 3, 4, 5, 2]` -\> **El 1 ya está en su posición final.**

2.  **Segunda Pasada:** Busca el mínimo en la parte restante `[3, 4, 5, 2]`. El mínimo es **2**.

    - Intercambia el mínimo (2) con el elemento en la segunda posición (3).
    - Resultado: `[1, 2, 4, 5, 3]` -\> **El 2 ya está en su posición final.**

3.  El proceso continúa hasta que el array está completamente ordenado.

#### Pseudocódigo de Selection Sort

1.  Almacena el índice del primer elemento como el mínimo provisional (`minIndex`).
2.  Compara este elemento con los siguientes hasta encontrar uno menor.
3.  Si encuentras un número menor, actualiza `minIndex` con su índice.
4.  Al final del recorrido, si `minIndex` es diferente del índice inicial, intercambia los dos valores.
5.  Repite el proceso para el siguiente elemento, hasta ordenar todo el array.

### 3\. Insertion Sort (Ordenamiento por Inserción)

Este algoritmo construye el array ordenado un elemento a la vez. Toma el siguiente elemento y lo "inserta" en la posición correcta dentro de la parte del array que ya está ordenada.

**Visualización del Proceso:**

Partimos del array: `[5, 3, 4, 1, 2]`

1.  **Considera el 3:** La parte ordenada es `[5]`. 3 es menor que 5, así que lo inserta antes.

    - Resultado: `[3, 5, 4, 1, 2]`

2.  **Considera el 4:** La parte ordenada es `[3, 5]`. 4 es mayor que 3 pero menor que 5. Se inserta en medio.

    - Resultado: `[3, 4, 5, 1, 2]`

3.  **Considera el 1:** La parte ordenada es `[3, 4, 5]`. El 1 es el más pequeño, así que se mueve al inicio.

    - Resultado: `[1, 3, 4, 5, 2]`

4.  El proceso continúa hasta que todos los elementos han sido "insertados" en su lugar correcto.

#### Pseudocódigo de Insertion Sort

1.  Comienza seleccionando el segundo elemento del array.
2.  Guarda este elemento en una variable (`currentVal`).
3.  Compara `currentVal` con los elementos de la parte ordenada (a su izquierda).
4.  Desplaza los elementos mayores que `currentVal` una posición a la derecha para hacerle espacio.
5.  Inserta `currentVal` en su lugar correcto.
6.  Repite para todos los elementos del array.

---

## Análisis de Rendimiento (Big O)

La notación Big O nos ayuda a entender cómo se comporta el rendimiento de un algoritmo a medida que aumenta el tamaño de los datos.

| Algoritmo          | Complejidad Temporal (Mejor Caso) | Complejidad Temporal (Promedio) | Complejidad Temporal (Peor Caso) | Complejidad Espacial |
| :----------------- | :-------------------------------- | :------------------------------ | :------------------------------- | :------------------- |
| **Bubble Sort**    | $O(n)$                            | $O(n^2)$                        | $O(n^2)$                         | $O(1)$               |
| **Insertion Sort** | $O(n)$                            | $O(n^2)$                        | $O(n^2)$                         | $O(1)$               |
| **Selection Sort** | $O(n^2)$                          | $O(n^2)$                        | $O(n^2)$                         | $O(1)$               |

- **Complejidad Espacial $O(1)$:** Significa que estos algoritmos ordenan el array "in-place", sin necesitar memoria adicional que dependa del tamaño del array.

---

## Resumen Final

- **Bubble Sort**, **Selection Sort** e **Insertion Sort** son excelentes para aprender los fundamentos del ordenamiento por su simplicidad.
- Todos tienen una complejidad de tiempo promedio y en el peor de los casos de $O(n^2)$ (cuadrática), lo que los hace **ineficientes para grandes conjuntos de datos**.
- Para un mejor rendimiento en aplicaciones reales, es necesario utilizar algoritmos más complejos y eficientes como **Merge Sort** o **Quick Sort**, que tienen una complejidad promedio de $O(n \\log n)$.
