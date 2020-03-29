const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const burgers = [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];
  const beverages = [parseInt(input[3]), parseInt(input[4])];

  burgers.sort(sortFunc);
  beverages.sort(sortFunc);

  console.log(burgers[0] + beverages[0] - 50);

  function sortFunc(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  }

  process.exit();
});
