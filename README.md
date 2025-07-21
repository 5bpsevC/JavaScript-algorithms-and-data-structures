# Master the Coding Interview: Data Structures + Algorithms

- ¿Puede resolver un problema que tiene la empresa, el cliente o el empleador?

Si soy capaz de resolver sus problemas, entonces soy valioso y productivo para ellos

- ¿Cómo resolver problemas?

Debo tener un buen proceso de pensamiento y conocer las compensaciones entre las estructuras de datos y la complejidad del espacio
y el tiempo de los algoritmos

# Guía Rápida para Entrevistas de Programación

Basado en **Master The Coding Interview: Data Structures + Algorithms** de Andrei Neagoie.

---

## Los 3 pilares de un buen código:

1. **Legibilidad**
2. **Complejidad Temporal**
3. **Complejidad Espacial**

## Habilidades que busca el entrevistador:

- **Habilidades analíticas:** ¿Cómo analizas y resuelves problemas?
- **Habilidades de codificación:** ¿Escribes código limpio, simple, organizado y legible?
- **Conocimientos técnicos:** ¿Conoces los fundamentos del puesto al que aplicas?
- **Habilidades de comunicación:** ¿Tu personalidad encaja con la cultura de la empresa?

---

## Pasos para resolver un problema:

1. **Escucha atentamente:** Cuando el entrevistador plantea el problema, escribe los puntos clave (por ejemplo: "array ordenado"). Asegúrate de tener todos los detalles. Demuestra que eres organizado.
2. **Verifica:** ¿Cuáles son las entradas? ¿Cuáles son las salidas?
3. **Identifica el objetivo principal:** ¿Es importante optimizar tiempo, espacio o memoria? ¿Cuál es la meta principal?
4. **Haz preguntas con moderación:** No seas molesto haciendo demasiadas preguntas.
5. **Empieza con el enfoque ingenuo o fuerza bruta:** Describe la primera solución que se te ocurra (no necesitas escribir el código). Esto muestra que puedes pensar de manera crítica.
6. **Justifica por qué este enfoque no es el mejor:** Por ejemplo, menciona su complejidad O(n^2) o que no es legible.
7. **Analiza tu enfoque:** Comenta tu solución paso a paso y busca posibles fallos. ¿Hay repeticiones? ¿Cuellos de botella como O(N^2)? ¿Usaste toda la información proporcionada?
8. **Planifica antes de codificar:** Escribe los pasos que seguirás.
9. **Modulariza tu código desde el inicio:** Divide tu código en piezas pequeñas y claras. Agrega comentarios si es necesario.
10. **Empieza a codificar:** Mientras más preparado estés, mejor saldrá. Nunca empieces sin tener claro cómo proceder.
11. **Considera validaciones y casos erróneos:** Supón que alguien intentará romper tu código. Comprueba entradas falsas (por ejemplo: null, undefined, arrays vacíos). Escribe comentarios sobre los chequeos que harías.
12. **Usa nombres descriptivos:** Evita nombres confusos como `i` y `j`.
13. **Prueba tu código:** Considera casos como: sin parámetros, 0, undefined, null, arrays masivos, código asíncrono. Pregunta si puedes asumir ciertas condiciones.
14. **Propón mejoras:** Discute con el entrevistador cómo mejorarías el código: ¿Funciona? ¿Es legible? ¿Se puede optimizar? ¿Qué buscarías en Google para mejorar?
15. **Prepárate para preguntas adicionales:** Por ejemplo, ¿cómo manejarías entradas demasiado grandes para la memoria? La respuesta suele involucrar enfoques "divide y vencerás" o procesamiento distribuido.

---

## Lista de verificación para un buen código:

- [✅] **Funciona correctamente.**
- [✅] Uso adecuado de estructuras de datos.
- [✅] Reutilización de código / Evitar repeticiones.
- [✅] Modularidad: Código legible, mantenible y testeable.
- [✅] Complejidad menor a O(N^2). Evita bucles anidados cuando sea posible.
- [✅] Baja complejidad espacial. Evita desbordar la pila con recursiones o copiar arrays masivos.

---

## Heurísticas para destacar:

