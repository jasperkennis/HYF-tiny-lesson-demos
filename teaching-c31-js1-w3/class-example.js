class Lion {
  constructor(food = 'grass') {
    this.lionFood = food;
  }

  whatDoYouEat = function () {

    console.log(this.lionFood)
  }
}


const newYorkZooLion = new Lion('meat')
const rotterdamZooLion = new Lion()
newYorkZooLion.whatDoYouEat()
rotterdamZooLion.whatDoYouEat()
