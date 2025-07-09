function containsDuplicate(nums: number[]): boolean {
  let setarr = new Set(nums);
  if (nums.length != setarr.size) {
    return true;
  }
  return false;
}
