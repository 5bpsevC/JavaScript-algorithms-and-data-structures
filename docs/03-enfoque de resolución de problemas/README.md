# Algoritmos y Patrones de Resolución de Problemas

---

### ¿Qué es un Algoritmo?

Un algoritmo es un **proceso o un conjunto de pasos bien definidos** para realizar una tarea específica. En el mundo de la programación, prácticamente todo lo que hacemos, desde una simple suma hasta el funcionamiento de una red social, se basa en algoritmos. Comprenderlos es fundamental para ser un desarrollador exitoso y un buen solucionador de problemas. Además, las preguntas sobre algoritmos son comunes en las entrevistas de trabajo.

---

### ¿Cómo Mejorar la Resolución de Problemas?

La clave no es memorizar, sino desarrollar un enfoque estructurado. Para mejorar, debes:

1.  **Diseñar un plan** claro para abordar cualquier problema.
2.  **Dominar los patrones** comunes de resolución de problemas.

El proceso de resolución de problemas puede desglosarse en los siguientes pasos:

1.  **Entender el problema**: Asegúrate de saber exactamente qué se te está pidiendo.
2.  **Explorar ejemplos concretos**: Trabaja con ejemplos reales para clarificar los requisitos.
3.  **Descomponerlo**: Divide el problema grande en tareas más pequeñas y manejables.
4.  **Resolver/Simplificar**: Resuelve las partes más sencillas y luego integra las más difíciles.
5.  **Mirar atrás y refactorizar**: Revisa tu solución para mejorarla y hacerla más eficiente.

---

### Caso Práctico: Conteo de Caracteres

**Problema:** Escribe una función que tome una cadena de texto y devuelva la cantidad de cada carácter en ella.

#### 1. ENTENDER EL PROBLEMA

* **¿Puedo reformular el problema?**
    * Tengo que crear una función que acepte un *string*. Esta función debe contar cuántas veces aparece cada letra y número en el *string* y devolver el resultado.
* **¿Cuáles son las entradas?**
    * Una cadena de texto. Por ejemplo: `"Hello, my name is Paul!"`.
* **¿Cuáles son los resultados?**
    * Un objeto que almacene el recuento de cada carácter. Por ejemplo: `{'h': 1, 'e': 2, 'l': 3, ...}`.
* **¿Tengo suficiente información?**
    * Sí. A partir de una cadena, puedo iterar sobre sus caracteres y contarlos.
* **¿Cómo etiquetar los datos importantes?**
    * `string`: la cadena de entrada.
    * `resultado`: el objeto que almacenará los recuentos.

#### 2. SIMPLIFICAR

* **Dificultad central**: ¿Qué caracteres debo contar? ¿Qué pasa con los espacios, la puntuación y las mayúsculas?
* **Ignorar temporalmente**: Ignoremos los caracteres que no sean letras o números. Convirtamos todo a minúsculas.
* **Solución simplificada**:
    * Crear una función que acepte un *string*.
    * Inicializar un objeto vacío para el resultado.
    * Recorrer cada carácter del *string*.
    * Si el carácter es una letra o número, lo convertimos a minúscula.
    * Si el carácter ya está en el objeto, incrementamos su valor en 1.
    * Si no, lo agregamos al objeto con un valor de 1.
    * Devolver el objeto.
* **Reincorporar la dificultad**: Ahora que la solución simplificada funciona, podemos añadir la lógica para manejar mayúsculas y minúsculas y para ignorar caracteres no deseados.

---

### PREGUNTAS DE REFACTORIZACIÓN

Una vez que tengas una solución funcional, es el momento de mejorarla. Hazte estas preguntas:

* **¿Puedes verificar el resultado?**
    * Comprueba si la suma de todos los valores en el objeto de resultados es igual a la longitud del *string* (sin contar los caracteres ignorados).
* **¿Puedes obtener el resultado de otra manera?**
    * Tal vez usando un enfoque funcional como `reduce` en lugar de un bucle `for`.
* **¿Puedes entenderlo de un vistazo?**
    * ¿Es el código claro y fácil de leer? ¿Los nombres de las variables son descriptivos?
* **¿Puedes utilizar el método para otro problema?**
    * El patrón de "conteo de frecuencia" es muy común. ¿Podrías aplicarlo para contar elementos en un array o palabras en una oración? 
* **¿Puedes mejorar el rendimiento?**
    * ¿Hay una forma de optimizar el bucle o de evitar múltiples pasadas sobre el *string*?
* **¿Cómo han resuelto este problema otras personas?**
    * Busca soluciones en foros o plataformas como Stack Overflow para aprender de otros y descubrir patrones o estructuras de datos que no habías considerado.


-----

### Caso Práctico: Conteo de Caracteres

**Problema:** Escribe una función que tome una cadena de texto y devuelva un objeto con la cantidad de cada carácter.

| Entrada | Salida Esperada |
| :--- | :--- |
| `"hola"` | `{h:1, o:1, l:1, a:1}` |
| `"aaab"` | `{a:3, b:1}` |

#### 1\. Entender el Problema

  * **Reformulación**: La función debe contar la frecuencia de cada carácter en una cadena y devolver un objeto.
  * **Entradas**: Una cadena (string).
  * **Salidas**: Un objeto que mapea cada carácter a su recuento.
  * **Datos clave**: La cadena de entrada (`str`), el objeto de recuento (`result`).

#### 2\. Simplificar

  * **Dificultad**: ¿Qué pasa con los espacios, la puntuación y las mayúsculas?
  * **Solución simplificada**: Ignorar estos detalles por ahora. Iterar sobre la cadena, contar cada carácter y almacenar el resultado en un objeto.
  * **Solución temporal**:
    1.  Crea una función `countChars` que reciba una cadena.
    2.  Inicializa un objeto vacío llamado `counts`.
    3.  Itera sobre cada carácter de la cadena.
    4.  Si el carácter ya es una clave en `counts`, incrementa su valor.
    5.  Si no, agrégalo a `counts` con un valor de 1.
    6.  Devuelve `counts`.

#### 3\. Refactorizar y Mejorar

Una vez que la solución simplificada funciona, refactoriza para manejar los casos especiales:

  * **¿Puedes simplificar la lógica?** Puedes usar expresiones regulares para asegurarte de contar solo caracteres alfanuméricos.
  * **¿Puedes mejorar el rendimiento?** Asegúrate de que solo iteras sobre la cadena una vez.
  * **¿Puedes manejar mayúsculas y minúsculas?** Convierte el carácter a minúscula (`char.toLowerCase()`) antes de agregarlo al objeto.

**Ejemplo de Código Refactorizado (JavaScript):**

```javascript
function countChars(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    // Comprueba si el carácter es alfanumérico
    if (/[a-z0-9]/.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return counts;
}

// Ejemplo de uso:
console.log(countChars("Hello, my name is Paul!"));
// Salida: { h: 1, e: 2, l: 3, o: 1, m: 2, y: 1, n: 1, a: 1, i: 2, s: 1, p: 1, u: 1 }

console.log(countChars("Hello, my name is Pauuuuuuuuuul!"));
// Salida: { h: 1, e: 2, l: 3, o: 1, m: 2, y: 1, n: 1, a: 1, i: 2, s: 1, p: 1, u: 10 }
```