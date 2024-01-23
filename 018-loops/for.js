// JavaScript For Loop
// Döngüler bir kod bloğunu birkaç kez çalıştırabilir.
// Aynı kodu her seferinde farklı bir değerle tekrar tekrar çalıştırmak istiyorsanız döngüler kullanışlıdır.
const teamPlayers = ["Icardi", "Mertens", "Kerem", "Ziyech"];
let text = "";

for (let i = 0; i < teamPlayers.length; i++) {
    text += teamPlayers[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;


/** JavaScript farklı döngü türlerini destekler:
 * for - bir kod bloğunda birkaç kez döngü yapar
 * for/in - bir nesnenin özellikleri arasında döngüler
 * for/of - yinelenebilir bir nesnenin değerleri arasında döngüler
 * while - belirli bir koşul doğruyken bir kod bloğu boyunca döner
 * do/while - ayrıca belirli bir koşul doğruyken bir kod bloğu boyunca döner
 */

// The For Loop
// for deyimi, 3 isteğe bağlı ifade içeren bir döngü oluşturur:
/*  for (ifade 1; ifade 2; ifade 3) {
        // yürütülecek kod bloğu
    }
*/
// İfade 1, kod bloğunun yürütülmesinden önce (bir kez) yürütülür.
// İfade 2, kod bloğunun yürütülmesi için gerekli koşulu tanımlar.
// İfade 3, kod bloğu yürütüldükten sonra (her seferinde) yürütülür.
let text1 = "";

for (let i = 0; i < 5; i++) {
    text1 += "The Number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text1;

// For in
// JavaScript for in deyimi bir Nesnenin "özellikleri" arasında döngü yapar:
const me = {name:"Samet", surname:"Polat", age:25}
let text2 = "";

for (let x in me) {
    text2 += me[x] + " ";
}
document.getElementById("demo2").innerHTML = text2;

// For In Over Arrays
// JavaScript "for in" deyimi de bir arrayin elemanları üzerinde de döngü oluşturabilir:
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let text3 = "";

for (let x in num) {
    text3 += num[x] + "<br>";
}
document.getElementById("demo3").innerHTML = text3;

// Dizin sırası önemliyse, bir Array üzerinde for in kullanmayın. Dizin sırası uygulamaya bağlıdır ve dizi değerlerine beklediğiniz sırada erişilemeyebilir. Sıra önemli olduğunda bir for döngüsü, bir for of döngüsü veya Array.forEach() kullanmak daha iyidir.

// Array.forEach()
// forEach() yöntemi, her dizi öğesi için bir işlevi (bir geriçağırım işlevi) bir kez çağırır.
let text4 = "";

num.forEach(sortFunc);
document.getElementById("demo4").innerHTML = text4;

function sortFunc(value) {
    text4 += value + "<br>";
}

// For of 
// JavaScript for of deyimi, yinelenebilir (iterable) bir nesnenin "değerleri" arasında döngü yapar. Arrayler, Stringler, Maps, NodeLists ve daha fazlası gibi yinelenebilir veri yapıları üzerinde döngü yapmanızı sağlar:

// Looping over an Array
const myCars = ["Renault", "Ford", "Fiat"];
let text5 = "";

for (let x of myCars) {
    text5 += x + "<br>";
}
document.getElementById("demo5").innerHTML = text5;

// Looping over a String
let language = "Javascript";
let text6 = "";

for (let x of language) {
    text6 += x + "<br>";
}
document.getElementById("demo6").innerHTML = text6;

let text7 = "";
for (let x in language) {
    text7 += x + "<br>";
}
document.getElementById("demo7").innerHTML = text7;

// in ve of arasındaki farkı gör. in nesnelerin "property"leri arasında bir döngü sağlarken of nesnelerin "value"ları arasında bir döngü sağlar.