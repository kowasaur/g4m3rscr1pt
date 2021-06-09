@{%
  const lexer = require("./lexer") 
%}

@lexer lexer

program
  -> _ml statements _ml
    {%
      data => (data[1])
    %}

statements
  ->  statement (__lb_ statement):*
    {%
      data => {
        const repeated = data[1];
        const restStatements = repeated.map(chunks => chunks[1]);
        return [data[0], ...restStatements];
      }
    %}

statement
  -> var_assign {% id %}
  | fun_call {% id %}
  | %JS 
    {%
      data => ({...data[0], value: data[0].value
        .match(/I'M CHEATING\s*<([^<]+)>\s*I'M NOT CHEATING ANYMORE/)[1]})
    %}

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
  -> "/" %identifier _ "{" _ml (arg_list _ml):? "}"
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
  | arg_list __ml expr
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

# Optional multi-line whitespace
_ml -> (%WS | %NL):*

# Mandatory multi-line whitespace
__ml -> (%WS | %NL):+

# Mandatory line-break with optional whitespace around it
__lb_ -> (_ %comment:* %NL):+ _