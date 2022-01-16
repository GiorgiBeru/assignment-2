// flatten arrays into a single array
function flatten(arr) {
  let flat = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flat = flat.concat(flatten(element));
    } else {
      flat.push(element);
    }
  });
  return flat;
}
const arrays = [["first", "second"], [1, 2, 3], [true]];
console.log(flatten(arrays));
// ['first', 'second', 1, 2, 3, true],