- [✅] **Hash Maps** suelen ser la respuesta para mejorar la complejidad temporal.
- [✅] Si es un array ordenado, utiliza **búsqueda binaria** para lograr O(log N). Divide y vencerás.
- [✅] Intenta ordenar la entrada.
- [✅] Usa tablas hash o información precomputada (por ejemplo, datos ya ordenados) para optimizar.
- [✅] Considera el equilibrio entre tiempo y espacio. A veces almacenar estado extra en memoria mejora el tiempo de ejecución.
- [✅] Sigue los consejos o pistas del entrevistador.
- [✅] Los trade-offs entre espacio y tiempo son comunes. Usar más espacio (como tablas hash) puede optimizar el tiempo.

---

## Recuerda:

**Comunica tu proceso de pensamiento tanto como sea posible.** No te preocupes por terminar rápido. Cada parte de la entrevista importa.


### **Plan Semanal para Dominar Estructuras de Datos y Algoritmos**

**Duración**: 1 semana (puedes repetir o ajustar según tu progreso).  
**Tiempo diario estimado**: 1.5-2 horas (ajustable según tu disponibilidad).  
**Objetivo**: Aprender y practicar estructuras de datos (arrays, objetos, sets, maps, stacks, queues) y algoritmos (ordenamiento, búsqueda, simulación), con énfasis en resolver problemas, revisar soluciones y explicar ideas.

---

#### **Día 1: Fundamentos de Arrays y Ordenamiento**
- **Teoría (30 min)**:  
  - Lee sobre **arrays**: cómo funcionan, acceso por índices, operaciones comunes (push, pop, splice, etc.).  
  - Estudia algoritmos de ordenamiento básicos: **Bubble Sort** y **Selection Sort**. Usa recursos como GeeksforGeeks o freeCodeCamp.  
  - Ejemplo: Un array es como una lista ordenada de casilleros donde cada casillero tiene un índice (0, 1, 2...).
- **Práctica (1 hora)**:  
  - Resuelve 2-3 problemas de **Codewars** o **LeetCode** relacionados con arrays (nivel fácil). Ejemplo: "Two Sum" (LeetCode) o "Remove Duplicates from Sorted Array".  
  - Implementa **Bubble Sort** en tu lenguaje preferido (Python, JavaScript, etc.).  
  - Explica en voz alta o por escrito cómo funciona tu solución para uno de los problemas.  
- **Revisión (15 min)**:  
  - Revisa tu código: ¿Es legible? ¿Puedes optimizarlo (por ejemplo, reducir bucles)? Compara con soluciones oficiales o de otros usuarios.  
  - Anota qué aprendiste o qué error cometiste.

---

#### **Día 2: Objetos y Búsqueda**
- **Teoría (30 min)**:  
  - Aprende sobre **objetos** (o diccionarios/hashes): estructura clave-valor, cómo iterar, ventajas frente a arrays.  
  - Estudia algoritmos de búsqueda: **Linear Search** y **Binary Search** (este último requiere un array ordenado).  
  - Ejemplo: Un objeto es como un cuaderno donde cada "clave" es una etiqueta y el "valor" es el contenido.  
- **Práctica (1 hora)**:  
  - Resuelve 2-3 problemas en **Codewars** o **LeetCode** que usen objetos (ejemplo: contar frecuencias de caracteres en una cadena).  
  - Implementa **Binary Search** en un array ordenado.  
  - Explica en voz alta cómo resolviste un problema o por qué elegiste un objeto en lugar de un array.  
- **Revisión (15 min)**:  
  - Compara tu solución con otras en la plataforma. ¿Usaste más memoria o tiempo del necesario?  
  - Reflexiona: ¿Podrías haber usado una estructura diferente para mejorar la eficiencia?

---

#### **Día 3: Sets y Maps**
- **Teoría (30 min)**:  
  - Estudia **Sets**: colecciones de elementos únicos, operaciones como unión, intersección, diferencia.  
  - Aprende sobre **Maps**: estructuras clave-valor con mejor rendimiento para búsquedas que objetos en algunos casos.  
  - Ejemplo: Un Set es como un club exclusivo donde no hay miembros repetidos.  
- **Práctica (1 hora)**:  
  - Resuelve problemas que involucren Sets (ejemplo: "Contains Duplicate" en LeetCode) o Maps (ejemplo: "Word Frequency").  
  - Escribe una función que use un Set para eliminar duplicados de un array.  
  - Explica por escrito por qué un Set o Map fue útil en tu solución.  
- **Revisión (15 min)**:  
  - Revisa si tu solución es eficiente en tiempo y espacio. ¿Podrías haber usado un array en lugar de un Set? ¿Por qué no lo hiciste?  
  - Busca soluciones alternativas en la plataforma para comparar.

