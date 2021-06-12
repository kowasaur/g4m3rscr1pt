const { hasExtension } = require("./util.js");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function main() {
  const filename = process.argv[2];
  // TODO: Refuse to compile if filename contains vowels
  if (!hasExtension(filename, "p0g")) {
    throw new Error("You must provide a .p0g file");
  }

  const astFilename = filename.replace(".p0g", ".ast");
  // const jsFilename = filename.replace(".p0g", ".js");

  await exec(`node src/parse.js ${filename}`);
  await exec(`node src/generate.js ${astFilename}`);
  // console.log((await exec(`node ${jsFilename}`)).stdout);
}

main().catch(err => console.error(err));
