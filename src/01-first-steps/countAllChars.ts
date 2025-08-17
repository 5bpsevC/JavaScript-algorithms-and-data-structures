function countAllChars(str: string) {
  const result: { [key: string]: number } = {};

  for (const char of str) {
    const lowerChar = char.toLowerCase();
    // si existe result[lowerChar]suma 1 y si no existe es 0
    result[lowerChar] = (result[lowerChar] || 0) + 1;
  }

  return result;
}

console.log(countAllChars("Pepe el Dinosaurio"));
console.log(countAllChars("Pepeee el Dinosaaaurio"));
