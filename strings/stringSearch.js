// JavaScript String Search
// JavaScript indexOf()
// indexOf() yöntemi, bir string içinde belirtilen metnin ilk geçtiği dizinini (konumunu) döndürür:
let text20 = "JavaScript is the most common language used for WEB development. ECMAScript is the official name of JavaScript."
document.getElementById("demo20").innerHTML = 
text20.indexOf("JavaScript");

// JavaScript lastIndexOf()
// lastIndexOf() yöntemi, bir string içinde belirtilen metnin son geçtiği yerin dizinini döndürür:
document.getElementById("demo21").innerHTML = 
text20.lastIndexOf("JavaScript");

// Not: Metin bulunamazsa hem indexOf() hem de lastIndexOf() -1 döndürür:
document.getElementById("demo22").innerHTML = 
text20.indexOf("Python");

// Her iki yöntem de arama için başlangıç konumu olarak ikinci bir parametre kabul eder:
document.getElementById("demo23").innerHTML = 
text20.indexOf("JavaScript", 25);

document.getElementById("demo24").innerHTML = 
text20.lastIndexOf("JavaScript", 99);
// lastIndexOf() yöntemleri geriye doğru arama yapar (sondan başa doğru), yani: ikinci parametre 99 ise, arama 99. konumdan başlar ve dizenin başına doğru arama yapar.

// JavaScript String search()
// search() yöntemi bir stringde bir string veya "düzenli ifade" (regular expression) arar ve eşleşmenin konumunu döndürür:
console.log(text20.search("JavaScript"));

/* Peki indexOf() ile search() metodu aynı mıdır?
    Aynı argümanları kabul ediyorlar ve aynı değeri mi döndürüyorlar?

    İki yöntem eşit DEĞİLDİR. Aralarındaki farklar bunlardır:

        search() yöntemi ikinci bir başlangıç konumu bağımsız değişkeni alamaz.
        indexOf() yöntemi güçlü arama değerlerini (düzenli ifadeler) alamaz.
*/

// JavaScript String match()
// match() yöntemi, bir stringi bir string ile (veya düzenli ifadeyle) eşleştirme sonuçlarını içeren bir array döndürür.
let text21 = "The rain in SPAIN stays mainly in the plain.";
const myArray2 = text21.match("ain");
document.getElementById("demo25").innerHTML = 
myArray2.length + " " + myArray2;

// "ain" için genel bir arama
const myArray3 = text21.match(/ain/g);
document.getElementById("demo26").innerHTML = 
myArray3.length + " " + myArray3;

// "ain" için case sensitive olmayan bir arama
const myArray4 = text21.match(/ain/gi);
document.getElementById("demo27").innerHTML = 
myArray4.length + " " + myArray4;
console.log(myArray4);

// JavaScript String matchAll()
// matchAll() yöntemi, bir stringi bir stringle (veya normal ifadeyle eşleştirmenin sonuçlarını içeren bir iterator döndürür.
let text22 = "I love cats. Cats are most friendly animals in planet. Cats have four paws.";
const iterator = text22.matchAll("Cats");
document.getElementById("demo28").innerHTML = 
Array.from(iterator);

// JavaScript String includes()
// Bir string belirtilen bir değeri içeriyorsa "true" döndürür.
let text23 = "Hello world. Welcome to the universe. Love from world.";
document.getElementById("demo29").innerHTML = 
text23.includes("world");

// İkinci parametre kullanılarak başlangıç konumu belirtilebilir.
document.getElementById("demo30").innerHTML = 
text23.includes("world", 25);

// String içinde belirtilen ifade yok ise "false" döndürür.
document.getElementById("demo31").innerHTML = 
text23.includes("saturn");

// Not: includes() /g ve /i flaga izin vermez.

// JavaScript String endsWith()
// String belirtilen ifade ile bitiyorsa "true" döndürür.
let text24 = "The best football team in the world is Galatasaray";
document.getElementById("demo32").innerHTML = 
text24.endsWith("Galatasaray");

// İkinci parametre ile stringe bir sınır koyulabilir. Yani:
document.getElementById("demo33").innerHTML = 
text24.endsWith("best", 8); // 8. karaktere konumu son sınır belirlendiği için true döndürür.




