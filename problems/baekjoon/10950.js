const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const caseNum = parseInt(input[0]);

  for (let i = 1; i <= caseNum; i++) {
    const [a, b] = input[i].split(" ");
    console.log(parseInt(a) + parseInt(b));
  }

  process.exit();
});
