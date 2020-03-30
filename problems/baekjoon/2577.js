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
  const b = parseInt(input[1]);
  const c = parseInt(input[2]);

  const result = a * b * c;

  let map = {};
  result
    .toString()
    .split("")
    .forEach(v => {
      map[v] = map[v] ? map[v] + 1 : 1;
    });

  for (let i = 0; i <= 9; i++) {
    console.log(map[i] || 0);
  }

  process.exit();
});
