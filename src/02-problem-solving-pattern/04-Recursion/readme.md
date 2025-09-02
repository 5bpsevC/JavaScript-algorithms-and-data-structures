# 🔁 Recursión en Programación (TypeScript)

La **recursión** es cuando una función **se llama a sí misma** para resolver un problema.  
Se usa mucho cuando un problema se puede **dividir en partes más pequeñas del mismo tipo**.

---

## 1️⃣ Ejemplo clásico: Factorial

El factorial de un número `n` (n!) es el producto de todos los números desde 1 hasta n.

```ts
function factorial(n: number): number {
  if (n === 0) return 1; // Caso base: detener la recursión
  return n * factorial(n - 1); // Llamada recursiva
}

console.log(factorial(5)); // 120
```

**Cómo funciona:**

- `factorial(5)` → 5 \* `factorial(4)`
- `factorial(4)` → 4 \* `factorial(3)`
- … hasta `factorial(0)` → 1 (caso base)

---

## 2️⃣ Ejemplo divertido: Contar hacia atrás

```ts
function contarAtras(n: number): void {
  if (n === 0) {
    console.log("¡Boom!");
    return;
  }
  console.log(n);
  contarAtras(n - 1); // Se llama a sí misma
}

contarAtras(5);
// Output: 5 4 3 2 1 ¡Boom!
```

---

## 3️⃣ Consejos prácticos

- **Siempre define un caso base** para que la función se detenga.
- La recursión es útil para:

  - Factoriales, Fibonacci
  - Buscar en árboles o gráficos
  - Problemas que se dividen en subproblemas similares

💡 **Tip:** Si una función parece repetirse mucho, probablemente se pueda hacer recursiva.

---

Recursión = Pensar **“resolveré esto usando la misma idea para un problema más pequeño”**.
