const createInstrumentSoundMaker = (sound) => {
  return (musicianName) => {
    console.log(`${musicianName} made the noice! ${sound} ${sound} ${sound}!!!`)
  }
}


// What does this do?
const trumpeterDoes =  createInstrumentSoundMaker('toot')

trumpeterDoes('John')



































// const trumpetSoundMaker = createInstrumentSoundMaker('toot')
// const drumsSoundMaker = createInstrumentSoundMaker('boom')

































// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
