// JavaScript String Length
let keyboard = "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ";
console.log("length: " + keyboard.length);

// Extracting String Parts
/* Bir stringin bir bölümünü ayıklamak için 3 yöntem vardır:
    slice(start, end)
    substring(start, end)
    substr(start, length) !!KULLANIMDAN KALDIRILDI!!
*/
// slice (start, end)
// slice() bir stringin bir bölümünü çıkarır ve çıkarılan bölümü yeni bir string olarak döndürür. Yöntem 2 parametre alır: başlangıç konumu ve bitiş konumu (bitiş dahil değildir).
let text2 = "SAMETPOLAT";
let part2 = text2.slice(5, 10);
console.log(part2);
// Not : JavaScript pozisyonları sıfırdan itibaren sayar.İlk pozisyon 0'dır.

// İkinci parametreyi atlarsanız, yöntem dizenin geri kalanını kesip çıkaracaktır:
let part3 = text2.slice(5);
console.log(part3);

// Bir parametre negatifse, konum dizenin sonundan itibaren sayılır:
let part4 = text2.slice(-5, -1);
console.log(part4);

// substring(start, end)
// substring() işlevi slice() işlevine benzer. Aradaki fark, 0'dan küçük başlangıç ve bitiş değerlerinin substring() işlevinde 0 olarak değerlendirilmesidir.
let part5 = text2.substring(5, 10);
console.log(part5);

let part6 = text2.substring(5, -1);
console.log(part6);

let part7 = text2.substring(5);
console.log(part7);

// Replacing String Content
// replace() yöntemi, belirtilen bir değeri bir dize içindeki başka bir değerle değiştirir:
function replace () {
    let text3 = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
    text3.replace("Sneijder","Icardi");
}
// Varsayılan olarak, replace() yöntemi yalnızca ilk eşleşmeyi değiştirir. Tüm eşleşmeleri değiştirmek için /g flag (genel eşleşme) içeren bir düzenli ifade kullanın:
function replace1 () {
    let text4 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML =
    text4.replace(/Fenerbahçe/g, "Galatasaray");
}
// Varsayılan olarak, replace() yöntemi büyük/küçük harfe duyarlıdır. fenerbahçe değiştirilmeyecektir. Büyük/küçük harfe duyarsız olarak değiştirmek için /i işaretli (duyarsız) bir düzenli ifade kullanın:
function replace2 () {
    let text4 = document.getElementById("demo3").innerHTML;
    document.getElementById("demo3").innerHTML =
    text4.replace(/Fenerbahçe/i, "Galatasaray");
}

// JavaScript String ReplaceAll()
// 2021 yılında JavaScript replaceAll() dize yöntemini kullanıma sunmuştur.
function rep () {
    let text5 = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = 
    text5.replaceAll("Cats", "Dogs");
}

// Converting to Upper and Lower Case
function upper () {
    let text6 = document.getElementById("demo6").innerHTML;
    document.getElementById("demo6").innerHTML = 
    text6.toUpperCase();
}
function lower () {
    let text7 = document.getElementById("demo7").innerHTML;
    document.getElementById("demo7").innerHTML = 
    text7.toLowerCase();
}

// JavaScript String concat()
// concat() iki veya daha fazla dizeyi birleştirir:
let text8 = "Hello";
document.getElementById("demo8").innerHTML = 
text8.concat(" " + "World!");

// Not: Tüm string yöntemleri yeni bir string döndürür. Orijinal dizeyi değiştirmezler. Dizeler değişmezdir: Dizeler değiştirilemez, yalnızca yer değiştirilebilir.

// JavaScript String trim()
// trim() yöntemi, bir dizenin her iki tarafındaki boşlukları kaldırır.
let text9 = "          Hello World!          "
console.log(text9);
console.log(text9.length);
let text10 = text9.trim();
console.log(text10);
console.log(text10.length);

// trimStart() and trimEnd()
// trimStart() ve trimEnd aynı trim() gibi çalışır ancak trimStart() sadece başlangıçtaki, trimEnd() ise sadece sondaki boşlukları kaldırır.
let text11 = text9.trimStart();
console.log(text11);
console.log(text11.length);

let text12 = text9.trimEnd();
console.log(text12);
console.log(text12.length);

// JavaScript String Padding
// ECMAScript 2017, JavaScript'e iki yeni string yöntemi ekledi. padStart() ve padEnd(), bir stringin başına veya sonuna "dolgu" eklemek için kullanılır.
let text13 = "5";
text13 = text13.padStart(4,"0");
document.getElementById("demo13").innerHTML = text13;

let text14 = "5";
text14 = text14.padEnd(4,"0");
document.getElementById("demo14").innerHTML = text14;

// Not: Padding yöntemi bir string methotudur. Bir sayıyı doldurmak için önce sayıyı stringe dönüştürmek gerekir. Örneğin:
let numb = 5;
let numbToString = numb.toString();
document.getElementById("demo15").innerHTML = 
numbToString.padStart(4,"0");

// Extracting String Characters
// String karakterlerini ayıklamak için 3 yöntem vardır.
/*
 * charAt(position)
 * charCodeAt(position)
 * Property access []
 */
// charAt() yöntemi, bir string içinde belirtilen bir dizindeki (konumdaki) karakteri döndürür.
let text16 = "HELLO WORLD!";
document.getElementById("demo16").innerHTML = 
text16.charAt(0);

// charCodeAt() yöntemi, bir string içinde belirtilen bir dizindeki karakterin unicode kodunu döndürür. Yöntem bir UTF-16 kodu (0 ile 65535 arasında bir tamsayı) döndürür.
document.getElementById("demo17").innerHTML = 
text16.charCodeAt(0);

// Property Access []
document.getElementById("demo18").innerHTML = text16[0];

/* Property Access biraz öngörülemez olabilir:
Stringlerin Array gibi görünmesini sağlar.(Ancak değillerdir)
Herhangi bir karakter bulunamazsa, [ ] tanımsız döndürür, charAt() ise boş bir string döndürür.
Yalnızca okunur. str[0] = "A" hata vermez (ancak çalışmaz!)
 */

// Converting a String to an Array
// JavaScript String split()
let text17 = "A,B,C,D,E,F,G";
const myArray = text17.split(","); // Stringte değer virgülle elemanlarına ayrıldığı için.
console.log(myArray[0] + myArray[1]);

let text18 = "ABCDEFG";
const myArray1 = text18.split(""); // String değeri bir bütün. Bizde onu "split" edebilmesi için bir uyarlama yaptık.
console.log(myArray1[0]);

text18 = "";
for (let i = 0; i < myArray1.length; i++) {
    text18 += myArray1[i] + "<br>"
}
document.getElementById("demo19").innerHTML = text18;
