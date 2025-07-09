function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  const count = {};
  for (const letter of s) {
    count[letter] = (count[letter] || 0) + 1;
  }
  for (const letter of t) {
    if (!count[letter]) {
      return false;
    }
    count[letter]--;
  }

  return true;
}

isAnagram("aacc", "ccac");
