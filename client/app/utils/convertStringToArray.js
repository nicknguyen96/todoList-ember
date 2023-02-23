export function convertStringToArray(input) {
  let newArray = input.split(' ');
  newArray = newArray.filter((str) => str.trim() != '');
  return newArray;
}
