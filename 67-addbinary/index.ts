function isUnique(Text: string): boolean {
  if (Text.length > 256) {
    //caso passe é garantido que tenha um repetido ASCII tem 256
    return false;
  }
  let arr = [];
  let temp: unknown;
  for (let i = 0; i < Text.length; i++) {
    temp = Text[i];
    if (arr.includes(temp)) {
      return false;
    }
    arr.push(temp);
    //console.log(arr);
  }

  return true;
}

console.log(isUnique("tesd"));
