/**
 * Function as sort of a class (kindof but not really)
 */
class Lion {
  constructor(food) {
    this.lionFood = food;
  }

  whatDoYouEat = function () {
    console.log(this.lionFood)
  }
}


const newYorkZooLion = new Lion('meat')
newYorkZooLion.whatDoYouEat()
