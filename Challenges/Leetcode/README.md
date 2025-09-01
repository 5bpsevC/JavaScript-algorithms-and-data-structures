# Mi Plan de Práctica de LeetCode para Principiantes

¡Bienvenido/a a mi repositorio de práctica de LeetCode! Este espacio está dedicado a documentar mi viaje en la resolución de problemas de algoritmos y estructuras de datos, comenzando con los fundamentos.

El objetivo principal es construir una base sólida, mejorar mis habilidades de resolución de problemas y crear un registro tangible de mi progreso. Este plan se centra en problemas de nivel "Fácil" con `Arrays`.

---

## 🚀 El Plan de Estudio (2 Semanas)

### **Semana 1 — Calentando motores**
**Objetivo:** Familiarizarme con operaciones básicas, bucles y manipulación de arrays simples.

| Día | Problema | Enlace |
| --- | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| 1 | **Two Sum** | [🔗 Link](https://leetcode.com/problems/two-sum/) |
| 2 | **Build Array from Permutation** | [🔗 Link](https://leetcode.com/problems/build-array-from-permutation/) |
| 3 | **Concatenation of Array** | [🔗 Link](https://leetcode.com/problems/concatenation-of-array/) |
| 4 | **Running Sum of 1d Array** | [🔗 Link](https://leetcode.com/problems/running-sum-of-1d-array/) |
| 5 | **Shuffle the Array** | [🔗 Link](https://leetcode.com/problems/shuffle-the-array/) |
| 6 | **Kids With the Greatest Number of Candies** | [🔗 Link](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/) |
| 7 | **Richest Customer Wealth** | [🔗 Link](https://leetcode.com/problems/richest-customer-wealth/) |

### **Semana 2 — Un poco más de juego**
**Objetivo:** Introducir recorridos dobles, arrays 2D y un poco de lógica adicional.

| Día | Problema | Enlace |
| --- | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| 8 | **Number of Good Pairs** | [🔗 Link](https://leetcode.com/problems/number-of-good-pairs/) |
| 9 | **Defanging an IP Address** | [🔗 Link](https://leetcode.com/problems/defanging-an-ip-address/) |
| 10 | **Count Items Matching a Rule** | [🔗 Link](https://leetcode.com/problems/count-items-matching-a-rule/) |
| 11 | **Smaller Numbers Than Current** | [🔗 Link](https://leetcode.com/problems/smaller-numbers-than-current/) |
| 12 | **Create Target Array in the Given Order** | [🔗 Link](https://leetcode.com/problems/create-target-array-in-the-given-order/) |
| 13 | **Find the Highest Altitude** | [🔗 Link](https://leetcode.com/problems/find-the-highest-altitude/) |
| 14 | **Maximum Number of Words Found in Sentences** | [🔗 Link](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/) |

---

## 💡 Mi Filosofía de Práctica

1.  **Intentar sin Ayuda:** Dedicaré al menos 30-45 minutos a cada problema para intentar resolverlo por mi cuenta antes de buscar pistas o soluciones.
2.  **Aprender de Otros:** Después de enviar mi solución (o si me atasco), revisaré la sección de soluciones para entender enfoques más eficientes o diferentes.
3.  **Analizar la Complejidad:** Para cada solución, analizaré y anotaré su complejidad temporal (Big O) y espacial. El objetivo es aprender a escribir código no solo que funcione, sino que sea eficiente.
4.  **Documentar el Aprendizaje:** La columna de "Notas" es crucial. Anotaré el "ajá" de cada problema: el truco, el patrón o el error que cometí, para no volver a repetirlo.
5.  **Consistencia sobre Intensidad:** La clave es la constancia. Es mejor resolver un problema al día que siete en un solo día de la semana.

---

## 📊 Hoja de Seguimiento

| Día | Problema | Resuelto ✅ | Link a mi Solución | Tiempo (min) | Complejidad | Nota / Aprendizaje Clave |
| --- | ------------------------------------------ |:----------:| :-------------------: | :----------: | :---------: | -------------------------- |
| 1 | Two Sum | ☐ | [Solución]() | | | Entender la solución O(n) con HashMap es clave. |
| 2 | Build Array from Permutation | ☐ | [Solución]() | | | |
| 3 | Concatenation of Array | ☐ | [Solución]() | | | |
| 4 | Running Sum of 1d Array | ☐ | [Solución]() | | | |
| 5 | Shuffle the Array | ☐ | [Solución]() | | | |
| 6 | Kids With Candies | ☐ | [Solución]() | | | |
| 7 | Richest Customer Wealth | ☐ | [Solución]() | | | |
| 8 | Number of Good Pairs | ☐ | [Solución]() | | | |
| 9 | Defanging an IP Address | ☐ | [Solución]() | | | |
| 10 | Count Items Matching a Rule | ☐ | [Solución]() | | | |
| 11 | Smaller Numbers Than Current | ☐ | [Solución]() | | | |
| 12 | Create Target Array | ☐ | [Solución]() | | | |
| 13 | Find the Highest Altitude | ☐ | [Solución]() | | | |
| 14 | Max Words in Sentences | ☐ | [Solución]() | | | |

---

## 📂 Estructura del Repositorio

Para mantener todo organizado, cada problema tendrá su propia carpeta, nombrada según el número del día y el nombre del problema.

```
/
├── 01-Two-Sum/
│   └── solution.ts         // O .py, .java, etc.
├── 02-Build-Array-from-Permutation/
│   └── solution.ts
└── README.md
```

# Ruta completa y estructurada para pasar de resolver problemas "Easy" a "Medium" en LeetCode de manera efectiva.

El salto de Easy a Medium no se trata de ser "más inteligente", sino de conocer las **herramientas y patrones correctos**. Esta ruta se enfoca en aprender esas herramientas de forma progresiva.

---

### **Fase 1: Reforzar la Base y Dominar las Herramientas Clave 🧠**

Antes de atacar los problemas Medium, asegúrate de dominar las estructuras de datos que son el "pan de cada día" en este nivel. Para cada una, aprende su funcionamiento, ventajas, desventajas y su complejidad (Big O).

**1. Hash Maps (Diccionarios/Tablas Hash)**
* **¿Por qué?** Son la herramienta más importante para optimizar soluciones de fuerza bruta (de $O(n^2)$ a $O(n)$). Son esenciales para contar, agrupar o buscar elementos en tiempo constante $O(1)$.
* **Patrones a dominar:**
    * Buscar un complemento (como en "Two Sum").
    * Contar frecuencias de elementos.
    * Agrupar elementos por una propiedad (como en "Group Anagrams").
* **Problemas Medium de práctica:**
    * `Group Anagrams`
    * `Top K Frequent Elements`
    * `Subarray Sum Equals K`

**2. Two Pointers (Dos Punteros)**
* **¿Por qué?** Es una técnica increíblemente eficiente para problemas con arrays o strings ordenados, permitiendo soluciones en tiempo lineal $O(n)$.
* **Patrones a dominar:**
    * Punteros opuestos que se mueven hacia el centro (para buscar pares).
    * Punteros que avanzan en la misma dirección a distintas velocidades (el patrón "liebre y tortuga" para detectar ciclos).
* **Problemas Medium de práctica:**
    * `3Sum` (un clásico absoluto)
    * `Container With Most Water`
    * `Sort Colors`

**3. Stacks (Pilas)**
* **¿Por qué?** Perfectas para problemas que siguen una lógica **LIFO** (Last-In, First-Out), como el manejo de paréntesis, operaciones de "deshacer" o la evaluación de expresiones.
* **Patrones a dominar:**
    * Paréntesis o etiquetas balanceadas.
    * Encontrar el "siguiente elemento mayor" (Monotonic Stack).
* **Problemas Medium de práctica:**
    * `Daily Temperatures`
    * `Min Stack`
    * `Validate Stack Sequences`

---

### **Fase 2: Aprender Patrones Algorítmicos Fundamentales 🛠️**

Con las estructuras de datos dominadas, el siguiente paso es reconocer patrones de algoritmos que se repiten constantemente en problemas de nivel Medio.

**1. Sliding Window (Ventana Deslizante)**
* **¿Por qué?** Es la técnica principal para resolver problemas sobre "subarrays" o "substrings" que deben cumplir una condición (ej. el más largo, el más corto, etc.). Evita los ineficientes bucles anidados.
* **Patrones a dominar:**
    * Ventana de tamaño fijo.
    * Ventana de tamaño variable que se expande y contrae.
* **Problemas Medium de práctica:**
    * `Longest Substring Without Repeating Characters`
    * `Minimum Size Subarray Sum`
    * `Permutation in String`

**2. Binary Search (Búsqueda Binaria)**
* **¿Por qué?** En nivel Medium, no solo se usa para buscar en arrays ordenados. Se aplica a cualquier problema donde puedas "adivinar" una respuesta y verificar si es demasiado alta o demasiado baja (lo que se conoce como "búsqueda binaria sobre la respuesta").
* **Patrones a dominar:**
    * Búsqueda en un array rotado.
    * Encontrar el mínimo o máximo que satisface una condición.
* **Problemas Medium de práctica:**
    * `Search in Rotated Sorted Array`
    * `Find Minimum in Rotated Sorted Array`
    * `Koko Eating Bananas`

**3. Breadth-First Search (BFS) y Depth-First Search (DFS)**
* **¿Por qué?** Son los algoritmos fundamentales para recorrer estructuras como **árboles y grafos**. BFS es ideal para encontrar el camino más corto, mientras que DFS es útil para explorar todas las posibilidades.
* **Patrones a dominar:**
    * **BFS con una Cola (Queue):** Para recorridos por niveles y caminos mínimos.
    * **DFS con Recursión (o un Stack):** Para explorar un camino hasta el final.
* **Problemas Medium de práctica:**
    * `Number of Islands` (el problema más icónico de este patrón)
    * `Rotting Oranges` (un BFS clásico)
    * `Binary Tree Level Order Traversal` (BFS en árboles)
    * `Validate Binary Search Tree` (DFS en árboles)

---

### **Fase 3: Transición y Consolidación 🎯**

Ahora estás listo para mezclar todo y enfrentarte a problemas Medium de forma más general.

**Plan de Acción:**
1.  **Enfócate en un patrón por semana:** Dedica una semana a problemas de "Two Pointers", la siguiente a "Sliding Window", y así sucesivamente. Esto te ayuda a interiorizar el patrón.
2.  **Usa las listas de LeetCode:** Explora las listas como el **"Top Interview Questions"** (marcando solo Medium) o el **"LeetCode 75"**. Son colecciones de problemas de alta calidad que cubren los patrones más importantes.
3.  **No mires la solución demasiado pronto:** Lucha con el problema por lo menos 45-60 minutos. Intenta dibujar el problema, probar con ejemplos pequeños y verbalizar tu lógica. El verdadero aprendizaje ocurre durante este esfuerzo.
4.  **Estudia la solución, no la copies:** Cuando veas una solución, tu objetivo no es memorizar el código, sino entender el **patrón**. Pregúntate: "¿Por qué un Hash Map fue la mejor opción aquí? ¿Qué señal me indicaba que debía usar una Sliding Window?".
5.  **Repetición Espaciada:** Después de resolver un problema, vuelve a intentarlo una semana después sin ver tu código anterior. Si puedes resolverlo rápidamente, has internalizado el patrón.

Siguiendo esta ruta, no solo resolverás problemas Medium, sino que construirás una comprensión profunda de los fundamentos que te servirá para cualquier desafío de programación. ¡Mucho éxito!