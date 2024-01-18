/* JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

- The Object Datatype
    The object data type can contain:
1. An object
2. An array
3. A date
*/

// The Concept of Data Types
let x = 16 + "Volvo";
console.log(x);

let y = "Volvo" + 16;
console.log(y);

// JavaScript ifadeleri soldan sağa doğru değerlendirir. Farklı sıralamalar farklı sonuçlar üretebilir:
let z = 16 + 4 + "Volvo";
console.log(z);

let t = "Volvo" + 16 + 4;
console.log(t);
// İlk örnekte JavaScript, "Volvo "ya ulaşana kadar 16 ve 4'ü sayı olarak ele alır. İkinci örnekte, ilk işlenen bir string olduğundan, tüm işlenenler string olarak ele alınır.

// JavaScript Types are Dynamic. (JavaScript dinamik tiplere sahiptir. Bu, aynı değişkenin farklı veri türlerini tutmak için kullanılabileceği anlamına gelir.)
let d;
d = 5;
d = "John"
console.log(d); // Expected "John"

// JavaScript Strings
// Stringi çevreleyen tırnak işaretleriyle eşleşmedikleri sürece, bir stringin içinde tırnak işaretleri kullanabilirsiniz.
let fullName = "'Samet Polat'"; 
console.log(fullName);

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).Numbers can be written with, or without decimals:
let num1 = 34.00;
let num2 = 34;
let num3 = 3.14;
document.getElementById("nums").innerHTML = num1 + "<br>" + num2 + "<br>" + num3;

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:
let expL = 123e5;
let expS = 123e-5;
console.log(expL);
console.log(expS);

/* Most programming languages have many number types:

Whole numbers (integers): (Tam Sayılar)
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always "one type":
double (64-bit floating point).
*/

// JavaScript BigInt
// Tüm JavaScript sayıları 64 bit kayan nokta biçiminde saklanır. JavaScript BigInt, normal bir JavaScript Numarası ile temsil edilemeyecek kadar büyük tamsayı değerlerini saklamak için kullanılabilen yeni bir veri türüdür (ES2020).
let big = BigInt("123456789012345678901234567890");
console.log(big);
let big2 = 123456789012345678901234567890;
console.log(big2);
// You cannot perform math between a BigInt type and a Number type.

// JavaScript Booleans
let first = 5; second = 5; third = 6;
console.log(first == second); //Expected True
console.log(third == second); // Expected False

/* JavaScript Arrays
JavaScript arrays are written with square brackets [].
Array items are separated by commas (,).
*/
let myCars = ["Volvo", "BMW", "Mercedes", "Audi"];
console.log(myCars);
console.log(myCars[0]);
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

/* JavaScript Objects
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas (,).
*/
let me = {myName : "Samet", surName : "Polat", myAge : "25", myJob : "Software Developer"};
console.log(me);

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
document.getElementById("type").innerHTML =
typeof 0 + "<br>" +
typeof "Samet" + "<br>" +
typeof true + "<br>" +
typeof undefined;

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let car; 
console.log(car); // Value is undefined also type is undefined.

let cars = "Audi"; // Value is "Audi" and type is string.
cars = undefined;  // Value is undefined also type is undefined.
console.log(cars);

// Empty Values
// An empty value has nothing to do with undefined. An empty string has both a legal value and a type.
let empty = ""; // This is not undefined value or type.
document.getElementById("empty").innerHTML =
empty + "<br>" + // Value = ""
typeof empty;    // Type = String


