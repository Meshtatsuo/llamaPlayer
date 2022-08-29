export function mutation(arr) {
  let replaceWords = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();
  let newString = "";

  for (let i = 0; i < string2.length; i++) {
    if (replaceWords.includes(string2[i])) {
      newString += string2[i];
    } else {
      return newString;
    }
  }
  return newString;
}
