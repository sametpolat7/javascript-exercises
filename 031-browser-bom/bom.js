// JS Browser Object Model (BOM)
// JavaScript'teki Tarayıcı Nesne Modeli (BOM), JavaScript kodu ile web tarayıcısı arasında etkileşim sağlayan tarayıcıya özgü nesneler koleksiyonudur. Web belgelerinin (HTML, XML) yapısı ve içeriğiyle ilgilenen Document Object Model'in (DOM) aksine, Browser Object Model tarayıcı özelliklerine ve işlevselliğine odaklanır.

// Browser Object Model (BOM) JavaScript'in tarayıcıyla "konuşmasını" sağlar.

// Browser Object Model (BOM) için resmi bir standart yoktur. Modern tarayıcılar JavaScript etkileşimi için (neredeyse) aynı yöntemleri ve özellikleri uyguladığından, genellikle BOM'un yöntemleri ve özellikleri olarak adlandırılır.

// The Window Object
// Pencere nesnesi tüm tarayıcılar tarafından desteklenir. Tarayıcının penceresini temsil eder.
// Tüm "global" JavaScript nesneleri, fonksiyonları ve değişkenleri otomatik olarak pencere nesnesinin üyeleri haline gelir.
// Global değişkenler pencere nesnesinin propertyleridir.
// Global fonksiyonlar pencere nesnesinin metotlarıdır.
// Document object (HTML DOM) bile window object'in bir propertysidir.

// window.document.getElementById("header") == document.getElementById("header")


// WINDOW SIZE
const currentSize = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    document.getElementById("demo").innerHTML = 
    `Width : ${w} <br> Height : ${h}`;
}
currentSize();
window.addEventListener("resize", currentSize);
// window.open()
// window.close()


// WINDOW SCREEN
// window.screen nesnesi kullanıcının ekranı hakkında bilgi içerir.
console.log("window.screen.width", window.screen.width);
console.log("window.screen.height", window.screen.height);

// Bu değerin sadece tarayıcı penceresinin değil, tüm ekranın genişliğini temsil edeceğini unutmayın. Tarayıcı penceresinin genişliğine ihtiyacınız varsa, bunun yerine window.innerWidth değerini kullanabilirsiniz.

// window.screen.availWidth
// screen.availWidth özelliği, Windows Görev Çubuğu gibi arayüz özellikleri hariç olmak üzere, ziyaretçinin ekranının genişliğini piksel cinsinden döndürür.
console.log("window.screen.availWidth", window.screen.availWidth);
console.log("window.screen.availHeight", window.screen.availHeight);

// window.screen.colorDepth
// screen.colorDepth özelliği, bir rengi görüntülemek için kullanılan bit sayısını döndürür.
// Tüm modern bilgisayarlar renk çözünürlüğü için 24 bit veya 32 bit donanım kullanır:
// 24 bit = 16.777.216 farklı "Gerçek Renk"
// 32 bit = 4.294.967.296 farklı "Derin Renk"
// Eski bilgisayarlar 16 bit kullanıyordu: 65.536 farklı "Yüksek Renk" çözünürlüğü.
// Çok eski bilgisayarlar ve eski cep telefonları 8 bit kullanıyordu: 256 farklı "VGA rengi".
console.log("window.screen.colorDepth", window.screen.colorDepth);
// HTML'de kullanılan #rrggbb (rgb) değerleri "Gerçek Renkleri" (16.777.216 farklı renk) temsil eder.

// window.screen.pixelDepth
console.log("window.screen.pixelDepth", window.screen.pixelDepth);
// For modern computers, Color Depth and Pixel Depth are equal.


// WINDOW LOCATION
// window.location nesnesi, geçerli sayfa adresini (URL) almak ve tarayıcıyı yeni bir sayfaya yönlendirmek için kullanılabilir.

//window.location.href
// window.location.href özelliği geçerli sayfanın URL'sini döndürür.
console.log("window.location.href", window.location.href);

// window.location.protocol
// window.location.protocol özelliği sayfanın web protokolünü döndürür.
console.log("window.location.protocol", window.location.protocol);

// window.location.hostname
// window.location.hostname özelliği internet ana bilgisayarının (geçerli sayfanın) adını döndürür.
console.log("window.location.hostname", window.location.hostname);

// window.location.port
// window.location.port özelliği, internet ana bilgisayar bağlantı noktasının (geçerli sayfanın) numarasını döndürür.
console.log("window.location.port", window.location.port);

// window.location.pathname
//window.location.pathname özelliği geçerli sayfanın yol adını döndürür.
console.log("window.location.pathname", window.location.pathname);

// window.location.assign()
// window.location.assign() yöntemi yeni bir belge yükler.
const newDoc = document.getElementById("demo1");
newDoc.addEventListener("click", () => {
    window.location.assign("https://www.google.com.tr/?hl=tr");
})


// WINDOW HISTORY
// window.history nesnesi tarayıcı geçmişini içerir.
// Kullanıcıların gizliliğini korumak için JavaScript'in bu nesneye nasıl erişebileceği konusunda sınırlamalar vardır.

// Bazı yöntemler:
// history.back() - tarayıcıda geri tıklamakla aynı
// history.forward() - tarayıcıda ileri tıklamakla aynı


// WINDOW NAVIGATOR (Gezgin)
// window.navigator nesnesi ziyaretçinin tarayıcısı hakkında bilgi içerir.

// window.navigator.cookiesEnabled
// CookieEnabled özelliği, çerezler etkinleştirilmişse true, aksi takdirde false değerini döndürür:
console.log("navigator.cookieEnabled", navigator.cookieEnabled);

