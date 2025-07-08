function isPermutation(str1: string, str2: string): boolean {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(isPermutation("fouci", "fuoca")); // false
console.log(isPermutation("fouci", "cifou")); // true