---

#### **Día 4: Stacks**
- **Teoría (30 min)**:  
  - Aprende sobre **Stacks** (pilas): estructura LIFO (Last In, First Out). Operaciones: PUSH, POP, PEEK.  
  - Ejemplo: Una pila es como una torre de platos: solo puedes agregar o quitar el de arriba.  
  - Lee sobre problemas clásicos como "Valid Parentheses" que usan stacks.  
- **Práctica (1 hora)**:  
  - Resuelve 2-3 problemas de stacks en **LeetCode** (ejemplo: "Valid Parentheses" o "Min Stack").  
  - Implementa una pila desde cero usando un array.  
  - Explica en voz alta cómo tu pila maneja un problema específico.  
- **Revisión (15 min)**:  
  - Revisa tu código: ¿Es claro? ¿Podrías optimizar el uso de memoria?  
  - Reflexiona: ¿Qué aprendiste sobre el uso de stacks en problemas reales?

---

#### **Día 5: Queues**
- **Teoría (30 min)**:  
  - Estudia **Queues** (colas): estructura FIFO (First In, First Out). Operaciones: ENQUEUE, DEQUEUE.  
  - Ejemplo: Una cola es como una fila en el supermercado: el primero en llegar es el primero en salir.  
  - Lee sobre problemas como "Implement Queue using Stacks".  
- **Práctica (1 hora)**:  
  - Resuelve 2-3 problemas de queues en **LeetCode** o **Codewars** (ejemplo: "Moving Zeros to the End").  
  - Implementa una cola desde cero usando un array.  
  - Explica por escrito cómo usaste la cola en un problema.  
- **Revisión (15 min)**:  
  - Compara tu solución con otras. ¿Podrías usar una estructura diferente?  
  - Anota un error que cometiste y cómo lo corregiste.

---

#### **Día 6: Algoritmos de Simulación y Repaso**
 - **Teoría (30 min)**:  
   - Aprende sobre algoritmos de **simulación**: cómo modelar procesos paso a paso (ejemplo: simular un juego o un sistema).  
   - Repasa las estructuras vistas (arrays, objetos, sets, maps, stacks, queues).  
   - Ejemplo: Una simulación puede ser como seguir las reglas de un juego de cartas turno por turno.  
 - **Práctica (1 hora)**:  
   - Resuelve un problema de simulación en **LeetCode** (ejemplo: "Game of Life" o un problema de colas como "Task Scheduler").  
   - Combina estructuras: por ejemplo, usa un Set y una Queue en un mismo problema.  
   - Explica en voz alta cómo modelaste el problema.  
 - **Revisión (15 min)**:  
   - Reflexiona: ¿Tu solución fue intuitiva o complicada? ¿Cómo podrías simplificarla?  
   - Revisa un problema de días anteriores que te costó y vuelve a intentarlo.

---

#### **Día 7: Proyecto Final y Reflexión**
- **Teoría (15 min)**:  
  - Repasa un concepto que te haya costado durante la semana (por ejemplo, Binary Search o Stacks).  
  - Lee sobre **complejidad temporal y espacial** (Big O) si no lo has hecho aún.  
- **Práctica (1.5 horas)**:  
  - Elige un problema de nivel medio en **LeetCode** o **Codewars** que combine varias estructuras (ejemplo: "LRU Cache" o "Top K Frequent Elements").  
  - Escribe una solución completa, optimizada y comentada.  
  - Explica por escrito o en voz alta cada paso de tu solución, como si estuvieras enseñándoselo a ப

System: ¡Genial! El plan que te propuse está diseñado para ser práctico y progresivo, cubriendo las estructuras de datos y algoritmos que mencionaste, con un enfoque en aprender, practicar y reflexionar. Si quieres, puedo ajustar el plan según tu nivel actual, lenguaje de programación preferido o disponibilidad de tiempo. También puedo ayudarte con:

- **Ejemplos de problemas específicos**: Puedo recomendarte problemas concretos de Codewars o LeetCode para cada día.
- **Explicaciones detalladas**: Si quieres, puedo profundizar en alguna estructura o algoritmo (por ejemplo, cómo implementar un stack o cómo optimizar una búsqueda binaria).
- **Código de ejemplo**: Puedo darte ejemplos de código en Python, JavaScript u otro lenguaje para las implementaciones.

