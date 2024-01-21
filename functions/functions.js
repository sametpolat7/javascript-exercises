// JavaScript Functions
// JavaScript fonksiyonu, belirli bir görevi yerine getirmek için tasarlanmış bir kod bloğudur. Bir JavaScript fonksiyonu, "bir şey" onu çağırdığında yürütülür.


// JavaScript Function Syntax
//Bir JavaScript fonksiyonu, "function" anahtar sözcüğü, ardından bir ad ve ardından parantez () ile tanımlanır.
//Parantezler virgülle ayrılmış parametre adlarını içerebilir: (parametre1, parametre2, ...)
// Fonksiyon parametreleri, fonksiyon çağrıldığında fonksiyon tarafından alınan değerlerdir.
// Fonksiyonun içinde, argümanlar (parametreler) yerel değişkenler gibi davranır.
// Fonksiyon tarafından çalıştırılacak kod küme parantezleri içine yerleştirilir: {}


// Function Declarations
function firstFunction (x, y) {
    return x * y;
} 
// Noktalı virgül, çalıştırılabilir JavaScript ifadelerini ayırmak için kullanılır. Bir fonksiyon bildirimi çalıştırılabilir bir ifade olmadığından, noktalı virgülle bitirilmesi yaygın değildir.
document.getElementById("demo1").innerHTML = firstFunction(5, 7);


// Function Expressions
const x = function(a, b) {return a * b};
document.getElementById("demo2").innerHTML = x(4, 9);

// Değişkenlerde saklanan fonksiyonların fonksiyon adlarına ihtiyacı yoktur. Her zaman değişken adı kullanılarak çağrılırlar.


// The Function Constructor
// Fonksiyonlar, Function() adı verilen yerleşik bir JavaScript fonksiyon kurucusu ile de tanımlanabilir.
const myFunc = new Function("a", "b", "return a * b");
document.getElementById("demo3").innerHTML = myFunc(6,9);

// Çoğu zaman JavaScript'te new anahtar sözcüğünü kullanmaktan kaçınabilirsiniz.


// Function Hoisting
// Hoisting, JavaScript'in bildirimleri geçerli kapsamın en üstüne taşımaya yönelik varsayılan davranışıdır. Hoisting, değişken bildirimleri ve fonksiyon bildirimleri için geçerlidir. Bu nedenle, JavaScript fonksiyonları bildirilmeden önce çağrılabilir:
const y = myFunc1(7, 9);
function myFunc1(a, b) {
    return a * b;
}
document.getElementById("demo4").innerHTML = y;


// Self-Invoking Function
(function() {
    return document.getElementById("demo4").innerHTML = "Hello World!";
}) (); // Son ikili parantez bu fonksiyonu çağırmaya yarar.


// JavaScript Return
// "return" ifadesi, bir JavaScript fonksiyonunun çağrıldığı yere bir değeri geri döndürmek için kullanılır. 
function deneme1(a, b) {
    return a + b;
}
console.log(deneme1(5, 9)) // 14

// Fonksiyonlar, değer döndürmek zorunda değildir. return ifadesi kullanılmadığında veya herhangi bir değer belirtilmediğinde, fonksiyon varsayılan olarak undefined değerini döndürür.
function deneme2(a, b) {
    a + b;
}
console.log(deneme2(5, 9)) // Undefined

// "return" ifadesi, bir fonksiyonun çalışmasını sonlandırır. Fonksiyonun içinde bulunduğu kapsamda return ifadesinin bulunduğu satıra ulaşıldığında, fonksiyonun geri kalan kodu çalıştırılmaz ve fonksiyon çağrıldığı yere geri döner.
function deneme3(a, b) {
    return a + b;
    console.log(deneme3(5, 9)); // Çalışmayacaktır.
}

// Why Functions?
// Fonksiyonlar, belirli bir görevi yerine getiren bağımsız ve modüler kod blokları oluşturmanıza olanak tanır. Bu sayede kodunuz daha düzenli ve anlaşılır hale gelir. 
// Fonksiyonlar, belirli bir görevi tekrar tekrar gerçekleştirmenizi sağlar. Bir fonksiyonu bir kez tanımladıktan sonra, ihtiyaç duyduğunuz her yerde çağırabilirsiniz.
// Fonksiyonlar, içerdikleri kodu izole edilmiş bir şekilde tutar. Bir fonksiyonun içinde tanımlanan değişkenler ve işlemler, diğer kod bloklarını etkilemez. 
// Fonksiyonlar, belirli bir görevin soyutlamasını yapmanıza olanak tanır. Yani, bir fonksiyonun içinde ne olduğuyla ilgili ayrıntılara gerek kalmadan, sadece fonksiyonun ne yaptığını bilmek yeterlidir. Bu, karmaşık bir programı daha küçük, yönetilebilir parçalara bölmek anlamına gelir.
// 


// The () Operator
// () operatörü fonksiyonu çağırır:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
let derece = toCelcius(77);
console.log(derece);

// Bir işleve uygun olmayan parametrelerle erişmek "NaN" yanıtını döndürebilir:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
derece = toCelcius(); // NaN
console.log(derece);

// Bir işleve () olmadan erişildiğinde işlev sonucu değil işlev döndürülür:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
derece = toCelcius;
console.log(derece);
// Yukarıdaki örneklerde gördüğünüz gibi, toCelsius fonksiyon nesnesine, toCelsius() ise fonksiyon sonucuna atıfta bulunur.


// Local Variables
// Bir JavaScript fonksiyonu içinde bildirilen değişkenler, fonksiyon için LOCAL olur.
// Yerel değişkenlere yalnızca fonksiyon içinden erişilebilir.
telName();
function telName () {
    let telephone = "Iphone 6S";
    document.getElementById("demo5").innerHTML = telephone;
}
// document.getElementById("demo5").innerHTML = telephone; // Erişilemez.


// Function are Objects
// typeof operatörü fonksiyonlar için "function" veri tipini döndürür.
console.log(typeof telName);
// Ancak fonksiyonlar, nesnedir.
console.log(telName instanceof Object);
// Properties and Methods sahiptirler.
function myFunc2(a, b, c) {
    return arguments.length;
}
console.log(myFunc2(1, 2, 3));

let stringFunc = myFunc2.toString();
document.getElementById("demo6").innerHTML = stringFunc;

// Bir nesnenin özelliği olarak tanımlanan bir fonksiyon, nesne için "Method" olarak adlandırılır.
// Yeni nesneler oluşturmak için tasarlanmış bir fonksiyona "Object Constructor" denir.