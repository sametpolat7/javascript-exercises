// JavaScript If-Else and Else if
// Koşullu ifadeler, farklı koşullara bağlı olarak farklı eylemler gerçekleştirmek için kullanılır.

/* *Koşullu İfadeler
 * Kod yazarken çoğu zaman farklı kararlar için farklı eylemler gerçekleştirmek istersiniz.
 * Bunu yapmak için kodunuzda koşullu ifadeler kullanabilirsiniz.
    JavaScript'te aşağıdaki koşullu ifadelere sahibiz:
 * Belirtilen bir koşul doğruysa yürütülecek bir kod bloğu belirtmek için "if" kullanın
 * Aynı koşulun yanlış olması durumunda çalıştırılacak bir kod bloğu belirtmek için "else" kullanın
 * İlk koşulun yanlış olması durumunda test edilecek yeni bir koşul belirtmek için "else if" kullanın
 * Yürütülecek çok sayıda alternatif kod bloğu belirtmek için "switch" kullanın
 */

// If 
// Bir koşul doğruysa yürütülecek bir JavaScript kodu bloğu belirtmek için if deyimini kullanın.
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good Day!";
} else {
    document.getElementById("demo").innerHTML = "Good Evening!";
}

// Else
// Koşulun yanlış olması durumunda yürütülecek bir kod bloğu belirtmek için else deyimini kullanın.
const clockNumb = ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00"];
let theTime = new Date().getHours();

if (theTime <= 0){ // theTime = 0 da neden hata verdiğini unutma!
    document.getElementById("demo1").innerHTML = `Time : ${clockNumb[12]}P.M`;
} else if (theTime <= 12) {
    document.getElementById("demo1").innerHTML = `Time : ${clockNumb[theTime]}A.M`;
} else {
    document.getElementById("demo1").innerHTML = `Time : ${clockNumb[theTime]}P.M`;
}

// Else if
// İlk koşulun yanlış olması durumunda yeni bir koşul belirtmek için else if deyimini kullanın.

// Bir örnek:
let text;
let rndNumb = Math.random();
if (rndNumb < 0.5) {
    text = "I'm Superman!";
} else {
    text = "I'm Batman";
}
document.getElementById("demo2").innerHTML = text;