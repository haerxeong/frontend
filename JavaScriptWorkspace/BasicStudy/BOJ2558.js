let [A, B] = require("fs").readFileSync("ex.txt").split("\n");
A = Number(A);
B = Number(B);
console.log(A + B);
