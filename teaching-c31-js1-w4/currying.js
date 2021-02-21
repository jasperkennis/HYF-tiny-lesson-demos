// Normal function
function greet(greeting, name) {
  return `${greeting} ${name}`;
}

// Curry function
function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  }
}

const welcomeGreeting = curryGreet('Welcome!');

welcomeGreeting('Deedee');
welcomeGreeting('Madyan');

greet('Welcome', 'Deedee');
greet('Welcome', 'Madyan');