const nearley = require("nearley");
const fs = require("fs");
const grammar = require("./giggles.js");
const { hasExtension } = require("./util.js");

const filename = process.argv[2];
if (!hasExtension(filename, "sag")) {
  throw new Error("You must provide a .sag file");
}
const code = fs.readFileSync(filename, "utf8");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed(code);
if (parser.results.length > 1) throw new Error("Error: ambiguous grammar detected");
else if (parser.results.length < 1) throw new Error("Error: no parse found");

const ast = parser.results[0];
const outputFilename = filename.replace(".sag", ".ast");
fs.writeFileSync(outputFilename, JSON.stringify(ast, null, 2));
console.log(`Wrote ${outputFilename}`);
