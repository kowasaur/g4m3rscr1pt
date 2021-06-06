const { hasExtension } = require("./util.js");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function main() {
  const filename = process.argv[2];
  if (!hasExtension(filename, "sag")) {
    throw new Error("You must provide a .sag file");
  }

  const astFilename = filename.replace(".sag", ".ast");
  const jsFilename = filename.replace(".sag", ".js");

  await exec(`node parse.js ${filename}`);
  await exec(`node generate.js ${astFilename}`);
  console.log(await (await exec(`node ${jsFilename}`)).stdout);
}

main().catch(err => console.error(err));
