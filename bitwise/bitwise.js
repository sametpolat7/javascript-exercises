// JavaScript Bitwise Operations
/**
 * & --> AND = İki bitte 1 ise 1 döndürür.
 * | --> OR = İki bitten biri 1 ve ya ikiside 1 ise 1 döndürür.
 * ^ --> XOR = İki bitten sadece biri 1 ise 1 döndürür.
 * ~ --> NOT = Bitleri ters çevirir.
 * << --> İşaretsiz sola kaydırma = Sıfırları sağdan içeri iterek ve en soldaki bitlerin düşmesine izin vererek sola kaydırır
 * >> --> İşaretli sağa kaydırma = En soldaki bitin kopyalarını soldan içeri iterek sağa kaydırır ve en sağdaki bitlerin düşmesine izin verir
 * >>> --> İşaretsiz sağa kaydırma = Soldan sıfırları içeri iterek sağa kaydırır ve en sağdaki bitlerin düşmesine izin verir
 */
let num1 = 5; // 0101
let num2 = 1; // 0001

console.log(num1 & num2); // 0001
console.log(num1 | num2); // 0101
console.log(num1 ^ num2); // 0101
console.log(~ num1);      // 1010

// JavaScript Uses 32 bits Bitwise Operands
// JavaScript sayıları 64 bit kayan nokta sayıları olarak saklar, ancak tüm bitsel işlemler 32 bit ikili sayılar üzerinde gerçekleştirilir. Bitsel bir işlem gerçekleştirilmeden önce, JavaScript sayıları 32 bit işaretli tamsayılara dönüştürür. Bitsel işlem gerçekleştirildikten sonra, sonuç tekrar 64 bit JavaScript sayılarına dönüştürülür.

// Yukarıdaki örneklerde 4 bitlik işaretsiz ikili sayılar kullanılmıştır. Bu nedenle ~ 5, 10 döndürür. JavaScript 32 bit işaretli tamsayılar kullandığından, 10 döndürmeyecektir. -6 döndürür.

// 00000000000000000000000000000101 (5)

// 11111111111111111111111111111010 (~5 = -6)

// İşaretli bir tamsayı, eksi işareti olarak en soldaki biti kullanır.

// Converting Decimal to Binary
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
document.getElementById("demo").innerHTML = dec2bin(5);

// Converting Binary to Decimal
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}
document.getElementById("demo1").innerHTML = bin2dec(101);