// JavaScript Function Invocation
// Bir JS fonksiyonu içindeki kod, "bir şey" onu çağırdığında yürütülür. Fonksiyon tanımlandığında yürütülmez.

// " It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function". "

// Invoking Function as a Function
const duckFunc = (a, b) => {
    return a + b;
}
console.log(duckFunc(20,8));

// Yukarıdaki fonksiyon herhangi bir nesneye ait değildir. Ancak JavaScript'te her zaman varsayılan bir global nesne (window object) vardır.
// HTML'de varsayılan global nesne HTML sayfasının kendisidir, bu nedenle yukarıdaki fonksiyon HTML sayfasına "aittir".
// Bir tarayıcıda sayfa nesnesi tarayıcı penceresidir. Yukarıdaki fonksiyon otomatik olarak bir "window" nesnesinin methodu haline gelir.

// Bu, bir JavaScript işlevini çağırmanın yaygın bir yoludur, ancak çok iyi bir uygulama değildir.
// Global değişkenler, yöntemler veya fonksiyonlar global nesnede kolayca isim çakışmaları ve hatalar yaratabilir.

// Örneğin:
function sayMyName() {
    return "Samet";
}
console.log(window.sayMyName());

// sayMyName() === window.sayMyName()

// What is this?
// Bir nesne yönteminin içinde this => methodun sahibi olan nesneyi ifade eder.
// Bir fonksiyonun içinde this => Global Nesneyi (window) ifade eder.
// Bir ok fonksiyonu içinde this => normal fonksiyonlardan farklı olarak kendi this bağlamını oluşturmazlar. Kendi bağlamını oluşturmadıkları için, bu fonksiyonlarda this bağlamı, fonksiyonun tanımlandığı kapsamın this değerini miras alır.

// The Global Object
// Bir fonksiyon, sahip nesnesi olmadan çağrıldığında, this değeri global nesne olur.
// Bir web tarayıcısında global nesne window'dur.
// Bu örnek, pencere nesnesini this öğesinin değeri olarak döndürür:
let t = dontDoThis();
function dontDoThis() {
    return this;
}
document.getElementById("demo20").innerHTML = t;

// Bir fonksiyonun global bir fonksiyon olarak çağrılması, this değerinin global nesne olmasına neden olur.
// Pencere nesnesini bir değişken olarak kullanmak programınızı kolayca çökertebilir.


// Invoking a Function as a Method
// JavaScript'te fonksiyonları nesne yöntemleri olarak tanımlayabilirsiniz.
// Aşağıdaki örnek, iki özelliği (firstName ve lastName) ve bir yöntemi (fullName) olan bir nesne (myObject) oluşturur:
const attackPlayer = {
    firstName: "Mauro",
    lastName : "Icardi",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(attackPlayer.fullName());

// fullName yöntemi bir fonksiyondur. Fonksiyon nesneye aittir. attackPlayer nesnesi fonksiyonun sahibidir.
// Bu adı verilen şey, JavaScript kodunun "sahibi" olan nesnedir. Bu durumda this'in değeri attackPlayer'dır.
// Test edin! test yöntemini this değerini döndürecek şekilde ekleyin:
attackPlayer.test = function() {
    return this;
}
document.getElementById("demo21").innerHTML = attackPlayer.test();

// Bir fonksiyonu bir nesne methodu olarak çağırmak, this değerinin, nesnenin kendisi olmasına neden olur.

