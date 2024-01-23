// JavaScript Scope
// Kapsam, değişkenlerin erişilebilirliğini (görünürlüğünü) belirler.

// JavaScript değişkenlerinin 3 tür scope vardır:
// Block scope
// Function scope
// Global scope

// Block Scope
// ES6'dan (2015) önce JavaScript değişkenlerinin yalnızca Global Kapsamı ve Fonksiyon Kapsamı vardı. ES6 iki önemli yeni JavaScript anahtar sözcüğünü tanıttı: let ve const. Bu iki anahtar sözcük JavaScript'te Blok Kapsamı sağlar. Bir { } bloğu içinde bildirilen değişkenlere blok dışından erişilemez:
{
    let x = 4;
    console.log(x);
}
// console.log(x);  Reference Error verir. x is not defined.

// Ancak var anahtar sözcüğü ile bildirilen değişkenler blok kapsamına sahip OLAMAZ. Bir { } bloğu içinde bildirilen değişkenlere blok dışından erişilebilir.
{
    var y = 6;
}
console.log(y);

// Function Scope
// JavaScript'te fonksiyon kapsamı vardır: Her fonksiyon yeni bir kapsam oluşturur. Bir fonksiyon içinde tanımlanan değişkenlere fonksiyon dışından erişilemez (görülemez). var, let ve const ile bildirilen değişkenler, bir fonksiyon içinde bildirildiklerinde oldukça benzerdir.

// Local Scope
// Bir JavaScript fonksiyonu içinde bildirilen değişkenler, fonksiyon için LOCAL'dir:

// carName cannot use here
myFunc();
function myFunc() {
    let carName = "Volvo";
    document.getElementById("demo").innerHTML = carName; // carName can use here
}
// console.log(carName); Reference Error .. carName cannot use here

// Yerel değişkenler "Function Scope" kapsamındadır: Bunlara yalnızca fonksiyon içinden erişilebilir.

// Yerel değişkenler yalnızca kendi işlevleri içinde tanındığı için, aynı ada sahip değişkenler farklı işlevlerde kullanılabilir. Yerel değişkenler bir fonksiyon başladığında oluşturulur ve fonksiyon tamamlandığında silinir.

// Global JavaScript Variables
// Bir fonksiyonun dışında bildirilen bir değişken GLOBAL olur.
let myTeam = "Galatasaray";
myFunc1();

function myFunc1() {
    document.getElementById("demo1").innerHTML = myTeam;
}

document.getElementById("demo2").innerHTML = myTeam;

// Global bir değişkenin Global Kapsamı vardır. Bir web sayfasındaki tüm komut dosyaları ve işlevler buna erişebilir.

// Global olarak bildirilen değişkenler (herhangi bir fonksiyonun dışında) Global Kapsam'a sahiptir. Global değişkenlere bir JavaScript programının herhangi bir yerinden erişilebilir.

// JS Variables 
// JavaScript'te nesneler ve fonksiyonlar da değişkendir. Kapsam, değişkenlerin, nesnelerin ve işlevlerin kodun farklı bölümlerinden erişilebilirliğini belirler.


// The Lifetime of JavaScript Variables
// Bir JavaScript değişkeninin ömrü, bildirildiği anda başlar. Fonksiyon (yerel) değişkenleri fonksiyon tamamlandığında silinir. Bir web tarayıcısında, tarayıcı penceresini (veya sekmesini) kapattığınızda global değişkenler silinir.