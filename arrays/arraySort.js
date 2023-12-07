// JavaScript Sorting Arrays
// Sorting an Array
// sort() yöntemi bir diziyi alfabetik olarak sıralar:
const teams = ["GS", "FB", "BJK", "TS", "ADS"];
document.getElementById("demo19").innerHTML = teams;
teams.sort();
document.getElementById("demo20").innerHTML = teams;

// Reversing an Array
// reverse() yöntemi, bir dizideki öğeleri tersine çevirir. Bir diziyi azalan sırada sıralamak için kullanabilirsiniz:
teams.reverse();
document.getElementById("demo21").innerHTML = teams;

// Numeric Sort
/**
 * Varsayılan olarak sort() işlevi değerleri string olarak sıralar.
 * Bu, stringler için iyi çalışır ("Apple", "Banana "dan önce gelir).
 * Ancak, sayılar string olarak sıralanırsa, "25" "100 "den büyüktür, çünkü "2" "1 "den büyüktür.
 * Bu nedenle, sort() yöntemi sayıları sıralarken yanlış sonuç üretecektir.

    Bunu bir "compare function" kullanarak düzeltebilirsiniz:
 */
const pointsSorting = ["17", "10","121", "53", "98", "2", "25","37"];
document.getElementById("demo22").innerHTML = pointsSorting;
pointsSorting.sort(function(a, b){return a - b});
document.getElementById("demo23").innerHTML = pointsSorting;
pointsSorting.sort(function(a, b){return b - a});
document.getElementById("demo24").innerHTML = pointsSorting;

// The Compare Function
/**
 * Karşılaştırma fonksiyonunun amacı alternatif bir sıralama düzeni tanımlamaktır.
 * Karşılaştırma işlevi, bağımsız değişkenlere bağlı olarak negatif, sıfır veya pozitif bir değer döndürmelidir.
 * sort() işlevi iki değeri karşılaştırdığında, değerleri karşılaştırma işlevine gönderir ve değerleri döndürülen (negatif, sıfır, pozitif) değere göre sıralar.
 * Sonuç negatifse a, b'den önce sıralanır.
 * Sonuç pozitifse, b, a'dan önce sıralanır.
 * Sonuç 0 ise, iki değerin sıralama düzeninde herhangi bir değişiklik yapılmaz.
 */
const number = ["40", "20", "30","100", "1", "1000", "7", "50"];
document.getElementById("demo25").innerHTML = number;
function Alphabetically() {
    number.sort();
    document.getElementById("demo25").innerHTML = number;
}
function Numerically() {
    number.sort(function(a, b){return a - b});
    document.getElementById("demo25").innerHTML = number;
}

// Sorting an Array in Random Order
function randomPoints() {
    pointsSorting.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo26").innerHTML = pointsSorting;
}

// The Fisher Yates Method
// Yukarıdaki örnek, array.sort(), doğru değildir. Bazı sayıları diğerlerine tercih edecektir. En popüler doğru yöntem Fisher Yates shuffle olarak adlandırılır ve veri biliminde 1938 gibi erken bir tarihte tanıtılmıştır! JavaScript'te yöntem şu şekilde çevrilebilir:
document.getElementById("demo27").innerHTML = pointsSorting;
function fisherYates() {
    for (let i = pointsSorting.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = pointsSorting[i];
        pointsSorting[i] = pointsSorting[j];
        pointsSorting[j] = k;
    }
    document.getElementById("demo27").innerHTML = pointsSorting;
}

// Find the Lowest or Highest Array Value
// Bir dizideki maksimum veya minimum değeri bulmak için yerleşik işlevler yoktur. Ancak, bir diziyi sıraladıktan sonra, en yüksek ve en düşük değerleri elde etmek için dizini kullanabilirsiniz:
//En yüksek sayı
document.getElementById("demo28").innerHTML = pointsSorting;
function highestValue() {
    pointsSorting.sort(function(a, b){return a - b});
    document.getElementById("demo29").innerHTML =
    "The Highest Value is: " + pointsSorting[pointsSorting.length - 1];
}
// En düşük sayı
document.getElementById("demo30").innerHTML = pointsSorting;
function lowestValue() {
    pointsSorting.sort(function(a, b){return a - b});
    document.getElementById("demo31").innerHTML = 
    "The Lowest Value is: " + pointsSorting[0];
}

// Yalnızca en yüksek (veya en düşük) değeri bulmak istiyorsanız, tüm bir diziyi sıralamak çok verimsiz bir yöntemdir.

