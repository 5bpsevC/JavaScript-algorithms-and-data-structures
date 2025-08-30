// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// (Brute Force – O(n²))
// ⚠️ Problema: Puede devolver el mismo índice dos veces (ej: [0,0]).
// 👉 Se suele arreglar con for (let j = i + 1; j < nums.length; j++).
function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! + nums[j]! === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index]!;
    if (complement in numMap) {
      return [numMap[complement]!, index];
    }
    numMap[nums[index]!] = index;
  }

  return [];
}

// Tengo una functión que recibe un array de números enteros, y un número entero llamado target
// Esta functión retorna la suma de los índices que sumados coiciden con el target

// La primera solución a implementar será de fuerza bruta On*2
// La segunda solución a implementar será de hashmap

console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
