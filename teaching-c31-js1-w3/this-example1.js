// const test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
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
