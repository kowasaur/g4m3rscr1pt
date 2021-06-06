const nearley = require("nearley");
const fs = require("fs");
const grammar = require("./giggles.js");

function hasExtension(file, extension) {
  if (file.split(".").pop() === extension) return true;
  else return false;
}

const filename = process.argv[2];
if (!hasExtension(filename, "sag")) {
  throw new Error("You must provide a .sag file");
}
const code = fs.readFileSync(filename, "utf8");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed(code);
console.log(parser.results);
