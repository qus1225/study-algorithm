const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const sum = input.reduce((a, c) => {
    let num = parseInt(c);
    const point = num > 40 ? num : 40;
    return a + point;
  }, 0);

  console.log(sum / 5);
  process.exit();
});
