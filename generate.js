const fs = require("fs");
const { hasExtension, replaceStringCharacters, jsifyString } = require("./util.js");
const { numbers } = require("./constants.js");

function generateJsForStatementOrExpr(node) {
  switch (node.type) {
    case "var_assign":
      const varName = jsifyString(node.var_name.value);
      const jsExpr = generateJsForStatementOrExpr(node.value);
      return `let ${varName} = ${jsExpr};`;

    case "fun_call":
      const funName = jsifyString(node.fun_name.value);
      const argList = node.arguments.map(arg => generateJsForStatementOrExpr(arg)).join(", ");
      return `${funName}(${argList})`;

    case "comment":
      return node.value.replace("@", "//");

    case "string":
      /* The reason why I didn't use the replaceStringCharacters function here is 
      that the [ broke the regex */
      return node.value.replace("]", "'").replace("[", "'");
    case "number":
      return parseInt(replaceStringCharacters(node.value, numbers), 5);
    case "identifier":
      node.value = jsifyString(node.value);
    case "JS":
      return node.value;
    default:
      throw new Error(`Unhandled AST node type ${node.type}`);
  }
}

function generateJsForStatements(statements) {
  const lines = [];
  statements.forEach(statement => {
    const line = generateJsForStatementOrExpr(statement);
    lines.push(line);
  });
  return lines.join("\n");
}

const filename = process.argv[2];
if (!hasExtension(filename, "ast")) throw new Error("You must provide a .ast file");

const astJson = fs.readFileSync(filename, "utf8");
const runtimeJs = fs.readFileSync("./runtime.js", "utf8");
const statements = JSON.parse(astJson);
const jsCode = generateJsForStatements(statements) + "\n\n" + runtimeJs;
const outputFilename = filename.replace(".ast", ".js");
fs.writeFileSync(outputFilename, jsCode);
console.log(`Wrote ${outputFilename}`);
