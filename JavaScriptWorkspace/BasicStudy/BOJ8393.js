//const [n] = require('fs').readFileSync(0, 'utf-8').map(Number);
const n = Number(require("fs").readFileSync("/dev/stdin").toString());

let sum = 0;

for (let i = 1; i <= n; i++) sum += i;

console.log(sum);
