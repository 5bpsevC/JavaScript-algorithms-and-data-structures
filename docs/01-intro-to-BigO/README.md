## 📈 Intro to Big O Notation

Big O notation es una forma de describir **el rendimiento y la eficiencia** de un algoritmo, especialmente en términos de cómo crece su tiempo de ejecución o uso de memoria cuando aumenta la cantidad de datos de entrada.

En otras palabras, **no mide exactamente el tiempo**, sino **cómo escala** el comportamiento del algoritmo.

La notación Big O es una forma de formalizar el conteo difuso

Nos permite hablar formalmente sobre cómo el tiempo de ejecución de un algoritmo crece a medida que crecen las entradas.

No nos preocuparemos por los detalles, sólo por las tendencias.

💡 **En pocas palabras:**

> _"¿Qué tan rápido (o lento) crecerá mi algoritmo cuando los datos crezcan?"_

---

### 🔍 ¿Por qué importa?

- Permite **comparar algoritmos** sin importar el hardware.
- Ayuda a **detectar cuellos de botella** antes de que se vuelvan un problema.
- Es clave en el **diseño de software escalable**.
- Facilita la **optimización de código** cuando el proyecto crece.
- Sirve como **lenguaje común** entre programadores para hablar de eficiencia.

---

### Tendencias

En el contexto de **Big O notation**, cuando hablamos de “tendencias” nos referimos a **cómo se comporta un algoritmo a medida que el tamaño de la entrada crece**, sin preocuparnos por detalles exactos como constantes multiplicativas o sumas menores.

Por ejemplo:

- Si tenemos una función que suma todos los números hasta `n`:

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Aquí, el número de operaciones crece **aproximadamente proporcional a `n`**. La “tendencia” es lineal, así que decimos que es **O(n)**. No nos importa si son exactamente `n` operaciones o `n+1` o `2n`, solo importa la **forma general del crecimiento**: lineal.

- Otro ejemplo: si tienes un algoritmo con dos bucles anidados sobre `n`:

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

El número de operaciones crece **aproximadamente como `n²`**, entonces su tendencia es **O(n²)**.

✅ **Resumen:**
“**Tendencia**” = cómo crece la cantidad de trabajo del algoritmo cuando `n` se hace grande. No importan los números exactos, solo el patrón de crecimiento (lineal, cuadrático, logarítmico, etc.).

---

### 📊 Tipos comunes de complejidad

| Notación       | Nombre             | Ejemplo práctico                             |
| -------------- | ------------------ | -------------------------------------------- |
| **O(1)**       | Constante          | Acceder a un elemento en un array por índice |
| **O(log n)**   | Logarítmica        | Búsqueda binaria                             |
| **O(n)**       | Lineal             | Recorrer una lista completa                  |
| **O(n log n)** | Lineal-logarítmica | Ordenamiento rápido (Quicksort, Mergesort)   |
| **O(n²)**      | Cuadrática         | Comparar cada elemento con todos los demás   |
| **O(2ⁿ)**      | Exponencial        | Resolver problemas de combinatoria compleja  |
| **O(n!)**      | Factorial          | Generar todas las permutaciones posibles     |

