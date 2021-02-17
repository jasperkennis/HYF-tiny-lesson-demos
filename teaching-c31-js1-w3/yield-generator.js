// Called a generator function:
function* exampleFunction(i) {
  yield i;
  yield i + 10;
  yield i + 100;
  yield i + 20;
  yield i + 40;
}

// const gen = exampleFunction(10);

// console.log(gen.next().value);
// console.log(gen.next().value);


const gen2 = exampleFunction(999);
for (const i of gen2) {
  console.log(i)
}


























// console.log(gen.next().value);
// // expected output: 20
