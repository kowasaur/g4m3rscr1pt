// The end result of this is the same as s7m.p0g

const fs = require("fs")
const file = fs.readFileSync("input.txt", "utf8")
const sum = file.split("\n").reduce((a,b) => Number(a) + Number(b))
console.log(sum);
