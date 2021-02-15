const exampleFunction = (name, sound) => {console.log(`${name} makes this sound: ${sound}`)}

exampleFunction.call(null, 'Henk', 'Toot')
exampleFunction.apply(null, ['Henk', 'Toot'])
