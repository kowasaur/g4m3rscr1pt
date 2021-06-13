const moo = require("moo");
const { EOL } = require("os");

const lexer = moo.compile({
  keyword: ["yeah", "nah", "moment", "https://imgur.com/jWr67J8"],
  openblock: "??!?1!",
  closeblock: "!?!!??",
  JS: /I'M CHEATING\s*<[^]+>\s*I'M NOT CHEATING ANYMORE/,
  WS: /[ \t]+/,
  comment: /@.*?$/,
  // only vowels
  number: /[aeiou]+/,
  // e.g. ]this is a string[
  string: /](?:\\[]\\]|[^\n[\\])*\[/,
  lcurly: "{",
  rcurly: "}",
  slash: "/",
  // numbers and consonants only for variables and functions
  identifier: /[^aeiouAEIOU\W]+/,
  assign: ":",
  NL: { match: new RegExp(`[${EOL}]+`), lineBreaks: true },
});

module.exports = lexer;
