// JavaScript Display Objects
// Bir nesneyi görüntülemek isterseniz sonuç:
const person4 = {
    id: 1478994221,
    nickname: "newWorld",
    pass: 1234
}
document.getElementById("demo1").innerHTML = person4; // [object Object] olacaktır.
console.log(person4);

// JavaScript nesnelerini görüntülemenin yaygın yolları şunlardır;

// 1. Object properties by name
document.getElementById("demo2").innerHTML = person4.id + " " + person4.nickname + " " + person4.pass;

// 2.Object properties in a Loop
let txt = "";
for(let x in person4) {
    txt += person4[x] + " ";
}
document.getElementById("demo3").innerHTML = txt;

// person4.x undefined sonucunu döndürecektir. Çünkü x bir değişkendir. Ayrıca sadece x kullanımı ise property isimlerini döndürür.

// 3. Using Object.values()
// Herhangi bir JavaScript nesnesi Object.values() kullanılarak bir arraye dönüştürülebilir.
const person4Arr = Object.values(person4);
document.getElementById("demo4").innerHTML = person4Arr;

// Object.values() JavaScript'te bir yerleşik fonksiyondur ve bir nesnenin enumerable (numaralandırılabilir) propertylerinin değerlerini içeren bir dizi döndürür. 

// Bir propertynin numaralandırılabilir olması, propertynin enumerable (numaralandırılabilir) özelliğine bağlıdır. "Numaralandırılabilir" özellikler, bir nesnenin üzerindeki özelliklerin belirli bir sırayla ele alınabilecek ve sayılabilir olduğu anlamına gelir. JavaScript'te, bir property numaralandırılabilirse, bu özellik for...in döngüsüyle veya Object.keys(), Object.values(), Object.entries() gibi metodlarla işlenebilir.

// enumerable özelliği varsayılan olarak "true" olarak ayarlanır, yani bir özellik genellikle numaralandırılabilir kabul edilir. Ancak, bu özelliği "false" olarak ayarlayarak bir özelliği numaralandırılamaz hale getirebilirsiniz.
Object.defineProperty(person4, "pass", {enumerable: false});
document.getElementById("demo5").innerHTML = Object.values(person4);

// Ayrıca bir nesnenin özelliklerini (property) ve bu özelliklerin özeliklerini görüntülemek için Object.getOwnPropertyDescriptor() fonksiyonunu kullanabilirsiniz.
const propertyAttributesPass = Object.getOwnPropertyDescriptor(person4, "pass");
console.log(propertyAttributesPass);

// 4. Using JSON.stringify()
// Herhangi bir JavaScript nesnesi JSON.stringify() fonksiyonu ile stringleştirilebilir (stringe dönüştürülebilir):
document.getElementById("demo6").innerHTML = JSON.stringify(person4);
console.log(typeof JSON.stringify(person4));

// JSON.stringify tarihleri dizelere dönüştürür:
person4.registrationDate = new Date("2021-09-27T17:00:00Z");
document.getElementById("demo7").innerHTML = JSON.stringify(person4);

// Ancak JSON.stringify fonksiyonları "direkt" olarak dizeye çevirmez!
person4.userInfo = function() {
    return this.id + " " + this.registrationDate;
}
let txt1 = "";
for(let x in person4) {
    txt1 += x + " ";
}
document.getElementById("demo8").innerHTML = txt1;
document.getElementById("demo9").innerHTML = JSON.stringify(person4); // userInfo methodu (fonksiyon) gösterilmedi. Bunun nedeni; JSON, veriyi temsil etme amacı güder ve JavaScript içinde çalışabilen dinamik yapıları temsil etme yeteneğine sahip değildir. Fonksiyonları JSON formatına çevirmek, genellikle güvenlik riskleri doğurabilir ve uygulamalara potansiyel olarak zarar verebilir. JSON, veriyi güvenli bir şekilde depolamak ve taşımak için tasarlanmıştır ve fonksiyonları, döngülerle ilişkilendirebilecek potansiyel güvenlik riskleri nedeniyle kabul etmez.

// Bunu fixlemenin bir yolu vardır. Fonksiyonu display etmeden önce string veri formatına dönüştürmek:
person4.userInfo = person4.userInfo.toString();
document.getElementById("demo10").innerHTML = JSON.stringify(person4);

// Stringify Arrays
// JavaScript dizileride "stringleştirilebilir".
const myClass = ["Ali", "Veli", "Kerem", "Ceylin"];
document.getElementById("demo11").innerHTML = JSON.stringify(myClass);

