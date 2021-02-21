/**
 * A closure is when a function is able to remember and access its lexical scope
 * even when that function is executing outside its lexical scope.
 */


function foo() {  // 'scope of foo' aka lexical scope for bar
   var memory = 'hello closure'
   return function bar() {
      console.log(memory)
   }
}

// returns the bar function and assigns it to the identifier 'closure’;
const closure = foo()

closure() // hello closure

/**
 * So: lexical scope is the author-time scope created by a closure. It is the
 * ‘outer’ scope of a function which is defined inside a closure.
 *
 * Closure uses the concept of lexical scope.
 */
