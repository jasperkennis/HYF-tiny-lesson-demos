const myArray = ['a', 'b', 'c', 'd', 'e']

const myPrinter = (letter) => {
  console.log(letter)
}

myArray.forEach(myPrinter)

console.log('=========')

// for (let i = 0; i < myArray.length; i++) {
//   const letter = myArray[i];
//   console.log(letter);
//   i++;
// }

console.log('=========')

const startFrom = myArray.length - 1
for (let i = startFrom; i >= 0; i--) {
  const letter = myArray[i];
  console.log(letter);
}
