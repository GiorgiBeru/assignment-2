const people = [
  {
    name: "George",
    age: 25,
  },
  {
    name: "Michael",
    age: 26,
  },
  {
    name: "Anna",
    age: 25,
  },
  {
    name: "Kate",
    age: 27,
  },
  {
    name: "James",
    age: 27,
  },
  {
    name: "Peter",
    age: 32,
  },
  {
    name: "Jacob",
    age: 27,
  },
];
// write function groupBy(array, key), which will group people by the given key
function groupBy(array, key) {
  const arrOfKeys = [];
  for (const elem of array) {
    for (const prop in elem) {
      if (prop === key) arrOfKeys.push(elem[prop]);
    }
  }
  let uniqueArray = arrOfKeys.filter(function (item, index) {
    return arrOfKeys.indexOf(item) == index;
  });
  let answerObj = {};
  uniqueArray.map((el) => {
    let value = array.filter((person) => person[key] === el);
    Object.assign(answerObj, { [el]: value });
  });
  return answerObj;
}
console.log(groupBy(people, "age"));
