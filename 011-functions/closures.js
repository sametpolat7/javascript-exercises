// JavaScript Closures
// Bir closure (kapanış) bir iç fonksiyon ile dış fonksiyonun birleşimini ifade eder.
// Bu yapı iç fonksiyonun, dış fonksiyonuna bağlı değişkenlere erişebimesini (hatta parametresine bile) sağlar.
// Özellikle fonksiyonların başka fonksiyonlar içinde tanımlanmasında karşımıza çıkar.

function disFonksiyon(disParam) {
    let disDegisken = 10;
    function icFonksiyon(icParam) {
        return disParam + disDegisken + icParam;
    }
    return icFonksiyon;
}

const closureFonksiyon = disFonksiyon(5); // Bu satırda, dışFonksiyon adlı fonksiyonu çağırıyoruz ve bu fonksiyon bir iç fonksiyon olan içFonksiyon fonksiyonunu döndürüyor. Ancak, içFonksiyon fonksiyonunu doğrudan çağırmıyoruz, onun yerine dışFonksiyon'u çağırarak elde ettiğimiz fonksiyonu closureFonksiyon adlı bir değişkene atıyoruz.
console.log(closureFonksiyon(3));

// Bu örnekte, disFonksiyon adlı bir fonksiyon, bir iç fonksiyonu olan icFonksiyon fonksiyonunu döndürüyor. 
// Dış fonksiyonun kapsamındaki disParam ve diDegisken değişkenleri, iç fonksiyon tarafından kullanılabiliyor. 
// ** disFonksiyon çağrıldığında, bir "closure" oluşur ve iç fonksiyon dışarı çıkartılarak closureFonksiyon adlı bir değişkene atanır. **
// Daha sonra bu closureFonksiyon çağrıldığında, dış fonksiyonun kapsamındaki değişkenlere hala erişebilir.


// Closures, özellikle callback fonksiyonlar, event handler'lar ve asenkron programlamada kullanıldığında güçlü bir yapı oluşturabilir. Bu sayede değişkenlerin kapsamı kontrol altında tutularak beklenmeyen hataların önüne geçilebilir.


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
// Yukarıdaki çözümle ilgili bir sorun var: Sayfadaki herhangi bir kod countFunction() fonk. çağırmadan sayacı değiştirebilir. (Başka bir blokta counter = 100 tanımlanabilir.)
// Diğer kodların değiştirmesini önlemek için sayaç countFunction() için yerel olmalıdır:
function countFunction1() {
    let counter = 0;
    return counter += 1;
}
countFunction1();
countFunction1();
countFunction1();

console.log(countFunction1());
// Çalışmadı çünkü fonksiyonu her çağırdığımızda yerel sayacı sıfırlıyoruz.

// Bir JavaScript iç fonksiyonu bunu çözebilir. Tüm fonksiyonların global kapsama erişimi vardır. Aslında, JavaScript'te tüm fonksiyonların "üstlerindeki" kapsama erişimleri vardır. JavaScript iç içe fonksiyonları destekler. İç içe geçmiş fonksiyonlar "üstlerindeki" kapsama erişebilirler.

// Bu örnekte, sayman() iç fonksiyonunun üst fonksiyondaki sayaç değişkenine erişimi vardır:
function countFunction2() {
    let sayac = 0;
    function sayman() {
        sayac += 1;
        return document.getElementById("demo23").innerHTML = sayac;
    }
    return sayman;
}
const closureFunc = countFunction2(); // closureFunc = sayman() düşünebiliriz. Artısı üst kapsam değişkenlerine erişim hakkıdır.