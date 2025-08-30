
# **Multiple Pointers Pattern**

Este patrón consiste en **usar dos o más punteros (índices)** que comienzan en diferentes posiciones (al inicio, al final o ambos) y se mueven hacia el centro o en direcciones específicas, **según una condición**.

Es muy útil cuando trabajamos con **arrays ordenados** o cuando queremos encontrar pares, tríos u otros grupos que cumplan ciertas condiciones.

---

## **Ventajas**

* Reduce la necesidad de anidar loops (evita un **O(n²)** innecesario).
* Permite resolver problemas de búsqueda y comparación en **O(n)**.
* Muy útil para:

  * Encontrar pares que sumen un valor.
  * Detectar duplicados.
  * Contar/identificar condiciones sobre elementos en un array ordenado.

---

## **Cómo funciona**

1. Inicializa dos punteros: típicamente uno al **inicio** (`left`) y otro al **final** (`right`).
2. Evalúa la condición con los valores en esas posiciones.
3. Según el resultado:

   * Si necesitas un valor mayor, mueves el puntero izquierdo (`left++`).
   * Si necesitas un valor menor, mueves el puntero derecho (`right--`).
4. Continúas hasta que los punteros se crucen o encuentres la solución.

---

## **Ejemplo Clásico: Suma Cero**

Problema:
Dado un array ordenado de enteros, encuentra el **primer par** cuya suma sea cero.

```ts
function sumZero(arr: number[]): [number, number] | undefined {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--; // Necesitamos un valor más pequeño
    } else {
      left++; // Necesitamos un valor más grande
    }
  }
}
```

Ejemplo de uso:

```ts
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
```

---

## **Analogía: El Juego de la Balanza ⚖️**

Imagina que tienes una **balanza** y dos niños con bloques de números:

* El niño de la izquierda tiene el **menor valor**.
* El niño de la derecha tiene el **mayor valor**.

Tu misión es encontrar dos bloques que sumen **cero**.

* Si la suma es **muy grande**, le dices al niño de la derecha que suelte su bloque (baja el puntero `right`).
* Si la suma es **muy pequeña**, le dices al niño de la izquierda que traiga un bloque más grande (`left++`).
* Cuando se equilibra en **0**, ganaste 🎉.

---

## **Ejemplo 2: Contar Números Únicos**

Problema: Dado un array ordenado, cuenta el número de valores únicos.

```ts
function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
```

Ejemplo:

```ts
console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4])); // 4
```

---

## **¿Cuándo usar Multiple Pointers?**

### Pistas en los enunciados:

1. El input es un **array ordenado** (muy común).
2. Te piden encontrar:

   * Pares o tríos que sumen a cierto valor.
   * Diferencias específicas entre números.
   * Elementos únicos o duplicados.
3. El problema se podría resolver con un doble bucle, pero buscas algo más eficiente (**O(n)**).

---

## **Ejemplos Clásicos en Plataformas**

### **LeetCode**

1. **[Two Sum II – Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)** (Easy)

   * Encuentra dos números en un array ordenado que sumen un target.
   * Patrón: dos punteros (`left`, `right`).

2. **[3Sum](https://leetcode.com/problems/3sum/)** (Medium)

   * Encuentra todos los tríos que sumen cero.
   * Patrón: un bucle + multiple pointers para buscar los otros dos.

---

### **HackerRank**

* **[Pairs](https://www.hackerrank.com/challenges/pairs/problem)**
  Encuentra pares con una diferencia exacta `k`.

  * Usa multiple pointers o hash sets.

---

### **CodeWars**

* **[Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)**
  Encuentra índices de dos números que sumen a un target.

  * Con array ordenado, se resuelve con multiple pointers.

---

✅ En resumen:

* **Sliding Window** → grupos contiguos.
* **Multiple Pointers** → relaciones entre elementos (pares, duplicados, diferencias) en arrays ordenados.


