const nearley = require("nearley");
const grammar = require("./grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

function parse(p0g) {
  parser.feed(p0g);
  if (parser.results.length > 1) throw new Error("Error: ambiguous grammar detected");
  else if (parser.results.length < 1) throw new Error("Error: no parse found");
  return parser.results[0];
}

module.exports = parse;
