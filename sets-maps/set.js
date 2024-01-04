// JavaScript Sets
// JavaScript Kümesi, benzersiz değerlerden oluşan bir koleksiyondur.
// Her değer bir "Set" de yalnızca bir kez yer alabilir.

/** Set Nasıl Oluşturulur
    Şu şekilde bir JavaScript Seti oluşturabilirsiniz:
    * new Set() fonksiyonuna bir Dizi aktarma
    * Yeni bir Set oluşturun ve değer eklemek için add() işlevini kullanın
    * Yeni bir Set oluşturun ve değişkenleri eklemek için add() işlevini kullanın
 */

// The new Set() Method
// new Set() yapıcısına bir Array geçirin:
const myCompanies = new Set(["GE", "TSM", "Tesla", "Tupras"]);
document.getElementById("demo").innerHTML = myCompanies.size;

// Create a Set and add values:
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
document.getElementById("demo1").innerHTML = letters.size;

// Create a Set and add variables:
const letters1 = new Set();

const q = "q";
const w = "w";
const e = "e";
const r = "r";

letters1.add(q);
letters1.add(w);
letters1.add(e);
letters1.add(r);
document.getElementById("demo2").innerHTML = letters1.size;

// Eşit öğeler eklerseniz, yalnızca ilki kaydedilecektir:

// The forEach() Method
// forEach() yöntemi, her Set öğesi için bir işlev çağırır:
let text = "";
myCompanies.forEach(function(value){
    text += value + "<br>";
})
document.getElementById("demo3").innerHTML = text;

// The values() Method
// values() yöntemi, bir Set'teki tüm değerleri içeren yeni bir yineleyici nesnesi döndürür:
// const myCompanies = new Set(["GE", .....]);
document.getElementById("demo4").innerHTML = myCompanies.values();

// Artık öğelere erişmek için Iterator nesnesini kullanabilirsiniz:
let text1 = "";

for (const x of myCompanies) {
    text1 += x + "<br>";
}
document.getElementById("demo5").innerHTML = text1;
