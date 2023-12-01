// JavaScript stringi metni saklamak ve işlemek içindir. Bir JavaScript stringi, tırnak işaretleri içinde yazılmış sıfır veya daha fazla karakterdir.
let x = "Samet"; // Tek veya çift tırnak kullanabilirsin.
console.log(x + " - " +  typeof x);

// Stringi çevreleyen tırnak işaretleriyle eşleşmedikleri sürece, bir stringin içinde tırnak işaretleri kullanabilirsin.
let y = "My name is 'Samet'."
console.log(y);

// Bir stringin uzunluğunu bulmak için "length" özelliğini kullanabilirsin.
let z = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ"
console.log(z.length);

// Escape Character (\)
// Ters eğik çizgi (\) kaçış karakteri, özel karakterleri string karakterlerine dönüştürür.
let t = "We are \"Vikings\".";
console.log(t);

// JavaScript'te diğer altı kaçış stringi geçerlidir:
let backSpace = "Hello \b World";
console.log(backSpace);

let formFeed = "Hello \f World";
console.log(formFeed);

let newLine = "Hello \n World";
console.log(newLine);

let carriageReturn = "Hello \r World";
console.log(carriageReturn);

let horizontalTabulator = "Hello \t World";
console.log(horizontalTabulator);

let verticalTabulator = "Hello \v World";
console.log(verticalTabulator);
// Yukarıdaki 6 kaçış karakteri orijinal olarak daktiloları, teletipleri ve faks makinelerini kontrol etmek için tasarlanmıştır. HTML'de herhangi bir anlam ifade etmezler.

// Breaking Long Code Lines
// En iyi okunabilirlik için, programcılar genellikle 80 karakterden uzun kod satırlarından kaçınmak isterler. Bir JavaScript deyimi (statement) tek bir satıra sığmıyorsa, deyimi kesmek için en iyi yer bir işleçten sonrasıdır:
document.getElementById("demo").innerHTML =
"Hello Dolly!";

// Ayrıca bir metin dizesindeki kod satırını tek bir ters eğik çizgiyle bölebilirsiniz. Ancak bu önerilmez. Çünkü bazı tarayıcılar "\" karakterinin arkasında boşluk bırakılmasına izin vermez.

// Bir stringi parçalamanın daha farklı bir yolu, string toplamayı kullanmaktır:
document.getElementById("demos").innerHTML = "Hello " + 
"Dolly!";

// JavaScript Strings as Objects
// Normalde JavaScript stringleri, değişmezlerden oluşturulan ilkel değerlerdir:
let text = "John";

// Ancak stringler "new" anahtar sözcüğü ile object olarak da tanımlanabilir:
let nesne = new String("John");
document.getElementById("toCompare").innerHTML =
text + " " + typeof text + "<br>" + 
nesne + " " + typeof nesne;

// Yine de strings nesneleri oluşturmayın. Yeni anahtar kelime kodu karmaşıklaştırır ve yürütme hızını yavaşlatır. String nesneleri beklenmedik sonuçlar üretebilir:
console.log(text == nesne); // Eşit Değer (True)
console.log(text === nesne); // Eşit Değer ve Data Types (False)

//Not: İki JavaScript nesnesini karşılaştırmak her zaman false döndürür.
let text1 = new String("Samet");
let nesne1 = new String("Samet");
console.log(text1 == nesne1);
console.log(text === nesne1);
