# g4m3rscr1pt

This is an esolang that transpiles to JavaScript. The language has its name because no variables, functions or file names are allowed to use vowels, inspired from [leetspeak](https://en.wikipedia.org/wiki/Leet). Everything else in the language has basically nothing to do with gaming and is instead just random things my friends and I thought of to be annoying to use.

The file extension for g4m3rscr1pt files is `.p0g`. Every g4m3rscr1pt program will loop forever with a 0.1 second delay between each repetition so to terminate a program you must throw an exception. The `examples` folder of this repo has some example g4m3rscr1pt programs.

## Installation

You will need node and npm.

```
npm install -g g4m3rscr1pt
```

I also recommend getting the g4m3rscr1pt [VSCode](https://marketplace.visualstudio.com/items?itemName=kowasaur.g4m3rscr1pt) extension for syntax highlighting.

## Usage

1. Create a file that ends with `.p0g` (make sure there's no vowels in the name).
2. Code in the file.
3. Transpile using `les gooo f1le.p0g output.js`.
   - If no output file is specified, the code will just be immediately executed instead.

## Numbers

Numbers in g4m3rscr1pt are base 5 and are represented with the vowels (`a` is 0, `e` is 1, `i` is 2, `o` is 3, `u` is 4). For example, `eo` is 8 and `uio` is 113.  
Note: when numbers are printed, they are displayed normally.

## Strings

You use `]` to open a string and `[` to close it. For example `]this is a string[`. Only inline strings exist.

## Variables

Variables can be any combination of consonants and numbers. For example `v`, `l3tt3r`, `mNb` and `9` are all valid variables. To assign a value to a variable, you write the name, then a colon and then the value like this:

```
n4m3: ]Joe[
d0ll4rs: oi
```

## Comments

Using an @ makes the rest of the line a comment. There are no multi-line comments.

```
@this is valid comment
tw0: i @ so is this
@ tw0: e
/R33333{tw0} @prints 2
```

## Commands

Functions in g4m3rscr1pt are called commands.

### Defining Commands

To define a command first write the name of the command, then `moment`. If it has any parameters, then write a pair of curly brackets and write the parameters within them, separated by a space. Don't include any curly brackets if there's no parameters. `??!?1!` is then used to start the definition and `!?!!??` to end it. Within those is where you write the code for the command. To return a value, write `https://imgur.com/jWr67J8` followed by the value. Here's an example:

```
@ addition command
4dd moment {x y} ??!?1!
  n1: /M1n7S{a e} @ negative 1
  ny: /D1V1D3{y n1} @ negative y
  https://imgur.com/jWr67J8 /M1n7S{x ny}
!?!!??
```

### Executing Commands

To execute a command, type a `/` and then the name of the command. If there's any arguments, add a pair of curly brackets and separate each argument within them with a space. Example:

```
@ use the add command defined above
/R33333{/4dd{i o}} @ prints 5
/BR4P @ throws an error
```

#### Super Commands

Using multiple `/` is called a super command. The value returned by the command is put back in as the first argument as many times as there are `/`. `99_b0ttl3s_2.p0g` in the `examples` folder utilises this.

```
x: /////M1n7S{ia e}
/R33333{x} @ prints 5
```

### Default Commands

These commands are predefined in every g4m3rscr1pt program. Any commands that use maths will throw an error if rounding the result is not a safe integer (according to JavaScript). Also note that since g4m3rscr1pt transpiles to JavaScript, it has type coercion. For example:

```
/M1n7S{ea u}  @ 1
/M1n7S{]5[ u} @ 1
```

#### R33333 {output}

Prints `output` to the console. Returns what is printed.

#### cl1ck1tyCl1ck {prompt}

Prints `prompt` to the console and returns the user's input.

#### M1n7S {x y}

Returns `x` minus `y`.

#### D1V1D3 {x y}

Returns `x` divided by `y`.

#### R00t {x y}

Returns `x` to the `y`th root.

#### chr1s {seconds}

Pauses everything for `seconds`.

#### f1r3tr7ck {text}

Returns `text` but red.

#### d1n0s47r {text}

Returns `text` but green.

#### sq4sh {string1 string2}

Returns `string1` concatonated with `string2`.

#### str1ng1fy {number}

Returns `number` as a string, represented using vowels.

```
/R33333{ea} @ prints 5
/R33333{/str1ng1fy{ea}} @ prints EA
```

#### ch4rC0d3 {string}

Returns the unicode number of the first character of `string`.

#### l3tt3r {string index}

Returns the character of `string` at `index`.

#### BR4P

Throws an error.

## YeahNah

The equivalent of a try/catch is a yeahnah. Everything in the `yeah` block is run until there's an exception, in which case everything in the nah block is run. For example:

```
yeah ??!?1!
  /R33333{]this is printed first[}
  /D1V1D3{e a} @this throws an error since you can't divide by 0
  /R33333{]this is never printed[}
!?!!?? nah ??!?1!
  /R33333{]this is printed second[}
!?!!??
```

## Cheating

If you just suck too much to completely use g4m3rscr1pt (or there's something you actually can't do) you can enter plain JavaScript like this:

```
I'M CHEATING <
  // Note: hello can't be used outside of JS since it has vowels
  const hello = "Hello, World!";
  console.log(hello);
> I'M NOT CHEATING ANYMORE
```

## Credit

I had a lot of help from [this](https://www.youtube.com/playlist?list=PLSq9OFrD2Q3C_R0VqKNG_yVzIL3JkiUrB) playlist by Toby Ho and I was inspired to create an esolang from [Truttle1](https://www.youtube.com/channel/UCm_dHxrHKK_fmoUgj9YnYqw).
