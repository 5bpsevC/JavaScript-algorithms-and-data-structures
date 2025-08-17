# Patrones para resolver problemas

## Contadores de Frecuencia

Este patrón utiliza **objetos** o **Map/Set** para recopilar valores o frecuencias de valores.  
A menudo, esto puede **evitar bucles anidados** u operaciones **O(N²)** con arrays o strings.

---

## Ejemplo: función `same`

Escriba una función llamada `same` que acepte dos arrays.  
La función debe devolver `true` si cada valor del primer array tiene su **valor correspondiente al cuadrado** en el segundo array, y **la frecuencia de los valores debe ser la misma**.

### Versión inicial (menos eficiente, O(N²))

```ts
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Ejemplo
same([1, 2, 3, 2], [9, 1, 4, 4]); // true
```

**Problema:** Este enfoque es ineficiente porque `indexOf` dentro de un bucle genera **O(N²)** y modifica el array original.

---

### Versión optimizada usando Contadores de Frecuencia (O(N))

```ts
function same(arr1: number[], arr2: number[]): boolean {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  const freq1: { [key: number]: number } = {};
  const freq2: { [key: number]: number } = {};

  // Contar frecuencias en arr1
  for (let num of arr1) {
    if (num in freq1) {
      freq1[num]! += 1; // non-null assertion
    } else {
      freq1[num] = 1;
    }
  }

  // Contar frecuencias en arr2
  for (let num of arr2) {
    if (num in freq2) {
      freq2[num]! += 1; // non-null assertion
    } else {
      freq2[num] = 1;
    }
  }

  // Verificar que cada número tenga su cuadrado en arr2 con la misma frecuencia
  for (let num in freq1) {
    const square = Number(num) ** 2;
    if (!(square in freq2)) {
      return false;
    }
    if (freq2[square] !== freq1[num]) {
      return false;
    }
  }

  return true;
}

// Pruebas
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
```

**Ventajas de este enfoque:**

- Complejidad: **O(N)** en tiempo y memoria.
- No modifica los arrays originales.
- Es **claro y escalable**.
- Puede implementarse usando `Map` para mayor robustez en TypeScript.

---

### Versión alternativa usando Map

```ts
function sameMap(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const freq1 = new Map<number, number>();
  const freq2 = new Map<number, number>();

  for (const num of arr1) {
    freq1.set(num, (freq1.get(num) ?? 0) + 1);
  }

  for (const num of arr2) {
    freq2.set(num, (freq2.get(num) ?? 0) + 1);
  }

  for (const [num, count] of freq1) {
    const square = num ** 2;
    if (!freq2.has(square) || freq2.get(square)! !== count) return false;
  }

  return true;
}
```

### Conclusión

El patrón de **Contadores de Frecuencia** es muy útil cuando queremos comparar **contenidos de arrays o strings** sin usar bucles anidados.
Es una técnica común en **interviews de programación** y **problemas de algoritmos**.

---

## Diagrama de flujo textual/ASCII

Para ilustrar cómo funciona el patrón de **Contadores de Frecuencia** en la función `same`. Esto ayuda a visualizar la lógica sin necesidad de herramientas externas:

---

```
Inicio
  │
  ▼
¿arr1.length === arr2.length?
  │
  ├─ No → Retornar false
  │
  └─ Sí
        │
        ▼
Crear freq1 = {} y freq2 = {}
        │
        ▼
Recorrer arr1:
  ├─ Si num en freq1 → freq1[num] += 1
  └─ Si no → freq1[num] = 1
        │
        ▼
Recorrer arr2:
  ├─ Si num en freq2 → freq2[num] += 1
  └─ Si no → freq2[num] = 1
        │
        ▼
Recorrer freq1:
  ├─ Calcular square = num ** 2
  ├─ Si square no está en freq2 → Retornar false
  ├─ Si freq2[square] !== freq1[num] → Retornar false
        │
        ▼
Si se completó todo → Retornar true
```

---

### 🔹 Explicación paso a paso

1. **Validación inicial:** Si los arrays no tienen la misma longitud, no pueden ser cuadrados, se retorna `false`.
2. **Construcción de contadores:**

   - `freq1` almacena cuántas veces aparece cada número en `arr1`.
   - `freq2` almacena cuántas veces aparece cada número en `arr2`.

3. **Verificación de cuadrados:**

   - Para cada número en `freq1`, se calcula su cuadrado.
   - Se revisa si ese cuadrado existe en `freq2` con la misma frecuencia.
   - Si falla alguna condición, se retorna `false`.

4. **Resultado final:** Si todo coincide, retorna `true`.

---

## Ejemplo con Anagrama

