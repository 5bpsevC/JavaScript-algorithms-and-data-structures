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
console.log("Anagrama: ", validAnagram("anagram", "nagaram"))
