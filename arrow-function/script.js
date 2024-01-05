// JavaScript Arrow Function
// Ok fonksiyonları ES6'da tanıtılmıştır. Ok fonksiyonları daha kısa fonksiyon syntaxı yazmamızı sağlar:
let myFunction = (a,b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4,5);

// Daha da kısalır! Fonksiyonda yalnızca bir statement varsa ve statement bir değer döndürüyorsa, parantezleri ve return anahtar sözcüğünü kaldırabilirsiniz:
let hello = () => "Hello World!";
document.getElementById("demo1").innerHTML = hello();

// Not: Bu, fonksiyonun yalnızca bir ifadesi varsa çalışır.

// Arrow Function With Parameters:
// Parametreleriniz varsa, bunları parantez içinde geçirirsiniz:
let hello1 = (guest) => "Hello" + " " + guest;
document.getElementById("demo2").innerHTML = hello1("Samet!");

// Aslında, yalnızca bir parametreniz varsa, parantezleri de atlayabilirsiniz:
let hello2 = guest => "Hello" + " " + guest;
document.getElementById("demo3").innerHTML = hello2("Samet?");

// What About this?
// "This"'in işlenmesi de normal fonksiyonlara kıyasla ok fonksiyonlarında farklıdır. Kısacası, ok fonksiyonları ile "this"'in bağlayıcılığı yoktur.

// Normal fonksiyonlarda "this" anahtar sözcüğü fonksiyonu çağıran nesneyi temsil eder; bu nesne pencere, belge, düğme ya da başka bir şey olabilir.

// Ok fonksiyonlarında "this" anahtar sözcüğü fonksiyonun sahibini temsil eder:


// Aradaki farkı anlamak için iki örneğe göz atalım.

// Normal Function
let myFunc = "";
myFunc = function() {
    document.getElementById("demo4").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", myFunc);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", myFunc);

// Arrow Function
let myFunc1 = "";
myFunc1 = () => {
    document.getElementById("demo5").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", myFunc1);
//A button object calls the function:
document.getElementById("btn1").addEventListener("click", myFunc1);

// Fonksiyonlarla çalışırken bu farklılıkları unutmayın. Bazen normal fonksiyonların davranışı istediğiniz şeydir, değilse ok fonksiyonlarını kullanın.