const number = 100;
const string = 'Jay';
const arr = [1, 2, 3, 4, 5];
const obj1 = {
  value: 'a',
};
const obj2 = {
  value: 'b',
};
const obj3 = obj2;

function change(number, string, _obj1, _obj2, _arr) {
  number = number * 10;
  string = 'Pete';
  _arr.push(6);
  _obj1 = {
    value: 'e',
  };
  _obj2.value = 'c';
  console.log('obj1 inside function: ', _obj1.value); // output: e
}

change(number, string, obj1, obj2, arr);
console.log(number); // output: 100
console.log(string); // output: Jay
console.log(arr); // output: [ 1, 2, 3, 4, 5, 6 ]
console.log(obj1.value); // output: a
console.log(obj2.value); // output: c
console.log(obj3.value); // output: c
