// JavaScript Functions
/*
JavaScript fonksiyonu, belirli bir görevi yerine getirmek için tasarlanmış bir kod bloğudur.
Bir JavaScript fonksiyonu, "bir şey" onu çağırdığında yürütülür.
*/
function firstFunction (x, y) {
    return x * y;
}
let firstResult = firstFunction(4, 7);
document.getElementById("first").innerHTML = firstResult;

// JavaScript Function Syntax
/*
Bir JavaScript fonksiyonu, "function" anahtar sözcüğü, ardından bir ad ve ardından parantez () ile tanımlanır.
Fonksiyon isimleri harfler, rakamlar, alt çizgiler ve dolar işaretleri içerebilir (değişkenlerle aynı kurallar).
Parantezler virgülle ayrılmış parametre adlarını içerebilir:
(parametre1, parametre2, ...)
Fonksiyon tarafından çalıştırılacak kod küme parantezleri içine yerleştirilir: {}
Fonksiyon parametreleri, fonksiyon tanımında parantez () içinde listelenir.
Fonksiyon argümanları, fonksiyon çağrıldığında fonksiyon tarafından alınan değerlerdir.
Fonksiyonun içinde, argümanlar (parametreler) yerel değişkenler gibi davranır.
*/

// Function Invocation
/*
Fonksiyonun içindeki kod, "bir şey" fonksiyonu çağırdığında çalışacaktır:
Bir olay gerçekleştiğinde (kullanıcı bir düğmeye tıkladığında)
JavaScript kodundan çağrıldığında
Otomatik olarak (kendi kendine çağrılır)
*/

// JavaScript Return
/*
JavaScript bir "return" ifadesine ulaştığında, işlev yürütülmeyi durduracaktır.
İşlev bir statement dan çağrılmışsa, JavaScript çağrılan statement dan sonra kodu çalıştırmak için "return" yapacaktır.

Fonksiyonlar genellikle bir "return" değeri hesaplar. "Return" değeri "çağırana" geri "döndürülür":
*/
let z = secondFunction(5, 10);
function secondFunction(a, b) {
    return a * b;
}
console.log(z);

// Why Functions?
/*
Fonksiyonlar ile kodu yeniden kullanabilirsiniz
Birçok kez kullanılabilecek kod yazabilirsiniz.
Farklı sonuçlar üretmek için aynı kodu farklı argümanlarla kullanabilirsiniz.
*/

// The () Operator
// () operatörü fonksiyonu çağırır:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
let value = toCelcius(77);
console.log(value);

// Bir işleve uygun olmayan parametrelerle erişmek "NaN" yanıtını döndürebilir:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
value = toCelcius(); // Undefined
console.log(value);

// Bir işleve () olmadan erişildiğinde işlev sonucu değil işlev döndürülür:
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
value = toCelcius;
console.log(value);
// Yukarıdaki örneklerde gördüğünüz gibi, toCelsius fonksiyon nesnesine, toCelsius() ise fonksiyon sonucuna atıfta bulunur.

// Functions Used as Variable Values
let text = "The temperature is " + toCelcius(77) + " Celcius."; // Fonksiyonu doğrudan bir değişken değeri olarak kullanabilirsiniz.
document.getElementById("text").innerHTML = text;
function toCelcius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
// let value = toCelcius(77); // Bir fonksiyonun dönüş değerini saklamak için bir değişken kullanmak yerine (76.satırı oku)


// Local Variables
/*
Bir JavaScript fonksiyonu içinde bildirilen değişkenler, fonksiyon için LOCAL olur.
Yerel değişkenlere yalnızca fonksiyon içinden erişilebilir.
*/
telName();
function telName () {
    let telephone = "Iphone 6S";
    document.getElementById("demo").innerHTML = telephone;
}
document.getElementById("demo1").innerHTML = telephone; // Erişilemez.