[Performance Tracker](https://rithmschool.github.io/function-timer-demo/)

---

### 🧩 Ejemplo

**Problema:**

> Escribe una función que acepte una cadena de entrada y devuelva una copia invertida.

**Solución 1 — Iterando manualmente (O(n)):**

```javascript
function reverseString1(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
```

**Solución 2 — Usando métodos nativos (O(n)):**

```javascript
function reverseString2(str) {
  return str.split("").reverse().join("");
}
```

**Solución 3 — Recursiva (O(n²) en algunos lenguajes):**

```javascript
function reverseString3(str) {
  if (str === "") return "";
  return reverseString3(str.substr(1)) + str[0];
}
```

🔹 Aunque las tres funcionan, la recursiva puede ser mucho más lenta y consumir más memoria en cadenas largas.

---

### 🛠 Cómo elegir la mejor opción

1. **Identifica el tamaño de los datos.**
2. **Considera la escalabilidad.** Lo que es rápido con 10 elementos puede ser lento con 10 millones.
3. **Piensa en memoria y no solo en tiempo.**
4. **Mide, no adivines.** Usa herramientas de profiling.

---

### 📌 Ejemplo: Calcular la suma de 1 hasta _n_

Supongamos que queremos escribir una función que calcule la suma de todos los números desde **1** hasta (e incluyendo) algún número **n**.

---

### **Método 1 — Usando un bucle (O(n))**

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

🔹 Este método **recorre todos los números** desde `1` hasta `n`, sumándolos uno a uno.

- **Iteraciones:** `n` veces.
- **Complejidad temporal:** **O(n)**.
- **Complejidad espacial:** **O(1)** (solo usa variables `total` y `i`).

---

### **Método 2 — Usando una fórmula matemática (O(1))**

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

🔹 Este método **usa la fórmula de la suma de una serie aritmética**, que siempre ejecuta **la misma cantidad de operaciones**, sin importar el tamaño de `n`.

- **Iteraciones:** 1 sola vez.
- **Complejidad temporal:** **O(1)**.
- **Complejidad espacial:** **O(1)**.

---

### ⚖ Comparativa

| Método  | Código más corto | Complejidad Temporal | Complejidad Espacial | Escalabilidad                  |
| ------- | ---------------- | -------------------- | -------------------- | ------------------------------ |
| Bucle   | No               | **O(n)**             | O(1)                 | Lento con valores grandes de n |
| Fórmula | Sí               | **O(1)**             | O(1)                 | Escala mucho mejor             |

---

💡 **Conclusión:**

- **O(n)** significa que el tiempo de ejecución crece proporcionalmente al valor de `n`.
- **O(1)** significa que el tiempo es constante, sin importar el tamaño de `n`.

<img src="intro-to-bigo-1.png">

## Complejidad espacial

Hasta ahora, nos hemos centrado en la complejidad temporal : ¿cómo podemos analizar el tiempo de ejecución de un algoritmo a medida que aumenta el tamaño de las entradas?

También podemos utilizar la notación O grande para analizar la complejidad del espacio : ¿cuánta memoria adicional necesitamos asignar para ejecutar el código en nuestro algoritmo?

La **complejidad espacial** se refiere a la cantidad de memoria que un algoritmo necesita para ejecutarse, además del espacio necesario para almacenar la entrada. Al igual que la complejidad temporal, la medimos con la notación O grande ($O$) para entender cómo el uso de la memoria escala a medida que el tamaño de la entrada ($n$) aumenta.

---

### ¿Por Qué es Importante la Complejidad Espacial? 🧠

Analizar la complejidad espacial es crucial por varias razones:

1.  **Restricciones de Memoria**: En dispositivos con memoria limitada, como microcontroladores, smartphones o sistemas embebidos, el espacio de memoria es un recurso crítico. Un algoritmo con alta complejidad espacial podría no ser viable en estos entornos.
2.  **Rendimiento**: Aunque la complejidad espacial y temporal son conceptos distintos, a menudo están interconectados. Un uso excesivo de memoria puede llevar a problemas como el intercambio de datos entre la RAM y el disco duro (swapping), lo que degrada drásticamente el rendimiento del algoritmo.
3.  **Algoritmos de Transmisión (Streaming)**: En el procesamiento de grandes volúmenes de datos, como en el análisis de redes sociales o la transmisión de video, a menudo no se puede almacenar todo el conjunto de datos en la memoria. Un algoritmo con complejidad espacial $O(1)$ o $O(\\log n)$ es esencial para procesar estos datos de manera eficiente.

---

### Ejemplos Comunes de Complejidad Espacial

A continuación, se presentan algunos ejemplos para ilustrar cómo se calcula la complejidad espacial:

- **$O(1)$ - Complejidad Espacial Constante**

  Un algoritmo tiene complejidad espacial constante si la memoria adicional que utiliza no depende del tamaño de la entrada. Un buen ejemplo es una función que suma los elementos de un array. Se utiliza una o dos variables para el bucle y el resultado, sin importar si el array tiene 10 o 10 millones de elementos.

  ```ts
  function sumaArray(arr: number[]): number {
    let total: number = 0; // O(1)
    for (const num of arr) {
      total += num;
    }
    return total;
  }
  ```

  El espacio adicional es siempre el mismo, independientemente de la longitud de `arr`. Por lo tanto, la complejidad espacial es $O(1)$.

- **$O(n)$ - Complejidad Espacial Lineal**

  Un algoritmo tiene complejidad espacial lineal si la memoria adicional que utiliza crece de forma directamente proporcional al tamaño de la entrada ($n$). Un ejemplo es una función que crea una copia del array de entrada.

  ```ts
  function copiarArray(arr: number[]): number[] {
    const nuevoArr: number[] = []; // O(n)
    for (const num of arr) {
      nuevoArr.push(num);
    }
    return nuevoArr;
  }
  ```

  El `nuevo_arr` tendrá el mismo tamaño que `arr`, por lo que el espacio adicional requerido es lineal con respecto a la entrada. La complejidad espacial es $O(n)$.

- **$O(n^2)$ - Complejidad Espacial Cuadrática**

  La complejidad espacial cuadrática surge cuando el espacio adicional requerido crece con el cuadrado del tamaño de la entrada. Esto ocurre a menudo en algoritmos que construyen estructuras de datos bidimensionales a partir de una entrada unidimensional.

  ```ts
  function crearMatrizCuadrada(n: number): number[][] {
    const matriz: number[][] = []; // O(n^2)
    for (let i = 0; i < n; i++) {
      const fila: number[] = [];
      for (let j = 0; j < n; j++) {
        fila.push(0);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  ```

  Esta función crea una matriz de $n \\times n$ elementos, por lo que el espacio de memoria que ocupa es $n^2$. La complejidad espacial es $O(n^2)$.

¡Perfecto! Lo que tienes ya cubre muy bien **Big O temporal y espacial** con ejemplos claros. Para cerrar el concepto y que quede visual y resumido, te propongo un **mini resumen/tablas comparativas de complejidad temporal vs espacial**:

---

### **Tabla resumida: Complejidad Temporal vs Espacial**

| Algoritmo / Operación          | Tiempo (O) | Espacio (O) | Nota                             |
| ------------------------------ | ---------- | ----------- | -------------------------------- |
| Acceder a un elemento de array | O(1)       | O(1)        | Constante en ambos               |
| Recorrer un array              | O(n)       | O(1)        | Solo usamos variables auxiliares |
| Copiar un array                | O(n)       | O(n)        | Espacio lineal por la copia      |
| Búsqueda binaria               | O(log n)   | O(1)        | Recursiva → O(log n) pila        |
| Merge Sort                     | O(n log n) | O(n)        | Requiere array auxiliar          |
| Crear matriz n x n             | O(n²)      | O(n²)       | Espacio cuadrático               |
| Recursión Fibonacci simple     | O(2^n)     | O(n)        | Pila de recursión lineal         |

---

### **Tips clave**

1. **O(1) espacio extra** → “in-place”, modifica la entrada sin estructuras nuevas.
2. **Recursión** → cuidado: agrega memoria a la pila.
3. **Estructuras auxiliares** → cualquier array, lista o mapa extra suele subir la complejidad espacial.
4. **Tiempo y espacio** pueden estar conectados: más memoria puede acelerar el tiempo y viceversa.

---

