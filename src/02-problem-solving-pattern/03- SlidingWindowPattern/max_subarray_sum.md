
### 🧠 ¿Qué hace esta función?

La función `maxSubarraySum` recibe:

* Un array de números (`arr`)
* Un número (`num`), que indica cuántos números consecutivos queremos sumar.

Y devuelve:

➡️ **La mayor suma posible** de `num` números que estén **uno al lado del otro** en el array.

---

### 📦 Ejemplo rápido

```ts
arr = [1, 2, 3, 4, 5]
num = 3
```

Las sumas posibles de 3 números seguidos son:

* 1 + 2 + 3 = 6
* 2 + 3 + 4 = 9
* 3 + 4 + 5 = 12

✅ La función debe devolver `12`.

---

### 🪟 ¿Cómo lo hace?

Usa una técnica llamada **"ventana deslizante" (sliding window)** para **no tener que sumar desde cero cada vez**.

---

### 🪜 Paso a paso

---

#### ✅ Paso 1: Verificar que se pueda hacer

```ts
if (arr.length < num) return null;
```

* Si el array tiene menos elementos que `num`, no se puede hacer la suma. Devuelve `null`.

---

#### ✅ Paso 2: Sumar los primeros `num` elementos

```ts
for (let i = 0; i < num; i++) {
  maxSum += arr[i];
}
tempSum = maxSum;
```

* Suma los primeros `num` números.
* Guarda el resultado en `maxSum` y `tempSum`.

Con el ejemplo:

```ts
arr = [1, 2, 3, 4, 5], num = 3
maxSum = 1 + 2 + 3 = 6
```

---

#### ✅ Paso 3: Mover la ventana

```ts
for (let i = num; i < arr.length; i++) {
  tempSum = tempSum - arr[i - num] + arr[i];
  maxSum = Math.max(maxSum, tempSum);
}
```

Vamos a explicarlo con el mismo ejemplo:

```ts
arr = [1, 2, 3, 4, 5]
num = 3
```

Primera ventana: `[1, 2, 3]` → suma = 6
Mover la ventana una posición: `[2, 3, 4]`

¿Cómo conseguimos la nueva suma **sin volver a sumar todo**?

```ts
tempSum = tempSum - arr[i - num] + arr[i]
```

👉 Paso a paso para `i = 3`:

```ts
tempSum = 6 - arr[0] + arr[3]
         = 6 - 1 + 4
         = 9
```

Luego comparamos:

```ts
maxSum = Math.max(maxSum, tempSum)
        = Math.max(6, 9)
        = 9
```

Seguimos deslizando la ventana así hasta el final.

---

### 💡 En resumen:

* 🧮 **Primero** sumamos los primeros `num` elementos.
* ➡️ Luego **deslizamos la ventana** quitando el número que se va y sumando el nuevo que entra.
* ✅ Vamos guardando la **mayor suma encontrada**.

---

### 🧼 ¿Y eso de `arr[i]!`?

Eso le dice a TypeScript:

> “Este valor **no es `undefined`**, confía en mí”.

Es para evitar errores de compilación. Si no usas TypeScript, puedes ignorarlo.

---

Vamos a ver esto con **dibujos de ventanas deslizantes**, usando un ejemplo para que sea visual y fácil de entender.

---

### 🧪 Ejemplo

```ts
arr = [1, 2, 3, 4, 5]
num = 3
```

---

## 🔍 Paso 1: Primera ventana

Tomamos los primeros 3 números:

```
[1, 2, 3] 4  5
 ↑  ↑  ↑
```

**Suma inicial:**

```
1 + 2 + 3 = 6
```

✅ Guardamos esto como `maxSum = 6` y `tempSum = 6`.

---

## 🔁 Paso 2: Mover la ventana una posición a la derecha

Nueva ventana:

```
 1 [2, 3, 4] 5
    ↑  ↑  ↑
```

**Ya teníamos `tempSum = 6`**
Ahora actualizamos la suma:

```ts
tempSum = tempSum - arr[0] + arr[3]
        = 6 - 1 + 4
        = 9
```

✅ Nuevo `maxSum = 9` (porque es mayor que 6)

---

## 🔁 Paso 3: Mover otra vez

```
 1  2 [3, 4, 5]
       ↑  ↑  ↑
```

Actualizamos la suma:

```ts
tempSum = 9 - arr[1] + arr[4]
        = 9 - 2 + 5
        = 12
```

✅ Nuevo `maxSum = 12`

---

## 🚫 Ya no hay más elementos

* No se puede mover más la ventana (el array se terminó).
* La **mayor suma encontrada fue `12`**.

---

### 🧠 Ilustración Final

```
arr = [1,  2,  3,  4,  5]
       └──┬──┘
          6   (Primera ventana)

           └──┬──┘
              9   (Segunda ventana)

               └──┬──┘
                 12   (Tercera ventana)
```

---

### ✅ Resultado

```ts
return 12
```

---

