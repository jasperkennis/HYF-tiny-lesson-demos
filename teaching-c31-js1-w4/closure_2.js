function counter() {
  let count = 0;

  return function incrementCounter() {
    count++;
    return count;
  }
}

const incCounter = counter();

incCounter();
incCounter();
incCounter();
incCounter();

