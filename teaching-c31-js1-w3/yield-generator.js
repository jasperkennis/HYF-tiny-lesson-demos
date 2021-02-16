// Called a generator function:
function* exampleFunction(i) {
  yield i;
  yield i + 10;
}

const gen = exampleFunction(10);

console.log(gen)

console.log(gen.next());
// console.log(gen.next().value);

// console.log(gen.next().value);
// // expected output: 20
