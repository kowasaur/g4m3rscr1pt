const fs = require("fs");
const { replaceStringCharacters, jsifyString } = require("./util.js");
const { numbers, wrapperStart, wrapperEnd } = require("./constants.js");

function generateJsForStatementOrExpr(node) {
  switch (node.type) {
    case "fun_def":
      const params = node.parameters.map(param => generateJsForStatementOrExpr(param)).join(", ");
      const statements = generateJsForStatements(node.statements);
      return `async function ${jsifyString(node.name)}(${params}) {\n${statements}\n}`;

    case "return":
      return `return ${generateJsForStatementOrExpr(node.expr)}`;

    case "var_assign":
      const varName = jsifyString(node.var_name.value);
      const jsExpr = generateJsForStatementOrExpr(node.value);
      // let can't be used since it won't work if the variables value changes
      return `${varName} = ${jsExpr}`;

    case "fun_call":
      const funName = jsifyString(node.fun_name.value);
      let firstArg;
      let argList;
      if (node.arguments.length) {
        firstArg = generateJsForStatementOrExpr(node.arguments[0]);
        argList = node.arguments
          .slice(1)
          .map(arg => generateJsForStatementOrExpr(arg))
          .join(", ");
      } else firstArg = argList = "";
      const runs = node.runs;
      return `${`await ${funName}(`.repeat(runs)}${firstArg}${
        argList ? `, ${argList})`.repeat(runs) : ")".repeat(runs)
      }`;

    case "try_catch":
      const tryStatements = generateJsForStatements(node.try);
      const catchStatements = generateJsForStatements(node.catch);
      return `try {\n${tryStatements}\n} catch {\n${catchStatements}\n}`;

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
  return lines.join(";\n") + ";";
}

const runtimeJs = fs.readFileSync("src/runtime.js", "utf8");

function generate(ast) {
  return runtimeJs + wrapperStart + generateJsForStatements(ast) + wrapperEnd;
}

module.exports = generate;