```ts
// Dadas dos cadenas, escribe una función para determinar si la segunda cadena es un anagrama de la primera.
// Un anagrama es una palabra, frase o nombre que se forma reordenando las letras de otra, como "cinema" , que se forma a partir de "iceman" .
function validAnagram(arr1: string, arr2: string) {
  // ✅ Paso 1: Validación inicial
  // Si cualquiera de las cadenas es vacía o no existe, o si tienen diferente longitud, no pueden ser anagramas
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  // ✅ Paso 2: Crear un contador de letras para la primera cadena
  // La clave del objeto será la letra y el valor será cuántas veces aparece
  const anagram: { [key: string]: number } = {};

  // Iteramos sobre cada letra de arr1
  for (let char of arr1) {
    if (anagram[char]) {
      // Si la letra ya existe en el contador, incrementamos su valor
      anagram[char] += 1;
    } else {
      // Si la letra no existe, la inicializamos con 1
      anagram[char] = 1;
    }
  }

  // ✅ Paso 3: Verificar cada letra de la segunda cadena
  for (let char of arr2) {
    if (!anagram[char]) {
      // Si la letra no existe en el contador o ya se ha usado todas sus ocurrencias
      // significa que arr2 tiene una letra extra o diferente → no es anagrama
      return false;
    } else {
      // Si existe, descontamos una ocurrencia de esa letra
      // Descontar la ocurrencia asegura que cada letra de la segunda cadena
      // solo se use tantas veces como aparece en la primera, que es justo lo que define un anagrama
      anagram[char] -= 1;
    }
  }

  // ✅ Paso 4: Si llegamos hasta aquí, todas las letras de arr2 coincidieron con arr1
  // Entonces sí es un anagrama
  return true;
}

console.log(validAnagram("", "")); // false
console.log(validAnagram("cinema", "iceman")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
```

---

Vamos a verlo paso a paso con **`arr1 = "anagram"`** y **`arr2 = "nagaram"`** usando tu contador de letras.

### 1️⃣ Crear el contador a partir de `arr1`

```ts
arr1 = "anagram";
anagram = {};
```

Iteramos sobre cada letra:

| Letra | Acción                    | Contador actual                  |
| ----- | ------------------------- | -------------------------------- |
| 'a'   | No existe → inicializamos | { a: 1 }                         |
| 'n'   | No existe → inicializamos | { a: 1, n: 1 }                   |
| 'a'   | Existe → +1               | { a: 2, n: 1 }                   |
| 'g'   | No existe → inicializamos | { a: 2, n: 1, g: 1 }             |
| 'r'   | No existe → inicializamos | { a: 2, n: 1, g: 1, r: 1 }       |
| 'a'   | Existe → +1               | { a: 3, n: 1, g: 1, r: 1 }       |
| 'm'   | No existe → inicializamos | { a: 3, n: 1, g: 1, r: 1, m: 1 } |

✅ Contador final después de `arr1`:

```ts
{ a: 3, n: 1, g: 1, r: 1, m: 1 }
```

---

### 2️⃣ Verificar `arr2 = "nagaram"`

Ahora iteramos sobre cada letra de `arr2` y **descontamos**:

| Letra | Contador antes                   | Acción              | Contador después                 |
| ----- | -------------------------------- | ------------------- | -------------------------------- |
| 'n'   | { a: 3, n: 1, g: 1, r: 1, m: 1 } | Existe → restamos 1 | { a: 3, n: 0, g: 1, r: 1, m: 1 } |
| 'a'   | { a: 3, n: 0, g: 1, r: 1, m: 1 } | Existe → restamos 1 | { a: 2, n: 0, g: 1, r: 1, m: 1 } |
| 'g'   | { a: 2, n: 0, g: 1, r: 1, m: 1 } | Existe → restamos 1 | { a: 2, n: 0, g: 0, r: 1, m: 1 } |
| 'a'   | { a: 2, n: 0, g: 0, r: 1, m: 1 } | Existe → restamos 1 | { a: 1, n: 0, g: 0, r: 1, m: 1 } |
| 'r'   | { a: 1, n: 0, g: 0, r: 1, m: 1 } | Existe → restamos 1 | { a: 1, n: 0, g: 0, r: 0, m: 1 } |
| 'a'   | { a: 1, n: 0, g: 0, r: 0, m: 1 } | Existe → restamos 1 | { a: 0, n: 0, g: 0, r: 0, m: 1 } |
| 'm'   | { a: 0, n: 0, g: 0, r: 0, m: 1 } | Existe → restamos 1 | { a: 0, n: 0, g: 0, r: 0, m: 0 } |

---

### 3️⃣ Resultado final

- Todas las letras de `arr2` se encontraron en el contador y **se consumieron correctamente**.
- Ninguna letra “sobró” ni faltó.

✅ Por lo tanto, `"nagaram"` **sí es un anagrama de `"anagram"`** → `true`.

---

