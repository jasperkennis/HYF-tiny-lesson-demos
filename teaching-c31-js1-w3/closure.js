const createInstrumentSoundMaker = (sound) => {
  return () => {
    console.log(sound)
  }
}

createInstrumentSoundMaker()

// What does this do?
createInstrumentSoundMaker('toot')
createInstrumentSoundMaker('boom')



































// const trumpetSoundMaker = createInstrumentSoundMaker('toot')
// const drumsSoundMaker = createInstrumentSoundMaker('boom')

































// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
// trumpetSoundMaker()
