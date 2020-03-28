const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const a = parseInt(input[0]);
  // Code
  input.forEach(v => {
    console.log(v);
  });
  process.exit();
});
