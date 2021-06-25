#!/usr/bin/env node
const generate = require("./generate.js");
const parse = require("./parse.js");
const { hasExtension, containsVowel } = require("./util.js");
const fs = require("fs");

const filename = process.argv[3];

if (!hasExtension(filename, "p0g")) {
  throw new Error("You must provide a .p0g file");
} else if (containsVowel(filename.split("/").slice(-1)[0])) {
  throw new Error("Filename cannot contain vowels");
}

const p0g = fs.readFileSync(filename, "utf8");
const ast = parse(p0g);
const js = generate(ast);

const outputFilename = process.argv[4];
if (outputFilename) {
  fs.writeFileSync(outputFilename, js);
  console.log(`Transpiled to ${outputFilename}`);
} else eval(js);
