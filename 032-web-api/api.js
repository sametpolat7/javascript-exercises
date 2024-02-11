// JavaScript WEB API
// API veya Uygulama Programlama Arayüzü (Application Programming Interface), farklı yazılım uygulamalarının birbirleriyle iletişim ve etkileşim kurmasına olanak tanıyan bir dizi kural, protokol ve araçtır. API'ler, yazılım sistemlerinin farklı bileşenlerinin nasıl etkileşime girmesi gerektiğini tanımlayarak, geliştiricilerin bir yazılım uygulamasından veya hizmetinden belirli işlevlere veya verilere, o uygulamanın iç işleyişini anlamalarına gerek kalmadan programlı olarak erişmelerini sağlar.

// Web API veya Web Uygulama Programlama Arayüzü, farklı yazılım uygulamalarının internet üzerinden birbirleriyle iletişim kurmasına olanak tanıyan bir dizi kural ve protokoldür. Bir yazılım uygulamasının, tipik olarak HTTP istekleri (GET, POST vs) kullanarak standartlaştırılmış bir formatta (JSON, XML vs) veri gönderip alarak başka bir uygulama veya hizmetle etkileşime girmesini sağlar.

// Tüm tarayıcılar, karmaşık işlemleri desteklemek ve verilere erişmeye yardımcı olmak için bir dizi yerleşik Web API'sine sahiptir. Örneğin, Geolocation API tarayıcının bulunduğu yerin koordinatlarını döndürebilir.

const myLocation = navigator.geolocation.getCurrentPosition((pos) => {
    document.getElementById("demo").innerHTML = ` 
    Latitude: ${pos.coords.latitude} <br>
    Longitude: ${pos.coords.longitude} <br>
    Accuracy: ${pos.coords.accuracy}`
});


// Validation API

// HTML5 Constraint Validation API ile Form Doğrulama 
// HTML5, Constraint Validation API aracılığıyla JavaScript üzerinden erişilebilen yerleşik form doğrulama özelliklerini kullanıma sunmuştur. Bu API, required, minlength, maxlength, pattern gibi nitelikleri kullanarak doğrulama kurallarını doğrudan HTML'de tanımlamanıza ve ardından formun ve öğelerinin geçerliliğini kontrol etmek için JavaScript kullanmanıza olanak tanır.
function formValidity() {
    const identyInp = document.getElementById("identy");
    if(identyInp.checkValidity()) {
        document.getElementById("demo1").innerHTML = "Input OK!"
    }else {
        document.getElementById("demo1").innerHTML = identyInp.validationMessage;
    }
}


// Web Storage API
// Genellikle Web Depolama API'si olarak adlandırılan Depolama API'si, web uygulamalarının verileri kullanıcının tarayıcısında yerel olarak depolamasını sağlayan bir dizi mekanizmadır. Veri depolamak için iki mekanizma sağlar: localStorage ve sessionStorage. Bu mekanizmalar, geliştiricilerin basit bir API ile bir web tarayıcısında anahtar-değer çiftlerini depolamasına olanak tanır.

// localStorage
// localStorage nesnesi, belirli bir Web Sitesi için yerel depolama alanına erişim sağlar. Bu etki alanı için veri öğelerini depolamanıza, okumanıza, eklemenize, değiştirmenize ve silmenize olanak tanır. Veriler son kullanma tarihi olmadan saklanır ve tarayıcı kapatıldığında silinmez. Veriler günler, haftalar ve yıllar için mevcut olacaktır.

// The setItem() Method
// localStorage.setItem() yöntemi bir veri öğesini bir depolama biriminde saklar. Parametre olarak bir ad ve bir değer alır:
localStorage.setItem("username", "sametpolat7");
localStorage.setItem("username1", "mertktopal25");
localStorage.setItem("username2", "amertbuna");

// The getItem()
// localStorage.getItem() yöntemi, depolama alanından bir veri öğesi alır.
console.log(localStorage.getItem("username"));

// The sessionStorage()
// sessionStorage nesnesi localStorage nesnesi ile aynıdır. Aradaki fark, sessionStorage nesnesinin bir oturum için veri depolamasıdır. Tarayıcı kapatıldığında veriler silinir.
sessionStorage.setItem("theme", "dark");

// Sayfayı yeniden yüklerseniz, sessionStorage'da depolanan verilere yine de erişilebilir. Ancak, sekmeyi veya pencereyi kapattığınızda, söz konusu sekme veya pencere için sessionStorage verileri temizlenir ve sayfadan uzaklaşırsanız (örneğin, başka bir web sitesine), sessionStorage verileri de temizlenir. Ancak sayfa açık kaldığı sürece, yeniden yüklemelerde bile, sessionStorage verileri kalıcı olacaktır.


// The removeItem() Method
localStorage.removeItem("mertktopal25")

// The clear() Method
localStorage.clear();