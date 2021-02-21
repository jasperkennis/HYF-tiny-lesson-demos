const arr = ['Amsterdam', "Barcelona", "New York", "Bangkok", "Sydney"];

const new_array = arr.map(function callback(item, index) {
  return item.toUpperCase();
});

console.log(new_array);

const arr2 = [1,2,3,4,5];
const total = arr2.reduce((acc, number) => acc + number, 0);

console.log(total);




