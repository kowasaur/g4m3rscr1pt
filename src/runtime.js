/* This code is apart of the standard library */
const readline = require("readline");
const https = require("https");
const fs = require("fs");

let verse = ":)";
const options = {
  hostname: "labs.bible.org",
  port: 443,
  path: "/api/?passage=random&type=json",
  method: "GET",
};
const req = https.request(options, res => res.on("data", d => (verse = JSON.parse(d)[0].text)));
req.end();

/**
 * Throws with bible verse
 */
function BR4P() {
  throw new Error(f1r3tr7ck(verse));
}

// This can log things that can turn into strings as well
function R33333(stringConveritble) {
  let output = String(stringConveritble);
  // if colour
  if (output[0] === "\x1b") {
    const justText = output.slice(5, output.length - 4).toUpperCase();
    output = stringConveritble.charAt(3) == "1" ? f1r3tr7ck(justText) : d1n0s47r(justText);
    // normal case
  } else output = output.toUpperCase();
  console.log(output);
  // So that super commands can be used
  return output;
}

// Any maths will fail if the result is not safe
function calculate(maths) {
  if (!Number.isSafeInteger(Math.round(maths))) BR4P();
  else return maths;
}

function M1n7S(x, y) {
  return calculate(x - y);
}

function D1V1D3(x, y) {
  return calculate(x / y);
}

function R00t(x, y) {
  return calculate(x ** (1 / y));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function cl1ck1tyCl1ck(prompt) {
  return new Promise(resolve => rl.question(prompt, response => resolve(response)));
}

async function chr1s(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function f1r3tr7ck(text) {
  return `\x1b[31m${text}\x1b[0m`;
}

function d1n0s47r(text) {
  return `\x1b[32m${text}\x1b[0m`;
}

function sq4sh(str1, str2) {
  return str1 + str2;
}

const numbers = [
  ["a", "0"],
  ["e", "1"],
  ["i", "2"],
  ["o", "3"],
  ["u", "4"],
];

/**
 * Converts number to vowel string
 * @param {number} num
 * @example
 * str1ng1fy(23) // returns "uo"
 */
function str1ng1fy(num) {
  // I couldn't think of a good name for this variable
  let numStr = num.toString(5);
  numbers.forEach(pair => (numStr = numStr.replace(new RegExp(pair[1], "g"), pair[0])));
  return numStr;
}

/**
 * Returns the unicode number of the first character in the string
 * @param {string} char
 */
function ch4rC0d3(char) {
  return char.charCodeAt(0);
}

/**
 * @param {string} str
 * @param {number} index
 */
function l3tt3r(str, index) {
  return str.charAt(index);
}


function f1l3(path) {
  return fs.readFileSync(path, "utf8");
}

/* Your code */
