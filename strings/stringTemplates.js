// JavaScript Template Literals (JavaScript Şablon Değişmezleri)
/* Birbiri ile eş anlamlıdır:
    Template Literals
    Template Strings
    String Templates
    Back-Tics Syntax
*/

// Back-Ticks Syntax
// Template Literals, bir stringi tanımlamak için tırnak işaretleri ("") yerine ters işaretler (``) kullanır.
let text26 = `Hello World!`;
console.log(text26 + " " + typeof text26);

// Quotes Inside Strings
// Şablon değişmezleri ile, bir string içinde hem tek hem de çift tırnak kullanabilirsiniz:
let text27 = `"Ankara" Türkiye'dir.`;
console.log(text27);

// Multiline Strings
// Şablon değişmezleri çok satırlı stringlere izin verir:
let text28 = 
`I 
Will 
Find
You!
`;
document.getElementById("demo34").innerHTML = text28;
console.log(text28);

// Interpolation
// Şablon değişmezleri, değişkenleri ve ifadeleri stringlere enterpole etmek için kolay bir yol sağlar. Bu yönteme string enterpolasyonu adı verilir.           Syntax: ${...}
// Variable Substitutions
let nickname = "Spartacus";
let date = "2021";
let awardsWinners = `Nickname: ${nickname} Date of Membership: ${date}`;
document.getElementById("demo35").innerHTML = awardsWinners;

// Değişkenlerin gerçek değerlerle otomatik olarak değiştirilmesine dize enterpolasyonu denir.

// Expression Substitutions
let price = 15;
let tax = 0.08;
let totalPrice = `Price = ${price * (1 + tax)}`;
console.log(totalPrice);
