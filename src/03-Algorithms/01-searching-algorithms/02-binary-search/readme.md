# 🔎 Binary Search en TypeScript

## 📌 ¿Qué es?

El **Binary Search** (búsqueda binaria) es un algoritmo eficiente para encontrar un valor en un **array ordenado**.  
En lugar de revisar cada elemento uno por uno (como en Linear Search), divide el array en mitades y decide en cuál seguir buscando. Binary Search solo funciona con matrices ordenadas.

Esto reduce el tiempo de búsqueda de **O(n)** a **O(log n)**.

---

## 🧩 Patrón que utiliza

- **Multiple Pointers Pattern**: usamos dos punteros (`left` y `rigth`) que enmarcan el rango de búsqueda.
- left apunta al inicio de la matriz
- right apunta al final de la matriz
- mid se calcula como el punto medio entre left y right

Se ajustan los punteros según el valor que busquemos

---

## ⚡ Complejidad

- **Tiempo:** O(log n)
- **Espacio:** O(1) en versión iterativa (O(log n) en recursiva por el stack de llamadas).

---



# Pseudocódigo

```
función BúsquedaBinaria(array, valorBuscado):
    left ← 0
    right ← longitud(array) - 1

    mientras left <= right:
        mid ← floor((left + right) / 2)

        si array[mid] == valorBuscado:
            retornar mid
        
        si array[mid] < valorBuscado:
            left ← mid + 1
        sino:
            right ← mid - 1

    retornar -1  // valor no encontrado

```

## ✅ Código en TypeScript (iterativo)

```ts
function binarySearch(arr: number[], target: number): number {
  let left  = 0
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const val = arr[mid];

    if (val === target) return mid; // 🎯 encontrado
    if (val < target) lo = mid + 1; // buscar a la derecha
    else right = mid - 1; // buscar a la izquierda
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
