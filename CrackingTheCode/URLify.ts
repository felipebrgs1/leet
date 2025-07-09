function URLify(text: String, size: number): string {
  let textFormat = text.split(" ").join("%20");

  return textFormat.slice(0, size);
}

console.log(URLify("Mr John Smith", 13));
