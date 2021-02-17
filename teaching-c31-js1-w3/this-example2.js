/**
 * Illustrates the difference between traditional and arrow functions
 */
const dog = {
  sound: 'woof',
  awake: true,
  goToSleep: function () {
    this.sound = 'snore'
  },
  wakeUp: (that) => {
    that.sound = 'woof'
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
dog.wakeUp(dog)
dog.beLoud()
dog.beLoud()
dog.beLoud()
dog.beLoud()
