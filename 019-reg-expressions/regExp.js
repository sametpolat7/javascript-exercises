// JavaScript Regular Expressions
// Düzenli ifade, bir arama modeli oluşturan bir karakter dizisidir. Arama modeli, metin arama ve metin değiştirme işlemleri için kullanılabilir.

// What Is a Regular Expression?
//  Bir metinde veri ararken, ne aradığınızı tanımlamak için bu arama kalıbını kullanabilirsiniz. Düzenli ifade tek bir karakter veya daha karmaşık bir desen olabilir. Düzenli ifadeler her türlü metin arama ve metin değiştirme işlemlerini gerçekleştirmek için kullanılabilir.

// Syntax
// /pattern/modifiers;
// Example : /w3schools/i;

// /w3schools/i bir düzenli ifadedir.

// Using String Methods
// JavaScript'te düzenli ifadeler genellikle iki string yöntemiyle birlikte kullanılır: search() ve replace().

// search() yöntemi, bir eşleşme aramak için bir ifade kullanır ve eşleşmenin konumunu döndürür.

// replace() yöntemi, kalıbın değiştirildiği değiştirilmiş bir dize döndürür.

// Using String search() With a String
// search() yöntemi, belirtilen bir değer için bir dizeyi arar ve eşleşmenin konumunu döndürür:
let text = "Şampiyon Galatasaray!";
let n = text.search("Galatasaray");
console.log(n);

// Using String search() With a Regular Expression
let text1 = "Şampiyon Galatasaray!";
let n1 = text1.search(/galatasaray/i);
console.log(n1);

// Using String replace() With a String
// replace() yöntemi, belirtilen bir değeri bir dize içindeki başka bir değerle değiştirir:
let text2 = "Şampiyon Fenerbahçe!";
let n2 = text2.replace("Fenerbahçe", "Galatasaray");
console.log(n2);

// Use String replace() With a Regular Expression
let text3 = "Şampiyon Fenerbahçe!";
let n3 = text3.replace(/fenerbahçe/i, "Galatasaray");
console.log(n3);

// Regular Expression Modifiers
// i : Büyük/küçük harfe duyarlı olmayan eşleştirme için
let text4 = "Is this Is this Is this"
let n4 = text4.match(/is/i);
console.log(n4);

// g : Genel bir eşleşme (Tüm eşleşmeler)
let text5 = "Is this Is this Is this"
let n5 = text5.match(/is/g);
console.log(n5);

// Ayrıca ikisi bir arada kullanılabilir:
let text6 = "Is this Is this Is this"
let n6 = text6.match(/is/gi);
console.log(n6);

// Regular Expression Patterns

// Köşeli parantezler bir karakter aralığını bulmak için kullanılır:
// [abc] : Parantezler arasındaki karakterlerden herhangi birini bulur.
let text7 = "Is this Is this Is this"
let n7 = text7.match(/[th]/g);
console.log(n7);

// [0-9] : Parantezler arasındaki rakamlardan herhangi birini bulur.
let text8 = "314256525489592021449"
let n8 = text8.match(/[1-3]/g);
console.log(n8);

// [x | y] : Virgül ile ayrılmış patternleri bulur.
let text9 = "green, red, green, re, gre, green, red";
let n9 = text9.match(/[red|green]/g);
console.log(n9)


// Using test()
// test() yöntemi bir RegExp ifade yöntemidir. Bir dizede bir model arar ve sonuca bağlı olarak true veya false döndürür.
let text10 = "Emily emily"
const e = /e/;
document.getElementById("demo").innerHTML = e.test(text10);