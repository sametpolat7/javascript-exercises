// JavaScript Closures
// JavaScript değişkenleri Local veya Global Kapsama ait olabilir.
// JS Closures, global değişkenleri lokal değişkenler haline getirebilir.

let abc = "abc";
function Abc() {
    return console.log(abc);
}
Abc();

function Cba() {
    let abc = "abc";
    return console.log(abc);
}
Cba();

// İlk örnekte, abc global bir değişkendir.
// Bir web sayfasında, global değişkenler sayfaya aittir.
// Global değişkenler sayfadaki diğer tüm komut dosyaları tarafından kullanılabilir (ve değiştirilebilir).

// Son örnekte cba yerel bir değişkendir.
// Yerel bir değişken yalnızca tanımlandığı işlevin içinde kullanılabilir. Diğer fonksiyonlardan ve diğer kodlama kodlarından gizlenir.
// Aynı ada sahip global ve yerel değişkenler farklı değişkenlerdir. Birini değiştirmek diğerini değiştirmez.


// Bildirim anahtar sözcüğü (var, let veya const) olmadan oluşturulan değişkenler, bir fonksiyon içinde oluşturulmuş olsalar bile her zaman globaldir. (Çünkü, arka planda var ile bildirilmişlerdir.)

// Global değişkenler, başka bir sayfaya gittiğinizde veya pencereyi kapattığınızda olduğu gibi, sayfa silinene kadar yaşar.

// Yerel değişkenlerin ömürleri kısadır. İşlev çağrıldığında oluşturulurlar ve işlev bittiğinde silinirler.


// A Counter Dilemma (Sayma İkilemi)
// Bir şeyi saymak için bir değişken kullanmak istediğinizi ve bu sayacın tüm fonksiyonlar tarafından kullanılabilmesini istediğinizi varsayalım. Sayacı artırmak için global bir değişken ve bir fonksiyon kullanabilirsiniz:
let counter = 0;

function countFunction() {
    return counter += 1;
}
countFunction();
countFunction();
countFunction();

console.log(counter);


// Yukarıdaki çözümle ilgili bir sorun var: Sayfadaki herhangi bir kod countFunction() fonk. çağırmadan sayacı değiştirebilir. Diğer kodların değiştirmesini önlemek için sayaç countFunction() için yerel olmalıdır:
function countFunction1() {
    let counter = 0;
    return counter += 1;
}
countFunction1();
countFunction1();
countFunction1();

console.log(countFunction1());

// Çalışmadı çünkü fonksiyonu her çağırdığımızda yerel sayacı sıfırlıyoruz.

// Bir JavaScript iç fonksiyonu bunu çözebilir.
// Tüm fonksiyonların global kapsama erişimi vardır.  
// Aslında, JavaScript'te tüm fonksiyonların "üstlerindeki" kapsama erişimleri vardır.
// JavaScript iç içe fonksiyonları destekler. İç içe geçmiş fonksiyonlar "üstlerindeki" kapsama erişebilirler.
// Bu örnekte, plus() iç fonksiyonunun üst fonksiyondaki sayaç değişkenine erişimi vardır:
function countFunction2() {
    let sayaç = 0;
    plus();
    function plus() {
        return sayaç += 1;
    }
    return sayaç;
}
console.log(countFunction2());

