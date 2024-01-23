// JavaScript Math Object
// JavaScript Math nesnesi, sayılar üzerinde matematiksel görevler gerçekleştirmenizi sağlar.
document.getElementById("demo").innerHTML = "Pi : " + Math.PI;

// The Math Object
// Diğer nesnelerin aksine, Math nesnesinin kurucusu yoktur. Math nesnesi statiktir. Tüm yöntemler ve özellikler önce bir Math nesnesi oluşturmadan kullanılabilir.

// Math Özellikleri (Sabitler)
// Herhangi bir Math özelliği için sözdizimi : Math.property. JavaScript, Math özellikleri olarak erişilebilen 8 matematiksel sabit sağlar:
document.getElementById("demo1").innerHTML = "Euler : " + Math.E;
document.getElementById("demo2").innerHTML = "Pi : " + Math.PI; 
document.getElementById("demo3").innerHTML = "2'nin karekökü : " + Math.SQRT2; 
document.getElementById("demo4").innerHTML = "1/2'nin karekökü : " + Math.SQRT1_2; 
document.getElementById("demo5").innerHTML = "LN2 : " + Math.LN2; 
document.getElementById("demo6").innerHTML = "LN10 : " + Math.LN10; 
document.getElementById("demo7").innerHTML = "Log2E : " + Math.LOG2E; 
document.getElementById("demo8").innerHTML = "Log10E : " + Math.LOG10E;

// Math Methods
// Math any yöntemleri için syntax şöyledir: Math.method(sayı)

// Number to Integer
// Bir sayıyı tamsayıya yuvarlamak için 4 yaygın yöntem vardır:

// Math.round()
// Math.round(x) en yakın tamsayıyı döndürür:
document.getElementById("demo9").innerHTML = Math.round(4.6);
document.getElementById("demo10").innerHTML = Math.round(4.5);
document.getElementById("demo11").innerHTML = Math.round(4.4);

// Math.ceil() and Math.floor()
// Math.ceil() sayıları "tavana" doğru bir sonraki tamsayıya göre yuvarlar.
document.getElementById("demo12").innerHTML = Math.ceil(4.6);
document.getElementById("demo13").innerHTML = Math.ceil(4.4);
document.getElementById("demo14").innerHTML = Math.ceil(4.1);
document.getElementById("demo15").innerHTML = Math.ceil(-4.1); // -4

// Math.floor() sayıları "tabana" doğru bir sonraki tamsayıya göre yuvarlar.
document.getElementById("demo16").innerHTML = Math.floor(4.9);
document.getElementById("demo17").innerHTML = Math.floor(4.6);
document.getElementById("demo18").innerHTML = Math.floor(4.1);
document.getElementById("demo19").innerHTML = Math.floor(-4.1); // -5

// Math.trunc()
// Sadece tam sayı kısmını döndürür.
document.getElementById("demo20").innerHTML = Math.trunc(4.6);
document.getElementById("demo21").innerHTML = Math.trunc(-4.6);

// Math.sign()
// Math.sign(x), x'in negatif, null veya pozitif olup olmadığını döndürür:
document.getElementById("demo22").innerHTML = Math.sign(-4);
document.getElementById("demo23").innerHTML = Math.sign(0);
document.getElementById("demo24").innerHTML = Math.sign(4);

// Math.pow(x, y)
// x'in değerini y kuvvetine göre döndürür.
console.log(Math.pow(4,2));
console.log(Math.pow(4,-2));

// Math.sqrt(x)
// x'in karekökünü döndürür
console.log(Math.sqrt(64));
console.log(Math.sqrt(2));

// Math.cbrt()
// x'nin küpkökünü döndürür
console.log(Math.cbrt(125));
console.log(Math.cbrt(27));

// Math.abs(x)
// x'in mutlak değerini alır.
console.log(Math.abs(-2));
console.log(Math.abs(-2.8));

// Math.sin()
// Math.sin(x), x açısının (radyan cinsinden verilir) sinüsünü (-1 ile 1 arasında bir değer) döndürür. Radyan yerine derece kullanmak istiyorsanız, dereceyi radyana dönüştürmeniz gerekir: 
// Radyan = Derece * PI / 180.
console.log(Math.sin(Math.PI / 2)); // 90 Derece = PI / 2 Radyan
console.log(Math.sin(90 * (Math.PI / 180))); // 90 Derece

console.log(Math.sin(Math.PI)); // 180 Derece = PI Radyan
console.log(Math.sin(180 * (Math.PI / 180))); 

// Math.cos()
// Math.cos(x), x açısının (radyan cinsinden verilir) kosinüsünü (-1 ile 1 arasında bir değer) döndürür. Radyan yerine derece kullanmak istiyorsanız, dereceyi radyana dönüştürmeniz gerekir:
// Radyan = Derece x PI / 180.
console.log(Math.cos(Math.PI / 2));
console.log(Math.cos(90 * (Math.PI / 180)));

console.log(Math.cos(Math.PI));
console.log(Math.cos(180 * (Math.PI / 180)));

// Math.min() and Math.max()
// Math.min() ve Math.max(), bir argüman listesindeki en düşük veya en yüksek değeri bulmak için kullanılabilir:
console.log(Math.min(-1, 5, 8, -10, 99, 500));
console.log(Math.max(-1, 5, 8, -10, 99, 500));

// Math.random()
// Math.random(), 0 (dahil) ile 1 (hariç) arasında rastgele bir sayı döndürür:
console.log(Math.random());
console.log(Math.round(Math.random())); // 0 ya da 1 döndürür.
console.log(Math.round(Math.random() * 10)); // 0 ile 9 arasında bir tam sayı döndürür.
console.log(Math.floor(Math.random() * 11)); // 0 ile 10 arasında bir tam sayı döndürür.

// A Proper Random Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Math.log() (e tabanına göre)
// Math.log(x), x'in "doğal" logaritmasını döndürür. Doğal logaritma, belirli bir büyüme seviyesine ulaşmak için gereken süreyi verir:
console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));

// Math.log2()
// Math.log2(x), x'in 2 tabanında logaritmasını döndürür.
console.log(Math.log2(2));
console.log(Math.log2(4));
console.log(Math.log2(8));
console.log(Math.log2(16));
console.log(Math.log2(32));

// Math.log10()
// Math.log10(x), x'in 10 tabanında logaritmasını döndürür.
console.log(Math.log10(10));
console.log(Math.log10(100));
console.log(Math.log10(1000));

