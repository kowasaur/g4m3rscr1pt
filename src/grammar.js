// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const lexer = require("./lexer") 
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "program", "symbols": ["_ml", "statements", "_ml"], "postprocess": 
        data => (data[1])
            },
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["__lb_", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statement", "statements$ebnf$1"], "postprocess": 
        data => {
          const repeated = data[1];
          const restStatements = repeated.map(chunks => chunks[1]);
          return [data[0], ...restStatements];
        }
            },
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["fun_call"], "postprocess": id},
    {"name": "statement", "symbols": [(lexer.has("JS") ? {type: "JS"} : JS)], "postprocess": 
        data => ({...data[0], value: data[0].value
          .match(/I'M CHEATING\s*<([^<]+)>\s*I'M NOT CHEATING ANYMORE/)[1]})
            },
    {"name": "var_assign", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":":"}, "_", "expr"], "postprocess": 
        data => ({
          type: "var_assign",
          var_name: data[0],
          value: data[4]
        })
            },
    {"name": "fun_call$ebnf$1$subexpression$1", "symbols": ["arg_list", "_ml"]},
    {"name": "fun_call$ebnf$1", "symbols": ["fun_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fun_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fun_call", "symbols": [{"literal":"/"}, (lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"{"}, "_ml", "fun_call$ebnf$1", {"literal":"}"}], "postprocess": 
        data => ({
          type: "fun_call",
          fun_name: data[1],
          arguments: data[5] ? data[5][0] : []
        })
            },
    {"name": "arg_list", "symbols": ["expr"], "postprocess": 
        data => ([data[0]])
            },
    {"name": "arg_list", "symbols": ["arg_list", "__ml", "expr"], "postprocess": 
        data => ([...data[0], data[2]])
            },
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expr", "symbols": ["fun_call"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "_ml$ebnf$1", "symbols": []},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_ml$ebnf$1", "symbols": ["_ml$ebnf$1", "_ml$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_ml", "symbols": ["_ml$ebnf$1"]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1$subexpression$1"]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1", "__ml$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__ml", "symbols": ["__ml$ebnf$1"]},
    {"name": "__lb_$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "__lb_$ebnf$1$subexpression$1$ebnf$1", "symbols": ["__lb_$ebnf$1$subexpression$1$ebnf$1", (lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__lb_$ebnf$1$subexpression$1", "symbols": ["_", "__lb_$ebnf$1$subexpression$1$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1$subexpression$1"]},
    {"name": "__lb_$ebnf$1$subexpression$2$ebnf$1", "symbols": []},
    {"name": "__lb_$ebnf$1$subexpression$2$ebnf$1", "symbols": ["__lb_$ebnf$1$subexpression$2$ebnf$1", (lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__lb_$ebnf$1$subexpression$2", "symbols": ["_", "__lb_$ebnf$1$subexpression$2$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1", "__lb_$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__lb_", "symbols": ["__lb_$ebnf$1", "_"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();