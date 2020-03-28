const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", line => {
  input = line.split(" ").map(el => parseInt(el));
  rl.close();
}).on("close", () => {
  const a = parseInt(input[0]);

  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
});
