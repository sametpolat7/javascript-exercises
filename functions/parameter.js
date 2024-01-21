// JavaScript Function Parameters
// Parametre, bir fonksiyona geçirilen değerleri temsil eden değişkenlerdir. Bir fonksiyon tanımlandığında, bu fonksiyonun belirli işlevlerini yerine getirmesi için gerekli olan değerleri alabilmesi için parametreler belirtilebilir. 
// Parametreler, fonksiyonun farklı durumlarda farklı değerlerle çalışabilmesini sağlar, bu da fonksiyonun genel kullanılabilirliğini artırır.
// Parametreler, aynı mantığı paylaşan farklı değerlerle çalışabilen fonksiyonların oluşturulmasına olanak tanır, bu da kodun daha genel ve yeniden kullanılabilir olmasını sağlar.
//  Fonksiyonlar genellikle dış dünyadan (kullanıcı girişi, başka bir fonksiyondan gelen değerler vb.) alınan verilerle çalışır. Parametreler, bu dış değerleri fonksiyon içine iletmek için kullanılır.

// Function Parameters and Arguments
const birdFunc = (a, b) => { // Parametre
    return a * b;
}
console.log(birdFunc(5, 9)); // Argüman

// Fonksiyon parametreleri, fonksiyon tanımında listelenen "isimlerdir".
// Fonksiyon argümanları, fonksiyona aktarılan gerçek "değerlerdir".

// Parameters Rules
// JavaScript fonksiyonları parametreler üzerinde veri türü kontrolü yapmaz.
// JS fonksiyonları argüman sayılarını kontrol etmez. Sırası geldikçe parametreler üzerinden fonksiyona basar.
const dogFunc = (a, b) => {
    return a * b;
}
document.getElementById("demo13").innerHTML = dogFunc(1, 2, 3, 4, 5);


// Default Parameter Values
const catFunc = (a, b) => {
    return a + b;
}
document.getElementById("demo14").innerHTML = catFunc(5); // NaN. Çünkü y parametresi argümandan bir değer alamadığı için undefined döndürdü. Bunun önüne geçmek için şöyle bir düzenleme yapılabilir:
const crocodileFunc = (a, b = 10) => {
    return a + b;
}
document.getElementById("demo15").innerHTML = crocodileFunc(5); // 15. b parametresi undefined değeri alması ihtimaline karşılık "default" bir değer (10) ile tanımlandı.


// Function Rest Parameter
// Rest parametre (...) bir fonksiyonun belirsiz sayıda argümanı bir dizi olarak ele almasını sağlar:
const snakeFunc = (...arg) => {
    let sum = 0;
    for(let x of arg) {
        sum += x;
    }
    return sum;
}
document.getElementById("demo16").innerHTML = snakeFunc(54, 99, 20, 82, 31, 10, 42);


// The [arguments] Object
// JavaScript'teki fonksiyonlarda, arguments adında özel bir nesne bulunur. Bu nesne, fonksiyon içindeki tüm argümanlarıiçerir. arguments nesnesi, fonksiyon içinde her zaman mevcuttur ve bir dizi "benzeri" bir nesnedir.

// arguments nesnesi, bir dizi benzeri bir nesne olmasına rağmen tam anlamıyla bir dizi değildir. Ancak, dizi benzeri davranış sergiler. Örneğin, length özelliğine ve indislerle erişmeye izin verir, ancak dizi üzerindeki bazı özel yöntemlere sahip değildir.
function eagleFunc(...arg) {
    let txt = "";
    for(let i = 0; i < arguments.length; i++) {
        txt += arguments[i] + " ";
    }
    return txt;
}
document.getElementById("demo17").innerHTML = eagleFunc(1, 2, 3, 4, 5);

function lionFunc(...arg) {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("demo18").innerHTML = lionFunc(30, 98, 25, 0, 17, 1025);

// argument object sadece normal fonksiyonlarda kullanılabilir. Arrow fonksiyonlarında tanımlı değildir.