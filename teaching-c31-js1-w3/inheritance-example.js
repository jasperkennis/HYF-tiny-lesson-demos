/**
 * Show what inheritance is
 */
class Animal {
  constructor(food) {
    this.lionFood = food;
  }

  whatDoYouEat = function () {
    console.log(this.lionFood)
  }
}

class Lion extends Animal {
}

class Goat extends Animal {
  makeNoise() {
    console.log('Bleeeeeeeeeh')
  }
}


const newYorkZooLion = new Lion('meat')
newYorkZooLion.whatDoYouEat()

const newYorkZooGoat = new Goat('grass')
newYorkZooGoat.whatDoYouEat()
newYorkZooGoat.makeNoise()
