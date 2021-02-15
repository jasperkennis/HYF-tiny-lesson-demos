const createInstrumentSoundMaker = (sound) => {
  return (musicianName) => {
    console.log(`${musicianName} made the noice! ${sound} ${sound} ${sound}!!!`)
  }
}


// What does this do?
const trumpeterDoes =  createInstrumentSoundMaker('toot')

trumpeterDoes('John')
trumpeterDoes('Sarah')
trumpeterDoes('David')

console.log(sound)
console.log(musicianName)































// const trumpetSoundMaker = createInstrumentSoundMaker('toot')
// const drumsSoundMaker = createInstrumentSoundMaker('boom')

































// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
