const people = [
  {
    name: "Ben",
    age: 30,
    occupation: "Banker",
    salary: 3000,
    pets: [],
  },
  {
    name: "Jane",
    age: 26,
    occupation: "Teacher",
    salary: 1200,
    pets: ["dog"],
  },
  {
    name: "John",
    age: 31,
    occupation: "Developer",
    salary: 4000,
    pets: ["dog", "cat"],
  },
  {
    name: "Mike",
    age: 26,
    occupation: "Developer",
    salary: 5000,
    pets: [],
  },
  {
    name: "Tom",
    age: 34,
    occupation: "Teacher",
    salary: 3400,
    pets: ["dog", "parrot"],
  },
];

// 1. Calculate sum of all teacher salaries
function sumSalaries() {
  let sum = 0;
  people
    .filter((elem) => Object.values(elem).includes("Teacher"))
    .map((person) => (sum += person.salary));
  return sum;
}
// 2. Create a new array with the same people but double salaries of developers
function doubleDeveloperMoney() {
  let newArr = people.map((person) => {
    if (person.occupation === "Developer") person.salary = person.salary * 2;
    return person;
  });
}
// 3. Filter people who has a dog
function dogOwners() {
  return people.filter((person) => person.pets.includes("dog"));
}

// 4. Figure out if all the people have pets or not
function noneOwners() {
  return people.every((person) => person.pets.length > 0)
    ? "All own at least one pet"
    : "At least one doesn't own a pet";
}

// 5. Figure out if any of the people are above age 30
function aboveThirty() {
  return people.every((person) => person.age < 30)
    ? "Everyone is below 30"
    : "At least one is above 30";
}
