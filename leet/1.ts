function twoSum(nums: number[], target: number) {
  const temp: { [key: number]: number } = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (temp[target - num] !== undefined) {
      return [temp[target - num], index];
    }
    temp[num] = index;
  }

  return [];
}

console.log(twoSum([3, 2, 4, 5, 3], 6));
