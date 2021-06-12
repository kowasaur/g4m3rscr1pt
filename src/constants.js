const numbers = [
  ["a", "0"],
  ["e", "1"],
  ["i", "2"],
  ["o", "3"],
  ["u", "4"],
];

const identifierChars = {
  0: "a",
  1: "e",
  2: "i",
  3: "o",
  4: "u",
  5: "A",
  6: "E",
  7: "I",
  8: "O",
  9: "U",
};

const wrapperStart = `
async function main() {
`;
const wrapperEnd = `
}

(async () => {
  while (true) {
    await main();
    await chr1s(0.1);
  }
})();`;

module.exports = {
  numbers,
  identifierChars,
  wrapperStart,
  wrapperEnd,
};
