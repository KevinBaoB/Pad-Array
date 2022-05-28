// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value = null) => {
  if (array.length === minSize || minSize === 0) {
    return array;
  }
  for (let i = 0; i <= minSize - array.length; i++) {
    if (value === null) {
      array.push("None");
    } else {
      array.push(value);
    }
  }
  return array;
};

console.log(pad([1, 2, 3], 5));
console.log(pad([1, 2, 3], 5, "apple"));
console.log(pad([1, 2, 3], 3));
