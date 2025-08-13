
## **1️⃣ Arrays en JavaScript**

Los arrays en JS son básicamente listas dinámicas: pueden crecer y reducirse, pero internamente están implementadas como **arrays contiguos** en memoria. Esto impacta directamente su **complejidad**.

### **Operaciones comunes**

| Operación                     | Complejidad (Big O) | Nota                                              |
| ----------------------------- | ------------------- | ------------------------------------------------- |
| Acceder por índice            | O(1)                | Directo en memoria                                |
| Modificar elemento por índice | O(1)                | Igual que acceso                                  |
| Agregar al final (`push`)     | O(1) amortizado     | Puede requerir re-asignación si el array se llena |
| Eliminar del final (`pop`)    | O(1)                | Simple, sin mover elementos                       |
| Agregar al inicio (`unshift`) | O(n)                | Todos los elementos deben moverse un lugar        |
| Eliminar del inicio (`shift`) | O(n)                | Igual que `unshift`, todo se re-indexa            |
| Buscar un elemento (no index) | O(n)                | Iteración completa necesaria                      |
| Métodos como `map`, `filter`  | O(n)                | Recorren todos los elementos                      |

💡 **Por qué `unshift` es costoso:**
Porque los arrays son contiguos. Si agregas algo al inicio, todos los elementos existentes deben desplazarse **un índice hacia adelante**, lo que toma **O(n)** tiempo.

---

## **2️⃣ Objetos en JavaScript**

Los objetos funcionan como **hash tables**. Esto los hace muy eficientes para ciertas operaciones, aunque no mantienen orden (a menos que uses `Map`).

### **Gran O de objetos**

| Operación                        | Complejidad (Big O) | Nota                                    |
| -------------------------------- | ------------------- | --------------------------------------- |
| Inserción (`obj[prop] = value`)  | O(1)                | Hashing directo                         |
| Eliminación (`delete obj[prop]`) | O(1)                | Hashing directo                         |
| Acceso (`obj[prop]`)             | O(1)                | Acceso rápido                           |
| Búsqueda de valor                | O(n)                | Debes iterar todas las propiedades      |
| Cuando no necesitas orden        | Ideal               | Objetos no mantienen orden              |
| Métodos de objetos:              |                     |                                         |
| `Object.keys(obj)`               | O(n)                | Devuelve array de claves                |
| `Object.values(obj)`             | O(n)                | Devuelve array de valores               |
| `Object.entries(obj)`            | O(n)                | Devuelve array de pares \[clave, valor] |
| `hasOwnProperty(prop)`           | O(1)                | Verifica hash directo                   |

💡 **Cuándo usar objetos:**

* Necesitas **acceso rápido** a propiedades por clave.
* La **inserción y eliminación rápida** es más importante que mantener orden.
* No te importa el orden de los elementos.

---

## **3️⃣ Comparación Arrays vs Objetos**

| Característica          | Array                   | Objeto                 |
| ----------------------- | ----------------------- | ---------------------- |
| Orden                   | Sí, se mantiene         | No, no garantiza orden |
| Acceso por índice/clave | O(1)                    | O(1)                   |
| Inserción al final      | O(1) amortizado         | O(1)                   |
| Inserción al inicio     | O(n)                    | N/A                    |
| Búsqueda de valor       | O(n)                    | O(n)                   |
| Eliminación             | Final O(1), inicio O(n) | O(1)                   |

---

💡 **Resumen rápido:**

* **Arrays:** útiles cuando necesitas **orden y recorrido secuencial**, y cuando la mayoría de operaciones son al final.
* **Objetos:** útiles cuando necesitas **acceso rápido por clave, inserción y eliminación**, y el orden no importa.

---

