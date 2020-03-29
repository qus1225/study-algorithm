const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input = line.split(" ").map(el => parseInt(el));
  rl.close();
}).on("close", function() {
  const a = parseInt(input[0]);
  let result = "";

  for (let i = 1; i <= a; i++) {
    Array.from({ length: i }, () => {
      result += "*";
    });
    result += "\n";
  }

  for (let i = a - 1; i > 0; i--) {
    Array.from({ length: i }, () => {
      result += "*";
    });
    result += "\n";
  }

  console.log(result);

  process.exit();
});
