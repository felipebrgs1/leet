function isPermutation(str1: String, str2: String): boolean {
  str1 = str1.toLocaleLowerCase();
  str2 = str2.toLocaleLowerCase();
  if (str1.length != str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation("fouci", "fuoca"));
