var closures = [];

function create() {
  for (var i = 0; i < 5; i++) {
    closures[i] = function() {
      console.log("i = " + i);
    };
  }
}

function run() {
  for (var i = 0; i < 5; i++) {
    closures[i]();
  }
}

create();
run();