/**
 * Function as sort of a class (kindof but not really)
 */
const fakeLionClass = function (food) {
  this.lionFood = food;

  this.whatDoYouEat = function () {
    console.log(this.lionFood)
  }

  this.beLoud = function () {
    console.log(this.sound)
  }
}

const newYorkZooLion = new fakeLionClass('meat')
newYorkZooLion.whatDoYouEat()

const RottedamZooLion = new fakeLionClass('grass')
RottedamZooLion.whatDoYouEat()
// RottedamZooLion.beLoud()




fakeLionClass.prototype.sound = 'roar'

console.log(newYorkZooLion.hasOwnProperty('sound'))
// console.log(newYorkZooLion.hasOwnProperty('lionFood'))
// newYorkZooLion.beLoud()
