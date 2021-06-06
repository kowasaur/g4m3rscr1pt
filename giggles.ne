@{%
const lexer = require("./lexer") 
%}

@lexer lexer

statement
  -> var_assign {% id %}

var_assign
  -> %identifier _ ":" _ expr
    {%
      data => ({
        type: "var_assign",
        var_name: data[0],
        value: data[4]
      })
    %}

expr
  -> %string {% id %}
  | %number {% id %}

_ -> %WS:*

__ -> %WS:+