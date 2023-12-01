// JavaScript Assignment : Atama Operatörü (=) bir değişkene bir değer atar.
let x = 10;
let y = 4;
let sum = x + y;
console.log(sum);

// JavaScript Addition : Toplama Operatörü (+) sayıları toplar.
sum = x + y;
console.log(sum);

// JavaScript Multiplication : Çarpma Operatörü (*) sayıları çarpar:
let multiplication = x * y;
console.log(multiplication);

/* Types of JavaScript Operators
    There are different types of JavaScript operators:

    - Arithmetic Operators
    - Assignment Operators
    - Comparison Operators (Karşılaştırma)
    - String Operators
    - Logical Operators
    - Bitwise Operators
    - Ternary Operators (Üçlü)
    - Type Operators
*/

// 1. Arithmetic Operators
    //Operators and Operands
        // The numbers (in an arithmetic operation) are called operands.
        // The operation (to be performed between the two operands) is defined by an operator.

let subtraction = x - y;
console.log(subtraction);

let exponentiation = x ** y;
let exp = Math.pow(x , y); // x ** y produces the same result as Math.pow(x,y):
console.log(exponentiation);
console.log(exp);

let division = x / y;
console.log(division);

let modulus = x % y;
console.log(modulus);

let incrementing = 5;
incrementing++;
console.log(incrementing);

let decrementing = 5;
decrementing--;
console.log(decrementing);

// 2. Assignment Operators
let t = 7;
t += 5; // t = t + 5;
console.log(t); // Now t = 12

t -= 5; // t = t - 5;
console.log(t); // Now t = 7

t *= 5; // t = t * 5;
console.log(t); //Now t = 35

t /= 5; // t = t / 5;
console.log(t); //Now t = 7

t %= 5; // t = t % 5; (Mod Alma)
console.log(t); //Now t = 2

t **= 5; // t = t ** 5; (Üssü Alma)
console.log(t); //Now t = 32

t <<= 2; // Left Shift Assignment Operator
console.log(t); //Now t = 128

t >>=3; // Right Shift Assignment Operator
console.log(t); // Now t = 16

// Note: Eğer value (-) olsaydı bunu binary değere döndürebilmek için ilk iki bitini (32bit) ters çevirmek gerekecekti.
let m = -32; // "11"000000 00000000 00000000 00100000
m <<= 3;     // Şimdi 3bit sola shift işlemi uygulanırsa "11" dışarı çıkacaktır. (Sağdan 3bit 0 eklendi)
console.log(m); // Now m = -256

t >>>= 3; // Unsigned Right Shift Assignment Operator
console.log(t); // Now t = 2

// 3. Comparison Operators (Karşılaştırma Operatörleri)
/*
==  --> Equal to
=== --> Equal value and Equal type
!=  --> Not equal
!== --> Not equal value or not equal type
>   --> Greater than
<   --> Less than
>=  --> Greater than or equal to
<=  --> Less than or equal to
?   --> Ternary Operator (Üçlü Operatör)
*/

// 4. String Comparison
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

// Note that strings are compared alphabetically:
let text3 = 20;
let text4 = 5;
let result1 = text1 < text2;
console.log(result1); //Çıktı console true yazdırır ancak matematiksel olarak doğru olmadığını biliyoruz..

// JavaScript String Addition
let firstName = "Samet";
let surName = "Polat";
console.log(firstName + surName); // Console çıktısı "SametPolat" şeklindedir. Araya boşluk koymanın birden fazla yolu vardır. İlki surName = " Polat" şeklinde değer atamaktır. İkincisi:
console.log(firstName + " " + surName);

//The += assignment operator can also be used to add (concatenate) strings:
let words = "What a very";
words += " nice day.";
console.log(words);

// Adding Strings and Numbers
let s = 5 + 5;
let h = "5" + 5;
let p = 5 + "Hello";
let n = "Hello" + 5 + 5; //String ile başlayan bir statement, makinenin kalan işlemleri de string olarak hesaba katmasını sağlar.
console.log(s);
console.log(h);
console.log(p);
console.log(n);

//JavaScript Logical Operators
/*
&& --> Logical and
|| --> Logical or
!  --> Logical not
*/
let logicAnd = 3;
let logicAnd1 = -2;
console.log(logicAnd > 0 && logicAnd1 > 0); // False // Bir boolean işlenenler kümesi için mantıksal AND (&&) işleci, yalnızca ve yalnızca tüm işlenenler doğruysa "true" olacaktır. Aksi takdirde "false" olacaktır.

let logicOr = 3;
let logicOr1 = 2;
console.log(logicOr > 0 || logicOr > 0); // True // Bir işlenenler kümesi için mantıksal VEYA (||) işleci, yalnızca işlenenlerinden biri veya daha fazlası doğruysa "True"dur.


//JavaScript Type Operators
/*
typeof     --> Bir değişkenin türünü döndürür.
instanceof --> Nesne, bir nesne türünün örneğiyse true döndürür.
*/

//JavaScript Bitwise Operators
/*
    Bit operatörleri 32 bit sayılar üzerinde çalışır.
    İşlemdeki herhangi bir sayısal işlenen 32 bitlik bir sayıya dönüştürülür. Sonuç tekrar bir JavaScript sayısına dönüştürülür.

&   --> AND
|   --> OR
~   --> XOR
^   --> NOT
<<  --> Left Shift
>>  --> Right Shift
>>> --> Unsigned Right Shift
*/

let and = 14;
and &= 5;
console.log(and); // Expected 4 // AND işleci iki operandın karşılık gelen bitlerinin her ikiside "1" olduğunda "1" değerini ayarlar. Aksi durumlar "0"dır.

let or = 14;
or |= 5; 
console.log(or); // Expected 15 // OR işleci iki operandın karşılık gelen bitlerden herhangi birinin veya ikisinin "1" olması durumunda "1" değerini ayarlar. Sadece 0-0 durumunda "0" değerini ayarlar.

let xor = 14;
xor ^= 5;
console.log(xor); // Expected 11 // XOR işleci iki operandın karşılık gelen bitlerinin YALNIZCA birinin "1" olması durumunda "1" değerini ayarlar. 1-1, 0-0 durumları "0"dır.


