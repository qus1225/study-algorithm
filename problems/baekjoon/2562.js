const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const arr = input.map(v => parseInt(v));

  let max = {
    v: 0,
    i: 0
  };
  arr.forEach((v, i) => {
    if (v > max.v) {
      max.v = v;
      max.i = i;
    }
  });

  console.log(max.v);
  console.log(max.i + 1);
  process.exit();
});
