class Solution {
  private nums: number[];
  private target: number;

  constructor(nums: number[], target: number) {
    this.nums = nums;
    this.target = target;
  }

  twoSum(): number[] {
    let left = 0;
    let right = this.nums.length - 1;

    while (left < right) {
      const sum = this.nums[left]! + this.nums[right]!;
      if (sum === this.target) {
        return [left + 1, right + 1];
      } else if (sum < this.target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  }
}

export const twoSumSolution = new Solution([2, 7, 11, 15], 9);
