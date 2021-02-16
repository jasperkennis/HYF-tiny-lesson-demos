/**
 * Illustrates the use of the different functions, and how a function has a
 * scope too.
 *
 * Sidenote, this is also one of the ways a "class" was created with js before
 * ES6
 */
(function () {
  lionFood = 'meat'; // Notice that I didn't define "const"; implicit "this."
  const lionFood = 'meat'; // Notice that I didn't define "const"; implicit "this."

  console.log(this.lionFood);
  console.log(lionFood);

  // lion = {
  //   sound: 'roar',
  //   eat: () => {
  //     console.log(`The lion is eating ${this.lionFood}`)
  //   },
  //   beLoud() {
  //     console.log(this.sound)
  //   }
  // };

  // lion.beLoud()
  // lion.eat()
})()
