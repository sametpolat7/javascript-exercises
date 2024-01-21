// JavaScript Arrow Function
// Ok fonksiyonları ES6'da tanıtılmıştır. Ok fonksiyonları daha kısa fonksiyon syntaxı yazmamızı sağlar:
let myFunction1 = (a,b) => a * b;
document.getElementById("demo6").innerHTML = myFunction1(4,5);

// Daha da kısalır! Fonksiyonda yalnızca bir statement varsa ve statement bir değer döndürüyorsa, parantezleri ve return anahtar sözcüğünü kaldırabilirsiniz:
let hello = () => "Hello World!";
document.getElementById("demo7").innerHTML = hello();

// Not: Bu, fonksiyonun yalnızca bir ifadesi varsa çalışır.

// Arrow Function With Parameters:
// Parametreleriniz varsa, bunları parantez içinde geçirirsiniz:
let hello1 = (guest) => "Hello" + " " + guest;
document.getElementById("demo8").innerHTML = hello1("Samet!");

// Aslında, yalnızca bir parametreniz varsa, parantezleri de atlayabilirsiniz:
let hello2 = guest => "Hello" + " " + guest;
document.getElementById("demo9").innerHTML = hello2("Samet?");

// "return" anahtar sözcüğünü ve küme parantezlerini "{}" yalnızca fonksiyon tek bir deyim ise atlayabilirsiniz. Bu nedenle, bunları her zaman tutmak iyi bir alışkanlık olabilir:
let hello3 = (guest) => {
    return "Hello " + guest;
}
document.getElementById("demo10").innerHTML = hello3("User");

// What About this?
// "This"'in işlenmesi de normal fonksiyonlara kıyasla ok fonksiyonlarında farklıdır. Kısacası, ok fonksiyonları ile "this"'in bağlayıcılığı yoktur.

// Normal fonksiyonlarda "this" anahtar sözcüğü fonksiyonu çağıran nesneyi temsil eder; bu nesne pencere, belge, düğme ya da başka bir şey olabilir.

// Ok fonksiyonlarında "this" anahtar sözcüğü fonksiyonun sahibini temsil eder:


// Aradaki farkı anlamak için iki örneğe göz atalım.

// Normal Function
let myFunc4 = "";
myFunc4 = function() {
    document.getElementById("demo11").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", myFunc4);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", myFunc4);

// Arrow Function
let myFunc5 = "";
myFunc5 = () => {
    document.getElementById("demo12").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", myFunc5);
//A button object calls the function:
document.getElementById("btn1").addEventListener("click", myFunc5);

// Fonksiyonlarla çalışırken bu farklılıkları unutmayın. Bazen normal fonksiyonların davranışı istediğiniz şeydir, değilse ok fonksiyonlarını kullanın.

// Not : Arrow functions are not hoisted. Kullanılmadan önce bildirilmeleri gerekir.