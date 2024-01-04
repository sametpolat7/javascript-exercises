// JavaScript Hoisting
// Hoisting, JavaScript'in beyanları (declarations) en üste taşımaya yönelik varsayılan davranışıdır.

// JavaScript Declarations are Hoisted
// JavaScript'te bir değişken kullanıldıktan sonra bildirilebilir. Başka bir deyişle; bir değişken bildirilmeden önce kullanılabilir.

// Bu iki örnek aynı sonucu verecektir:
carName = "Volvo";
console.log(carName);

var carName = "Volvo";

// var carName = "Volvo";
// console.log(carName);

// Bunu anlamak için "hoisting" terimini anlamanız gerekir. Hoisting, JavaScript'in tüm bildirimleri geçerli kapsamın en üstüne (geçerli kodun veya geçerli işlevin en üstüne) taşımaya yönelik varsayılan davranışıdır.

// The let and const Keywords
// let ve const ile tanımlanan değişkenler bloğun en üstüne kaldırılır, ancak başlatılmaz. Anlamı: Kod bloğu değişkenden haberdardır, ancak bildirilene kadar kullanılamaz. Bir let değişkeninin bildirilmeden önce kullanılması ReferenceError ile sonuçlanır. Değişken, bloğun başlangıcından bildirilene kadar "Temporal Dead Zone(zamansal ölü bölge) "dedir:

// carName1 = "BMW";
// document.getElementById("demo").innerHTML = carName1;

// let carName1; ReferenceError: Cannot access 'carName1' before initialization

// Bildirilmeden önce const değişken kullanmak bir Syntax hatasıdır, bu nedenle kod çalışmayacaktır.

// carName1 = "BMW";
// document.getElementById("demo").innerHTML = carName1;

// const carName1; SyntaxError: Missing initializer in const declaration

// JavaScript Initializations are Not Hoisted
// JavaScript yalnızca beyanları (declarations) kaldırır, başlatmaları (initializations) kaldırmaz.

// Örnek 1, Örnek 2 ile aynı sonucu vermez:
var x = 5;
var y = 7;
document.getElementById("demo").innerHTML = `x is ${x} and y is ${y}`;

// Örnek 2:
var z = 5;
document.getElementById("demo1").innerHTML = `z is ${z} and j is ${j}`;

var j = 7;

// Son örnekte j'nin tanımsız olması mantıklı mı? Bunun nedeni, başlatmanın (= 7) değil, yalnızca beyanın (var j) en üste çıkarılmasıdır. Hoisting nedeniyle, j kullanılmadan önce bildirilmiştir, ancak initialization hoisting edilmediği için j'nin değeri "tanımsızdır".

// Declare Your Variables At the Top !
// Hoisting (birçok geliştirici için) JavaScript'in bilinmeyen veya göz ardı edilen bir davranışıdır. Bir geliştirici kaldırma işlemini anlamazsa, programlar hatalar (bug) içerebilir. Hatalardan kaçınmak için, tüm değişkenleri her zaman her kapsamın başında bildirin. JavaScript kodu bu şekilde yorumladığından, bu her zaman iyi bir kuraldır.
