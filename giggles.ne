@{%
  const lexer = require("./lexer") 
%}

@lexer lexer

statements
  -> statement
    {%
      data => ([data[0]])
    %}
  | statements %NL statement
    {%
      data => ([...data[0], data[2]])
    %}

statement
  -> var_assign {% id %}
  | fun_call {% id %}

var_assign
  -> %identifier _ ":" _ expr
    {%
      data => ({
        type: "var_assign",
        var_name: data[0],
        value: data[4]
      })
    %}

fun_call
  -> "/" %identifier _ "{" _ (arg_list _):? "}"
    {%
      data => ({
        type: "fun_call",
        fun_name: data[1],
        arguments: data[5] ? data[5][0] : []
      })
    %}

arg_list
  -> expr
    {%
      data => ([data[0]])
    %}
  | arg_list __ expr
    {%
      data => ([...data[0], data[2]])
    %}

expr
  -> %string {% id %}
  | %number {% id %}
  | %identifier {% id %}
  | fun_call {% id %}

_ -> %WS:*

__ -> %WS:+
