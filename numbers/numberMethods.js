// JavaScript Number Methods

// The toString() Method
// toString() yöntemi bir sayıyı dize olarak döndürür. Tüm sayı yöntemleri herhangi bir sayı türü (değişmezler, değişkenler veya ifadeler) üzerinde kullanılabilir:
let numb37 = 123;
document.getElementById("demo9").innerHTML = 
numb37.toString() + "<br>" + 
(123).toString() + "<br>" + 
(100 + 23).toString();

// The toExponential() Method
// toExponential(), bir sayı yuvarlanmış ve üstel gösterim kullanılarak yazılmış bir dize döndürür. Parametre, ondalık noktanın arkasındaki karakter sayısını tanımlar:
let numb38 = 9.567;
document.getElementById("demo10").innerHTML = 
numb38.toExponential() + "<br>" + 
numb38.toExponential(2) + "<br>" +
numb38.toExponential(4) + "<br>" +
numb38.toExponential(6);

// Parametre isteğe bağlıdır. Belirtmezseniz, JavaScript sayıyı yuvarlamaz.

// The toFixed() Method
// toFixed(), sayının belirtilen sayıda ondalıkla yazıldığı bir dize döndürür:
let numb39 = 3.14;
document.getElementById("demo11").innerHTML = 
numb39.toFixed() + "<br>" +
numb39.toFixed(2) + "<br>" + 
numb39.toFixed(4) + "<br>" +
numb39.toFixed(6);

// toFixed(2) para ile çalışmak için mükemmeldir.

// The toPrecision() Method
// toPrecision(), belirtilen uzunlukta yazılmış bir sayı içeren bir dize döndürür:
let numb40 = 12.157;
document.getElementById("demo12").innerHTML = 
numb40.toPrecision() + "<br>" +
numb40.toPrecision(1) + "<br>" +
numb40.toPrecision(2) + "<br>" +
numb40.toPrecision(4) + "<br>" + 
numb40.toPrecision(6);

// The valueOf() Method
// valueOf() bir sayıyı sayı olarak döndürür.
// JavaScript'te, bir sayı ilkel bir değer (typeof = number) veya bir nesne (typeof = object) olabilir. valueOf() yöntemi, JavaScript'te dahili olarak Number nesnelerini ilkel değerlere dönüştürmek için kullanılır. Kodunuzda kullanmanız için hiçbir neden yoktur.

// Tüm JavaScript veri türlerinin bir valueOf() ve bir toString() yöntemi vardır.


// Converting Variables to Number
// Bir değişkeni sayıya dönüştürmek için kullanılabilecek 3 JavaScript yöntemi vardır:
/*
    Number() --> Bağımsız değişkeninden dönüştürülmüş bir sayı döndürür.
    parseFloat() --> Argümanını ayrıştırır ve kayan noktalı bir sayı döndürür.
    parseInt() --> Argümanını ayrıştırır ve bir tam sayı döndürür.
*/

// Yukarıdaki yöntemler sayı yöntemleri değildir. Bunlar global JavaScript yöntemleridir.

// The Number() Method
document.getElementById("demo13").innerHTML = 
Number(true) + "<br>" +
Number(false) + "<br>" + 
Number(10) + "<br>" +
Number(10.33) + "<br>" + 
Number("10") + "<br>" + 
Number("10,33") + "<br>" +
Number("10 33") + "<br>" +
Number("John");

// Sayı dönüştürülemezse NaN (Not a Number) döndürülür.

// The Number() Method Used on Dates
// Number() ayrıca bir tarihi sayıya dönüştürebilir.
let numb41 = new Date("1970-01-01");
document.getElementById("demo14").innerHTML = Number(numb41);

// Date() yöntemi, 1.1.1970 tarihinden bu yana geçen "milisaniye" sayısını döndürür.

let numb42 = new Date("1970-01-02");
document.getElementById("demo15").innerHTML = Number(numb42);
