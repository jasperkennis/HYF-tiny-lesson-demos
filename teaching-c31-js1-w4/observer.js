const objThatWillChange = {
  internals: {
    lala: 'abc'
  },

  // Exposed variable
  lala: 'abc',

  // Setter
  set lala(val) {
    // Call listener
    this.hardcodedListener()

    // Set internal value
    this.internals.lala = val
  },

  // Getter
  get lala() {
    return this.internals.lala
  },

  // Listener
  hardcodedListener() {
    console.log('a listener triggered')
  }
}

objThatWillChange.lala = 123
