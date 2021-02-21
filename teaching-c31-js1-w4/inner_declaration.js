function printGreaterThan10(num) {
  let print;

  if (num > 10) {
    print = function greaterThan10() {
      console.log('Number is greater than 10');
    }
  } else {
    print = function lowerThan10() {
      console.log('Number is lower than 10');
    }
  }

  print();
}


printGreaterThan10(3);