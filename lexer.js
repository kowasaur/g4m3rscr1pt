const moo = require("moo");
const fs = require("fs");

const lexer = moo.compile({
  JS: /I'M CHEATING\s*<[^]+>\s*I'M NOT CHEATING ANYMORE/,
  WS: /[ \t]+/,
  comment: /@.*?$/,
  // only vowels
  number: /[aeiou]+/,
  // e.g. ]this is a string[
  string: /](?:\\["\\]|[^\n"\\])*\[/,
  lcurly: "{",
  rcurly: "}",
  question: "?",
  slash2: "//",
  slash: "/",
  // numbers and consonants only for variables and functions
  identifier: /[^aeiouAEIOU\W]+/,
  assign: ":",
  // keyword: ["while", "if", "else", "moo", "cows"],
  NL: { match: /\n/, lineBreaks: true },
});

module.exports = lexer;

function main() {
  const code = fs.readFileSync("./example.sag", "utf8");
  lexer.reset(code);

  while (true) {
    const token = lexer.next();
    if (!token) break;
    console.log(token);
  }
}
