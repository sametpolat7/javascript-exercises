// JavaScript While Loop
// while, belirli bir koşul doğru olduğu sürece bir kod bloğunu çalıştırabilir.
let text8 = "";
let w = 0;

while (w < 11) {
    text8 += w + ". " + "kişi : " + "<br>";
    w++;
}
document.getElementById("demo8").innerHTML = text8;

// Koşulda kullanılan değişkeni artırmayı unutursanız, döngü asla sona ermeyecektir. Bu da tarayıcınızı çökertecektir.

// The Do While Loop
// do while döngüsü, while döngüsünün bir çeşididir. Bu döngü, koşulun doğru olup olmadığını kontrol etmeden önce kod bloğunu bir kez çalıştırır, ardından koşul doğru olduğu sürece döngüyü tekrarlar
let wh = 0;
let text9 = "";

do {
    text9 += "The Number is " + wh + "<br>";
    wh++;
}
while (wh < 10);
document.getElementById("demo9").innerHTML = text9;

// Aşağıdaki örnekte bir do while döngüsü kullanılmaktadır. Koşul yanlış olsa bile döngü her zaman en az bir kez yürütülür, çünkü kod bloğu koşul test edilmeden önce yürütülür:

// Comparing For and While
// Eğer for döngüsü ile ilgili bir önceki bölümü okuduysanız, while döngüsünün for döngüsü ile aynı olduğunu, 1. ve 3. deyimlerin çıkarıldığını göreceksiniz.

// Bu örnekteki döngü, cars dizisinden araba adlarını toplamak için bir for döngüsü kullanır:
const yourCars = ["Volvo", "BMW", "Skoda", "Bugatti"];
let f = 0;
let text10 = "";

for(; f < yourCars.length;) {
    text10 += yourCars[f] + "<br>";
    f++;
}
document.getElementById("demo10").innerHTML = text10;

// Şimdi bunu while döngüsü ile yazalım:
let whi = 0;
let text11 = "";
while(yourCars[whi]) {
    text11 += yourCars[whi] + "<br>";
    whi++;
}
document.getElementById("demo11").innerHTML = text11;