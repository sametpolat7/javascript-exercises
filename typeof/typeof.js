// JavaScript typeof
/** JavaScript'te değer içerebilen 5 farklı veri türü vardır:
 * String
 * Object
 * Number
 * Boolean
 * Function
 */ 

/** 6 tür nesne vardır:
 * Object
 * Date
 * Array
 * String
 * Number
 * Boolean
 */

/** Ve değer içeremeyen 2 veri türü:
 * null
 * undefined
 */

// The typeof Operator
// Bir JavaScript değişkeninin veri türünü bulmak için typeof operatörünü kullanabilirsiniz.
console.log(typeof "Samet"); // String
console.log(typeof 123); // Number
console.log(typeof true); // Boolean
console.log(typeof {fname: "Samet"}); // Object
console.log(typeof ["Samet"]); // Object
console.log(typeof new Date()); // Object
console.log(typeof function() {}); // Function
console.log(typeof NaN); // Number
console.log(typeof null); // Object
console.log(typeof myName); // Undefined

// Bir JavaScript nesnesinin bir dizi (veya tarih) olup olmadığını belirlemek için typeof kullanamazsınız.

// Primitive Data (İlkel Veri)
// İlkel bir veri değeri, ek özellikleri ve yöntemleri olmayan tek bir basit veri değeridir.
// typeof işleci bu ilkel türlerden birini döndürebilir:
/**
* String
* Number
* Boolean
* undefined
 */

// Complex Data (Karmaşık Veri)
// typeof işleci objects, arrays ve null için "object" döndürür. typeof işleci functions için "object" döndürmez.

/** İlkel veri tipleri (primitives) ve karmaşık veri tipleri (objects) arasındaki temel farklar şunlardır:
 * Değer ve Referans:
    * İlkel Veri Tipleri (Primitives): İlkel veri tipleri, değeri doğrudan içerir. Değişkenlere atanan ilkel veri tipleri, bellekte değerlerini barındırır.
    * Karmaşık Veri Tipleri (Objects): Karmaşık veri tipleri ise referansları içerir. Değişkenlere atanan karmaşık veri tipleri, bellekte gerçek veriyi değil, verinin bulunduğu bellek adresini içerir.

 * İlerleme (Mutable) ve İlerlemezlik (Immutable):
    * İlkel Veri Tipleri (Primitives): İlkel veri tipleri genellikle ilerlemez (immutable) olarak kabul edilir. Yani, bir kez oluşturulduktan sonra değerleri değiştirilemez.
    * Karmaşık Veri Tipleri (Objects): Karmaşık veri tipleri genellikle ilerlemedir (mutable). Yani, bir nesnenin içeriği değiştirilebilir.

 * Kopyalama ve Referans Aktarımı:
    * İlkel Veri Tipleri (Primitives): Bir ilkel veri tipi, başka bir değişkene aktarıldığında değeri kopyalanır. Yani, bağımsız kopyalar oluşur.
    * Karmaşık Veri Tipleri (Objects): Bir karmaşık veri tipi, başka bir değişkene aktarıldığında sadece referansı kopyalanır. Yani, aynı bellek adresine işaret eden iki değişken oluşur.
 */

// JavaScript'te diziler nesne olduğundan typeof operatörü diziler için "nesne" döndürür.

// The constructor Property
// Yapıcı özelliği, tüm JavaScript değişkenleri için yapıcı işlevi döndürür.
document.getElementById("demo").innerHTML = 
"Samet".constructor + "<br>" +
3.14.constructor + "<br>" +
false.constructor + "<br>" +
[1, 2].constructor + "<br>" +
{fname:"Samet"}.constructor + "<br>" +
new Date().constructor + "<br>" +
function(){}.constructor;

// Undefined
// JavaScriptte değeri olmayan bir değişkenin değeri "tanımsız"dır. Türüde tanımsızdır.
let car;
console.log(car + " " + typeof car);

// Herhangi bir değişken, değeri undefined olarak ayarlanarak boşaltılabilir. Tür de tanımsız olacaktır.
car = "Volvo";
console.log(car + " " + typeof car);

car = undefined;
console.log(car + " " + typeof car);

// Boş bir değerin undefined ile hiçbir ilgisi yoktur. Boş bir dizenin hem yasal bir değeri hem de bir türü vardır.
car = "";
console.log(car + " " + typeof car);

// null
// JavaScript'te null "hiçbir şey" anlamına gelir. Var olmayan bir şey olması beklenir. Ne yazık ki JavaScript'te null veri türü bir nesnedir.JavaScript'te typeof null'un bir nesne olmasını bir hata olarak düşünebilirsiniz. Null olması gerekir.
let person = {name: "Samet", surName: "Polat", age: 25};
document.getElementById("demo1").innerHTML = person + " " + typeof person;

person = null;
document.getElementById("demo2").innerHTML = person + " " + typeof person;

// Difference Between Undefined and Null
// undefined ve null değer olarak eşit ancak tür olarak farklıdır:
console.log(undefined == null);
console.log(undefined === null);

// The instanceof Operator
// instanceof işleci, bir nesne belirtilen nesnenin bir örneğiyse true değerini döndürür:
const myCar = ["Volvo", "Skoda", "BMW"];
document.getElementById("demo3").innerHTML = 
(myCar instanceof Array) + "<br>" +
(myCar instanceof Object) + "<br>" +
(myCar instanceof String) + "<br>" +
(myCar instanceof Boolean) + "<br>" +
myCar.constructor;

// The void Operator
// void işleci bir ifadeyi değerlendirir ve tanımlanmamış değer döndürür. Bu işleç genellikle "void(0)" kullanılarak tanımlanmamış ilkel değeri elde etmek için kullanılır (dönüş değerini kullanmadan bir ifadeyi değerlendirirken kullanışlıdır).
