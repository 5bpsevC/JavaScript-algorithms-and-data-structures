// Dadas dos cadenas, escribe una función para determinar si la segunda cadena es un anagrama de la primera.
// Un anagrama es una palabra, frase o nombre que se forma reordenando las letras de otra, como "cinema" , que se forma a partir de "iceman" .
function validAnagram(arr1: string, arr2: string) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const anagram: { [key: string]: number } = {};

  for (let char of arr1) {
    if (anagram[char]) {
      anagram[char] += 1;
    } else {
      anagram[char] = 1;
    }
  }

  for (let char of arr2) {
    if (!anagram[char]) {
      return false;
    } else {
      anagram[char]--;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("cinema", "iceman")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
