// JavaScript Arrays
// Array, birden fazla değer tutabilen özel değişkendir.
const cars = ["Audi", "BMW", "Mercedes"];
console.log(cars);

// Why Use Arrays?
// Bir öğe listeniz varsa (örneğin araba adları listesi), arabaları tek değişkenlerde depolamak şöyle görünebilir:
let car0 = "Audi";
let car1 = "BMW";
let car2 = "Mercedes";
// Ancak, ya arabalar arasında dolaşmak ve belirli bir tanesini bulmak isterseniz? Peki ya 3 değil de 300 arabanız varsa? Çözüm Array'dir. Bir array, tek bir ad altında birçok değeri tutabilir ve değerlere bir dizin numarasına başvurarak erişebilirsiniz.

// Creating An Array
const flowers = [
    "Orkide", 
    "Manolya", 
    "Gül"
];
console.log(flowers);
// Dizileri const anahtar sözcüğü ile bildirmek yaygın bir uygulamadır.
// Boşluklar ve satır sonları önemli değildir. Bir bildirim birden fazla satıra yayılabilir.
// Ayrıca bir dizi oluşturup öğeleri yerleştirebilirsiniz.
const brands = [];
brands[0] = "Algida";
brands[1] ="Golf";
brands[2] = "Danone";
console.log(brands);

// Accesing Array Elements
// Bir dizi elemanına indeks numarasına başvurarak erişirsiniz:
console.log(cars[0]);
console.log(flowers[1]);
console.log(brands[2]);

// Not: Dizi dizinleri 0 ile başlar.

// Changing an Array Elements
brands[2] = "Bravo"; // Danone öğesini değiştirdik.
console.log(brands);

// Converting an Array to a String
// JavaScript toString() yöntemi, bir diziyi (virgülle ayrılmış) dizi değerlerinden oluşan bir dizeye dönüştürür.
console.log(flowers.toString());

// Access the Full Array
document.getElementById("demo").innerHTML = cars;

// Arrays are Objects
// Diziler, nesnelerin özel bir türüdür. JavaScript'teki typeof operatörü diziler için "object" döndürür. Ancak, JavaScript dizileri "en iyi diziler" olarak tanımlanır.

// Diziler, "öğelerine" erişmek için sayıları kullanır. Bu örnekte, person[0] "John" döndürür:
const person = ["John", "Florida", 46];
console.log(person[0]);

// Nesneler, "üyelerine" erişmek için isimleri kullanır. Bu örnekte,person1.firstName "John" döndürür:
let person1 = {firstName:"John", from:"Florida", age:46};
console.log(person1.firstName);

// Array Elements Can Be Objects
// JavaScript değişkenleri nesne olabilir. Arrays özel nesne türleridir. Bu nedenle, aynı Array içinde farklı türlerde değişkenlere sahip olabilirsiniz. Bir array içinde object olabilir. Bir array içinde fonksiyonlarınız olabilir. Bir array içinde arraylere sahip olabilirsiniz:
function myFunction () {
    document.getElementById("demo1").innerHTML = "Saguko";
}
const myArray = [];
myArray[0] = brands;
myArray[1] = person1;
myArray[2] = myFunction();
console.log(myArray);

// Array Properties and Methods
// The length Property
console.log(person.length);
// Not : Uzunluk özelliği her zaman en yüksek dizi indeksinden bir fazladır.

// Accessing the First Array Element
document.getElementById("demo2").innerHTML = person[0];

// Accesing the Last Array Element
document.getElementById("demo3").innerHTML = person[person.length -1];

// Looping Array Elements
// Bir dizi içinde döngü oluşturmanın bir yolu for döngüsü kullanmaktır:
const fruits = ["Banana", "Apple", "Mandarin", "Melon"];
let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo4").innerHTML = text;

// Array.forEach() işlevini de kullanabilirsiniz:
let text1 = "<ul>";
fruits.forEach(myFunction1);
text1 += "</ul>";

document.getElementById("demo5").innerHTML = text;

function myFunction1(value) {
    text1 += "<li>" + value + "<li>";
}

// Adding Array Elements
// Bir diziye yeni bir eleman eklemenin en kolay yolu push() yöntemini kullanmaktır:
fruits.push("Lemon");
document.getElementById("demo6").innerHTML = fruits;

// Length özelliği kullanılarak bir diziye yeni eleman da eklenebilir:
fruits[fruits.length] = "Kiwi";
document.getElementById("demo7").innerHTML = fruits;

// Bir başka yol dizi indeksi belirtilerek değer atamaktır.
fruits[6] = "Watermelon";
document.getElementById("demo8").innerHTML = fruits;

// Ancak yüksek indeksli öğeler eklemek, bir dizide tanımlanmamış "delikler" oluşturabilir:
fruits[9] = "Peach";
let text2 = "<ul>";
for (let j = 0; j < fruits.length; j++) {
    text2 += "<li>" + fruits[j] + "</li>";
}
text2 += "</ul>";
document.getElementById("demo9").innerHTML = text2;

// Associative Arrays
/**
 * Birçok programlama dili, adlandırılmış dizinlere sahip dizileri destekler
 * Adlandırılmış indekslere sahip dizilere ilişkisel diziler (veya hash'ler) denir.
 * JavaScript, adlandırılmış dizinlere sahip dizileri desteklemez.
 * JavaScript'te diziler her zaman numaralı indeksler kullanır.  
 */
const myTel = [];
myTel[0] = "Iphone 6S";
myTel[1] = "Apple";
myTel[2] = "2018";
document.getElementById("demo10").innerHTML = 
myTel[1] + " " + myTel[0] + " " + myTel.length;

// Adlandırılmış dizinler kullanırsanız, JavaScript diziyi bir nesne olarak yeniden tanımlayacaktır. Bundan sonra, bazı array yöntemleri ve özellikleri yanlış sonuçlar üretecektir.

// The Difference Between Arrays and Objects
// Arrays, numaralandırılmış dizinleri kullanır.
// Objects, isimlendirilmiş dizinleri kullanır.

// Arrays, numaralandırılmış indekslere sahip özel bir object türüdür.

// When to Use Arrays. When to use Objects.
/**
 * JavaScript ilişkisel dizileri desteklemez.
 * Öğe adlarının string (metin) olmasını istediğinizde nesneleri kullanmalısınız.
 * Öğe adlarının sayı olmasını istediğinizde dizileri kullanmalısınız.
 */

// JavaScript new Array()
// JavaScript, new Array() şeklinde yerleşik bir dizi yapıcısına sahiptir.Ancak bunun yerine güvenle "[]" kullanabilirsiniz.
const points = [40];
console.log(points); // "40" öğesine ve 1 uzunluğa sahip array.
var points1 = new Array(40);
console.log(points1); // 40 "undefined" öğesine sahip array.

// How to Recognize an Array
// Yaygın bir soru şudur: Bir değişkenin dizi olup olmadığını nasıl anlarım? Sorun, JavaScript operatörü typeof'un "nesne" döndürmesidir:
const foods = ["Bread", "Cheese", "Tomato"];
console.log(typeof foods);

// Solution 1:
console.log(Array.isArray(foods));

// Solution 2:
console.log(foods instanceof Array);