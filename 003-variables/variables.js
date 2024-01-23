/* 
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

    Automatically
    Using var
    Using let
    Using const 
*/
// Automatically
x = 5;
y = 6;
z = x + y;
document.getElementById("auto").innerHTML = "The value of z :" + z;
// Note: It is considered good programming practice to always declare variables before use.

// Using var
var x1 = 5;
var y1 = 6;
var z1 = x1 + y1;
document.getElementById("var").innerHTML = "The value of z1 :" + z1;
/* Note:
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.
*/

// Using let
let x2 = 5;
let y2 = 6;
let z2 = x2 + y2;
document.getElementById("let").innerHTML = "The value of z2 :" + z2;

// Using const
const x3 = 5;
const y3 = 6;
const z3 = x3 + y3;
document.getElementById("const").innerHTML = "The value of z3 :" + z3;

// Mixed Examples
const x4 = 5; //These are constant values and cannot be changed.
const y4 = 6;
let z4 = x4 + y4; //The value z4 can be changed.
document.getElementById("mixed").innerHTML = "The value of z4 :" + z4;

/*  When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

/* The Assignment Operator
    In JavaScript, the equal sign (=) is an "assignment" (ATAMA) operator, not an "equal to" operator.
    This is different from algebra. The following does not make sense in algebra:
    x = x + 5;
    In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

    Note: The "equal to" operator is written like == in JavaScript.
*/

/* JavaScript Data Types
- JavaScript variables can hold numbers like 100 and text values like "John Doe".
- In programming, text values are called text strings.
- Strings are written inside double or single quotes. Numbers are written without quotes.
- If you put a number in quotes, it will be treated as a text string.
*/
const pi = 3.14;
let person = "Samet Polat";
let answer = "Yes, I'm";
document.getElementById("data").innerHTML = pi + "<br>" + person + "<br>" + answer;

/* One Statement Many Variables
Creating a variable in JavaScript is called "declaring" a variable.
You declare a JavaScript variable with the var or the let keyword: 

You can declare many variables in one statement.
Start the statement with let and separate the variables by comma:
*/
let carName = "Volvo", carModel = 2018, carColor = "White";
document.getElementById("car").innerHTML = carName + "<br>" + carModel + "<br>" + carColor;

/* value = undefined 
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carNames will have the value undefined after the execution of this statement:
*/
let carNames;
document.getElementById("carNames").innerHTML = carNames;

// JavaScript Arithmetic
// As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:
let x5 = 5 + 2 + 3;
document.getElementById("arit").innerHTML = x5;

//Dizeleri de ekleyebilirsiniz, ancak dizeler birleştirilecektir:
let adim = "Samet" + "Polat";
document.getElementById("name").innerHTML = adim;
// Bunun çözümü araya string formunda bir boşluk eklemektir.
let adim1 = "Samet" + " " + "Polat";
document.getElementById("names").innerHTML = adim1;

// Birde buna bakalım:
let x6 = "5" + 2 + 3;
document.getElementById("number").innerHTML = x6;
// Bunun nedeni tırnak içine bir sayı koyarsanız, sayıların geri kalanı dizeler olarak değerlendirilir ve birleştirilir.
let x7 = 2 + 3 + "5";
document.getElementById("numbers").innerHTML = x7;

/* JavaScript Dollar Sign $
    JavaScript dolar işaretini harf olarak kabul ettiğinden, $ içeren tanımlayıcılar geçerli değişken adlarıdır:
    Dolar işaretinin kullanımı JavaScript'te çok yaygın değildir, ancak profesyonel programcılar bunu genellikle bir JavaScript kitaplığındaki ana işlev için bir takma ad olarak kullanırlar.

    Örneğin jQuery JavaScript kütüphanesinde, HTML öğelerini seçmek için $ ana işlevi kullanılır. jQuery'de $("p"); "tüm p öğelerini seç" anlamına gelir.
 */

/* JavaScript Underscore (_)
    JavaScript alt çizgiyi harf olarak kabul ettiğinden, _ içeren tanımlayıcılar geçerli değişken adlarıdır:
    JavaScript'te alt çizgi kullanımı çok yaygın değildir, ancak profesyonel programcılar arasındaki bir gelenek, bunu "özel (gizli)" değişkenler için bir takma ad olarak kullanmaktır.
 */

