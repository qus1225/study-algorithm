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
  const b = parseInt(input[1]);

  let hour = a;
  let min = b;

  min -= 45;

  if (min < 0) {
    min += 60;
    hour -= 1;

    if (hour < 0) {
      hour = 23;
    }
  }

  console.log(`${hour} ${min}`);

  process.exit();
});
