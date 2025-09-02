// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

function linearSearch(num: number[], value: number) {
  for (let index = 0; index < num.length; index++) {
    if (num[index] === value) {
      return index;
    }
  }
  return -1;
}

const res = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
console.log(res);

const americaCities = [
  "New York 🗽",
  "Los Angeles 🌴",
  "Chicago 🌆",
  "Houston 🤠",
  "Miami 🌞",
  "Seattle ☔",
  "Denver 🏔️",
  "Boston 🎓",
  "Phoenix 🌵",
  "Las Vegas 🎰",
];

const searchCity = (cities: string[], city: string) => {
  for (let index = 0; index < cities.length; index++) {
    if (cities[index] === city) return index;
  }
  return -1;
};
console.log(searchCity(americaCities, "Phoenix 🌵"));
