# 🔎 Binary Search en TypeScript

## 📌 ¿Qué es?

El **Binary Search** (búsqueda binaria) es un algoritmo eficiente para encontrar un valor en un **array ordenado**.  
En lugar de revisar cada elemento uno por uno (como en Linear Search), divide el array en mitades y decide en cuál seguir buscando.

Esto reduce el tiempo de búsqueda de **O(n)** a **O(log n)**.

---

## 🧩 Patrón que utiliza

- **Multiple Pointers Pattern**: usamos dos punteros (`lo` y `hi`) que enmarcan el rango de búsqueda.
- Cada paso ajusta los punteros hacia el centro según la comparación.
- También se considera un caso de **Divide & Conquer** porque parte el problema en mitades.

---

## ⚡ Complejidad

- **Tiempo:** O(log n)
- **Espacio:** O(1) en versión iterativa (O(log n) en recursiva por el stack de llamadas).

---

## ✅ Código en TypeScript (iterativo)

```ts
function binarySearch(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const val = arr[mid];

    if (val === target) return mid; // 🎯 encontrado
    if (val < target) lo = mid + 1; // buscar a la derecha
    else hi = mid - 1; // buscar a la izquierda
  }

  return -1; // no encontrado
}

// Ejemplo
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // ordenado
console.log(binarySearch(nums, 7)); // Output: 7
```

---

## 🧠 Ejemplo paso a paso

Buscar `7` en `[0,1,2,3,4,5,6,7,8,9]`

1. `lo=0`, `hi=9`, `mid=4 (valor=4)` → 4 < 7 → mover `lo=5`
2. `lo=5`, `hi=9`, `mid=7 (valor=7)` → ✅ encontrado en índice 7

---

## 🎯 Cuándo usarlo

- Cuando el array **está ordenado**.
- Para listas grandes donde Linear Search sería lento.
- En problemas de búsqueda en rangos numéricos o en strings ordenados.

---

## 🔑 Resumen

- **Algoritmo:** Binary Search
- **Patrón:** Multiple Pointers + Divide & Conquer
- **Ventaja:** Mucho más rápido que Linear Search en datos grandes ordenados.
