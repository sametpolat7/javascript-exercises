// JavaScript BigInt
// JavaScript BigInt değişkenleri, normal bir JavaScript Numarası ile temsil edilemeyecek kadar büyük tamsayı değerlerini saklamak için kullanılır.

// JavaScript Tamsayı Doğruluğu
// JavaScript tamsayıları yalnızca 15 basamağa kadar doğrudur:
let bigInt = 999999999999999;
let bigInt1 = 9999999999999999;
console.log(bigInt);
console.log(bigInt1);

/*
JavaScript'te tüm sayılar 64 bit kayan nokta biçiminde saklanır (IEEE 754 standardı).
Bu standart ile büyük tamsayılar tam olarak temsil edilemez ve yuvarlanır.
Bu nedenle, JavaScript yalnızca tam sayıları güvenli bir şekilde temsil edebilir:

9007199254740991 +(253-1) ile
-9007199254740991 -(253-1) arasını.

Bu aralığın dışındaki tamsayı değerleri hassasiyetini kaybeder.
*/

// How to Create BigInt
// Bir BigInt oluşturmak için, bir tamsayının sonuna n ekleyin veya BigInt() işlevini çağırın:
let bigInt2 = 9999999999999999n;
document.getElementById("demo2").innerHTML = 
bigInt1 + "<br>" + bigInt2;

let bigInt3 = BigInt("9999999999999999");
document.getElementById("demo3").innerHTML = 
bigInt1 + "<br>" + bigInt3;

// BigInt: A new JavaScript Datatype
console.log(typeof bigInt2);
console.log(typeof bigInt3);

// BigInt Operators
let bigInt4 = 123456789101112131415n;
let bigInt5 = 987654321123456789101n;
let result2 = bigInt4 * bigInt5;
document.getElementById("demo4").innerHTML = result2;

// BigInt ve Number arasında aritmetik işlem yapılmasına izin verilmez (tür dönüşümü bilgi kaybına neden olur). İşaretsiz sağa kaydırma (>>>) bir BigInt üzerinde yapılamaz (sabit bir genişliğe sahip değildir).

// BigInt Decimals
// Bir BigInt ondalık sayılara sahip olamaz.
let bigInt6 = 5n;
let result3 = Number(bigInt6) / 2;
document.getElementById("demo5").innerHTML = result3;

// BigInt Hex, Octal ve Binary
// BigInt ayrıca onaltılık, sekizlik veya ikili gösterimde de yazılabilir:
let bigInt7 = 0x1000000000000000000n;
let bigInt8 = 0o1000000000000000000n;
let bigInt9 = 0b0000000000000000010n;
document.getElementById("demo6").innerHTML = 
bigInt7 + "<br>" + bigInt8 + "<br>" + bigInt9;

// Yuvarlama program güvenliğini tehlikeye atabilir:
let bigInt10 = 9007199254740992 === 9007199254740993;
console.log(bigInt10); // Expected "False" but output is "True".

// Minimum and Maximum Safe Integers
// ES6, Number nesnesine max ve min özelliklerini ekledi:
let x = Number.MAX_SAFE_INTEGER;
console.log(x);

let y = Number.MIN_SAFE_INTEGER;
console.log(y);

// New Number Methods
// ES6 ayrıca Number nesnesine 2 yeni yöntem ekledi:
document.getElementById("demo7").innerHTML = 
Number.isInteger(10) + "<br>" + Number.isInteger(10.5);

document.getElementById("demo8").innerHTML = 
Number.isSafeInteger(9007199254740991) + "<br>" + 
Number.isSafeInteger(9007199254740992);
