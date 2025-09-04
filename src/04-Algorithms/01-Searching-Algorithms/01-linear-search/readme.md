# 🔎 Linear Search (Búsqueda Lineal)

## 📌 ¿Qué es?

La **búsqueda lineal** (Linear Search) es el algoritmo más sencillo para encontrar un valor dentro de una lista o array.  
Funciona recorriendo **elemento por elemento** hasta encontrar el valor buscado.

- Si lo encuentra 👉 devuelve el índice.
- Si no lo encuentra 👉 devuelve `-1`.

---

## ⚡ Complejidad

- **Tiempo**:

  - Mejor caso: `O(1)` (si el valor está en la primera posición).
  - Peor caso: `O(n)` (si el valor está al final o no existe).

- **Espacio**:
  - `O(1)` (no usa memoria extra, solo un par de variables).

---

## 🧩 Ejemplo en TypeScript

```ts
function linearSearch(num: number[], value: number): number {
  for (let index = 0; index < num.length; index++) {
    if (num[index] === value) {
      return index; // valor encontrado
    }
  }
  return -1; // valor no encontrado
}

// 🚀 Uso
const res = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4);
console.log(res); // 5
```

---

## ✅ Explicación paso a paso

Array: `[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`
Valor buscado: `4`

1. Compara `9` → no es `4`.
2. Compara `8` → no es `4`.
3. Compara `7` → no es `4`.
4. Compara `6` → no es `4`.
5. Compara `5` → no es `4`.
6. Compara `4` → ✅ encontrado en índice **5**.

---

## 🎯 Cuándo usar Linear Search

- Cuando los datos **no están ordenados**.
- Cuando trabajas con **arrays pequeños**.
- Cuando quieres algo rápido de implementar.

Para arrays grandes y ordenados, es mejor usar **Binary Search** (más rápido: `O(log n)`).


