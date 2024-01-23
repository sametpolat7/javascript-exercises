// JavaScript Switch
// Yürütülecek birçok kod bloğundan birini seçmek için switch deyimini kullanın.
/*
İşte böyle çalışıyor:
 * switch ifadesi bir kez değerlendirilir.
 * İfadenin değeri, her bir durumun değerleriyle karşılaştırılır.
 * Bir eşleşme varsa, ilişkili kod bloğu yürütülür.
 * Eşleşme yoksa, varsayılan kod bloğu yürütülür.
 */

// The "switch" keyword
// Syntax : switch (expression) {}
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

// The "break" keyword
// JavaScript bir break anahtar sözcüğüne ulaştığında, switch bloğundan çıkar. Bu, anahtar bloğunun içindeki yürütmeyi durduracaktır. Bir switch bloğundaki son durumu kırmak gerekli değildir. Blok zaten orada kırılır (sona erer).

// Break ifadesi atlanırsa, eşleşme olsa bile sonraki adıma geçilir.

// The "default" keyword
// Varsayılan anahtar sözcüğü, büyük/küçük harf eşleşmesi yoksa çalıştırılacak kodu belirtir:
let day1;

switch (new Date().getDay()) {
    case 0:
        day1 = "Sunday";
        break;
    case 6:
        day1 = "Saturday";
        break;
    default:
        day1 = "Looking forward to the Weekend!"
}
document.getElementById("demo1").innerHTML = day1;

// "default" durum, bir switch bloğundaki son durum olmak zorunda değildir. En başa da yazılabilirdi.

// Joint Code Blocks
// Bazen farklı anahtar durumlarının aynı kodu kullanmasını istersiniz.
let day2;

switch (new Date().getDay()) {
    case 0:
    case 6:
        day2 = "We are on the weekend!"
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day2 = "We are on the mid-week!"
}
document.getElementById("demo2").innerHTML = day2;

// Switching Details
// Birden fazla case bir case değeriyle eşleşiyorsa, ilk case seçilir.
// Eşleşen case bulunamazsa, program default etikete devam eder.
// Default etiket bulunamazsa, program switch'ten sonraki deyim(ler)e devam eder.

// Strict Comparison (Katı Karşılaştırma === )
// Anahtarlama durumları katı karşılaştırma (===) kullanır. Değerlerin eşleşmesi için aynı türde olması gerekir. Kesin bir karşılaştırma yalnızca işlenenler aynı türdeyse doğru olabilir.
let x = "0";

switch (x) {
    case 0:
        document.getElementById("demo3").innerHTML = "The value 0.";
        break;
    default:
        document.getElementById("demo3").innerHTML = "The value not defined.";
}