// window.navigator.appName;
// appName özelliği, tarayıcının uygulama adını döndürür:
console.log("navigator.appName", navigator.appName); // Expected : Netscape
// Bu özellik en son web standardında kaldırılmıştır (kullanımdan kaldırılmıştır). Çoğu tarayıcı (IE11, Chrome, Firefox, Safari) appName olarak Netscape döndürür.
// Tarayıcı hakkında daha güvenilir bir şekilde bilgi almak istiyorsanız, navigator.userAgent, navigator.appVersion veya navigator.vendor gibi diğer özellikleri kullanmalısınız.
console.log("navigator.vendor", navigator.vendor);
console.log("navigator.userAgent", navigator.userAgent);

// window.navigator.product
// product özelliği, tarayıcı motorunun ürün adını döndürür:
console.log("navigator.product", navigator.product);
// Bu özellik en son web standardında kaldırılmıştır (kullanımdan kaldırılmıştır). Çoğu tarayıcı Gecko'yu ürün olarak döndürür.

// NOT : Uyarı
// navigator nesnesinden gelen bilgiler genellikle yanıltıcı olabilir. Navigator nesnesi tarayıcı sürümlerini tespit etmek için kullanılmamalıdır. 
// Çünkü:
// Farklı tarayıcılar aynı adı kullanabilir.
// navigator verileri tarayıcı sahibi tarafından değiştirilebilir.
// Bazı tarayıcılar site testlerini atlamak için kendilerini yanlış tanımlıyor.
// Tarayıcılar, tarayıcıdan daha sonra piyasaya sürülen yeni işletim sistemlerini bildiremez.

// navigator.platform
// Platform özelliği, tarayıcı platformunu (işletim sistemi) döndürür:
console.log("navigator.platform", navigator.platform);

// navigator.language
// Dil özelliği, tarayıcının dilini döndürür:
console.log("navigator.language", navigator.language);

// navigator.online
// Tarayıcı çevrimiçi ise onLine özelliği true değerini döndürür:
console.log("navigator.onLine", navigator.onLine);

// navigator.javaEnabled()
// Java etkinse javaEnabled() yöntemi true değerini döndürür:
console.log("navigator.javaEnabled()", navigator.javaEnabled());


// JS POPUP BOXES
// JavaScript'te 3 adet açılır kutu vardır: Alert box, Confirm box, and Prompt box.

// alert box
// Bilginin kullanıcıya ulaştığından emin olmak istiyorsanız genellikle bir "alert" kutusu kullanılır. Bir uyarı kutusu açıldığında, kullanıcının devam etmek için "Tamam" tıklaması gerekecektir.
const alertBox = document.getElementById("demo2");
alertBox.addEventListener("click", () => {
    window.alert("I'm just a box!")
})
// window ön eki kullanımı zorunlu değildir.

// confirm box
// Onay kutusu genellikle kullanıcının bir şeyi doğrulamasını veya kabul etmesini istediğinizde kullanılır. Bir onay kutusu açıldığında, kullanıcının devam etmek için "Tamam" veya "İptal" seçeneğini tıklaması gerekecektir.
// Kullanıcı "Tamam" tıklarsa kutu "true" değerini döndürür. Kullanıcı "iptal" seçeneğini tıklarsa kutu "false" değerini döndürür.
const confirmBox = () => {
    if(confirm("You are leaving the page. Do you want?") === true) {
        window.open("https://www.linkedin.com/in/sametpolat17/", "_blank");
    }else {
        console.log("You selected stay this page.")
    }
}

// prompt box
// Kullanıcının bir sayfaya girmeden önce bir değer girmesini istediğinizde genellikle bir prompt kutusu kullanılır. Bir prompt kutusu açıldığında, kullanıcının bir giriş değeri girdikten sonra devam etmek için tamam veya iptal seçeneğini tıklaması gerekecektir. Kullanıcı tamama tıklarsa kutu "giriş değerini" döndürür. Kullanıcı iptale tıklarsa kutu "null" değerini döndürür.
const promptBox = () => {
    let personName = prompt("Please enter your name : ");
    if(personName === null || personName === "") {
        document.getElementById("demo3").innerHTML = "Hello no one :)";
    } else {
        document.getElementById("demo3").innerHTML = `Hello ${personName}. Welcome!`;
    }
}

// Line Breaks in popup boxes
// alert("Hello\nHow are you?");


// JS COOKIES
//  JavaScript çerezleri, web sitelerinin bir kullanıcının "cihazında" saklayabileceği küçük veri parçalarıdır. Genellikle kullanıcı tercihlerini hatırlamak, kullanıcı davranışını izlemek ve kullanıcı oturumlarını sürdürmek için kullanılırlar. Çerezler sunucudan istemcinin tarayıcısına gönderilir ve daha sonra sonraki isteklerle sunucuya geri gönderilir.

// Bir web sunucusu bir tarayıcıya bir web sayfası gönderdiğinde, bağlantı kapatılır ve sunucu kullanıcı hakkındaki her şeyi unutur. Çerezler, "kullanıcı hakkındaki bilgilerin nasıl hatırlanacağı" sorununu çözmek için icat edilmiştir: Bir kullanıcı bir web sayfasını ziyaret ettiğinde, adı bir çerezde saklanabilir Kullanıcı sayfayı bir sonraki ziyaretinde, çerez onun adını "hatırlar".

// Bir tarayıcı bir sunucudan bir web sayfası talep ettiğinde, sayfaya ait çerezler talebe eklenir. Bu şekilde sunucu, kullanıcılar hakkındaki bilgileri "hatırlamak" için gerekli verileri elde eder.

// JavaScript ile Çerez Oluşturma
// JavaScript, document.cookie özelliği ile çerez oluşturabilir, okuyabilir ve silebilir.
