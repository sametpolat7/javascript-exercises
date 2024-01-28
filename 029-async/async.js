// JavaScript ASYNC

// Callbacks
// Callback, başka bir fonksiyona "argüman" olarak aktarılan bir fonksiyondur. Bu teknik, bir fonksiyonun başka bir fonksiyonu çağırmasına olanak tanır. Bir callback fonksiyonu, başka bir fonksiyonun işi bittikten sonra çalışabilir.

// Sequence Control
// Bazen bir fonksiyonun ne zaman çalıştırılacağı üzerinde daha iyi kontrol sahibi olmak istersiniz.

// Bir hesaplama yapmak ve ardından sonucu görüntülemek istediğinizi varsayalım:
const display = (sum) => document.getElementById("demo").innerHTML = sum;

const calculate = (a, b) => {
    return a + b;
};

let result = calculate(5, 10);
display(result);

// Ya da
const display2 = (result) => document.getElementById("demo1").innerHTML = result;

const calculate2= (a, b) => {
    let add = a + b;
    display2(add);
};
calculate2(5, 10);

// Yukarıdaki ilk örnekle ilgili sorun, sonucu görüntülemek için iki fonksiyon çağırmanız gerektiğidir.

// İkinci örnekteki sorun, hesap makinesi işlevinin sonucu görüntülemesini engelleyememenizdir.

// Bu durumlardan callback fonksiyonu ile kurtulabilirsiniz.

// Callback Function
// Callback, başka bir fonksiyona "argüman" olarak aktarılan bir işlevdir.
const cbDisplay = (result) => document.getElementById("demo2").innerHTML = result;

const cbCalculate = (a, b, myCallBack) => {
    let sum = a + b;
    myCallBack(sum);
};

cbCalculate(5, 10, cbDisplay); // Burada cbDisplay fonksiyonu "callback" olarak adlandırılır. cbCalculate fonksiyonuna "argüman" olarak eklenir.

// Bir fonksiyon "argüman" olarak ilettildiğinde, parantez kullanılmaz.

// Callbacklerin gerçekten parladığı yerler, bir fonksiyonun başka bir fonksiyonu beklemek zorunda olduğu asenkron fonksiyonlardır.


// Asynchronous JavaScript
// Diğer fonksiyonlarla paralel çalışan fonksiyonlara asenkron denir. Bunun iyi bir örneği:


// setTimeout()
// setTimeout() fonksiyonunu kullanırken, zaman aşımında yürütülecek bir callback fonksiyonu belirtebilirsiniz:
setTimeout(asyncFunc, 3000);

function asyncFunc() {
    return document.getElementById("demo3").innerHTML = "Where am i?";
};

// Bu örnekte asyncFunc bir callback olarak kullanılmıştır. setTimeout() fonksiyonuna argüman olarak eklenmiştir.
// Burada JavaScript işlem parçacığı sıralı şekilde yürütmeye devam ederken (yürütme başlangıcından itibaren 3sn sayarak ve zamanı geldiğinde) paralel olarak asyncFunc işlevini yürütmüştür.

// setTimeout() ile çalışırken bir fonksiyonun adını başka bir işleve argüman olarak aktarmak yerine, isterseniz tüm fonksiyonuda aktarabilirsiniz:
setTimeout(
    () => {
        document.getElementById("demo4").innerHTML = "When did i move?"
    }, 4000
);


// setInterval()
// setInterval() işlevini kullanırken, her aralık için yürütülecek bir callback fonksiyonu belirtebilirsiniz:
setInterval(asyncFunc1, 1000);

function asyncFunc1() {
    let time = new Date();
    document.getElementById("demo5").innerHTML = 
    `${time.getHours()}:
    ${time.getMinutes()}:
    ${time.getSeconds()}`
}

// Bu örnekte asyncFunc1, bir callback olarak kullanılmıştır. 1000 aralıklar arasındaki milisaniye sayısıdır, bu nedenle myFunction() her saniye çağrılacaktır.

// Eşzamansız (Asynchronous) programlama ile JavaScript programları uzun süre çalışan görevleri başlatabilir ve diğer görevleri paralel olarak çalıştırmaya devam edebilir. Ancak, asenkron programların yazılması ve hata ayıklaması zordur.

// Bu nedenle, çoğu modern asenkron JavaScript yöntemi callback kullanmaz. Bunun yerine, JavaScript'te asenkron programlama "Promises" kullanılarak çözülür.


// JavaScript Promises
// Bir "Promise" hem "üreten" kodu, hem de "tüketen" koda yapılan çağrıları içerir:

// "Üretim kodu" (Biraz zaman alabilir.)
let myPromise = new Promise(function(resolve, reject) {
    resolve(); // Eğer yürütme başarılı olursa
    reject(); // Eğer yürütme hata verirse
});

// "Tüketim Kodu" (Yerine getirilmiş bir "Promise" için beklemelidir.)
myPromise.then(
    function(value) {
        // Başarılı olursa kod.
    },
    function(error) {
        // Hata verirse kod.
    }
)

// Üreten kod sonucu elde ettiğinde, iki geri aramadan birini çağırmalıdır:
// Başarılı olursa --> resolve()
// Hata verirse    --> reject()


// Promise Object Properties
// Bir "Promise" nesnesi şu state (durumlarda) olabilir:

// Pending (Beklemede - Çalışıyor) Değer --> Tanımsız (undefined)
// Fulfilled (Yerine getirildiğinde) Değer --> Sonuç değeri
// Rejected (Reddedildiğinde) Değer --> Hata nesnesi

// Promise nesnesi iki propertyi destekler: state(durum) ve result(sonuç).
// Ancak promise özelliklerinin durumuna ve sonucuna erişemezsiniz. Vaatleri işlemek için bir "Promise" yöntemi kullanmalısınız.

// Bu ifade, JavaScript'te promise'lerle ilgili önemli bir kavramı açıklar. Promise'lerin temel özelliklerinden biri, içlerinde sakladıkları durum ve sonuca erişimi sınırlamalarıdır. Bu sınırlama, promise'lerin asenkron işlemleri yönetirken güvenilir bir şekilde çalışmasını sağlar.

// Promise nesnesinin bu durumlarına ve sonuçlarına doğrudan erişmek mümkün değildir. Bunun yerine, bu bilgilere erişmek için promise'lerin sağladığı yöntemler kullanılır. Örneğin, .then() yöntemi, bir promise'nin başarılı bir şekilde tamamlanması durumunda çalışacak olan bir fonksiyonu kabul eder. Benzer şekilde, .catch() yöntemi, bir promise'nin reddedilmesi durumunda çalışacak olan bir fonksiyonu kabul eder.

let myPromise1 = new Promise((resolve, reject) => {
    let x = 0;
    
    if(x === 0) {
        resolve("OK");
    } else {
        reject("Error!");
    }
});

myPromise.then(
    (value) => {
        document.getElementById("demo6").innerHTML = value;
    },
    (error) => {
        document.getElementById("demo6").innerHTML = error;
    }
)














