// const test = {
//   aNumber: 42,
//   func: function() {
//     return this.aNumber;
//   },
// };

// console.log(test.func());










const dog = {
  sound: 'woof',
  awake: true,
  goToSleep () {
    this.sound = 'snore'
  },
  wakeUp () {
    this.sound = 'woof'
  },
  beLoud () {
    console.log(this.sound)
  }
}

dog.beLoud()
dog.beLoud()
dog.beLoud()
dog.goToSleep()
dog.beLoud()
dog.beLoud()
dog.beLoud()
dog.wakeUp()
dog.beLoud()
dog.beLoud()
dog.beLoud()
dog.beLoud()
