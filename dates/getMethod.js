// JavaScript Get Date Methods
// Not1 : Get yöntemleri yerel saati döndürür. Evrensel saat (UTC) bu sayfanın alt kısmında belgelenmiştir.

// Not2 : Get yöntemleri mevcut tarih nesnelerinden bilgi döndürür. Bir tarih nesnesinde zaman statiktir. "Saat" "çalışmaz". Bir tarih nesnesindeki saat, geçerli saat ile aynı DEĞİLDİR.

// The getFullYear() Method
// getFullYear() yöntemi, bir tarihin yılını dört basamaklı bir sayı olarak döndürür:
const myBirthDate = new Date("1998-01-02T15:33:58");
let birthYear = myBirthDate.getFullYear();
console.log(birthYear);

// Eski JavaScript kodu standart olmayan getYear() yöntemini kullanabilir. getYear() işlevinin 2 basamaklı bir yıl döndürmesi beklenir. getYear() kullanımdan kaldırılmıştır. Kullanmayın!

// The getMonth() Method
// getMonth() yöntemi, bir tarihin ayını sayı olarak (0-11) döndürür.
let birthMonth = myBirthDate.getMonth(); // Expected 0. (+1 ekleyerek 1. ay olarak çıktı vermesini sağlayabiliriz)
console.log(birthMonth);

// Ayı bir ad olarak döndürmek için bir ad dizisi kullanabilirsiniz:
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
console.log(months[birthMonth]);

let thisDay = new Date();
console.log(months[thisDay.getMonth()]);

// The getDate() Method
// getDate() yöntemi, bir tarihin gününü sayı olarak (1-31) döndürür:
let birthDay = myBirthDate.getDate();
console.log(birthDay);

// The getHours() Method
// getHours() yöntemi, bir tarihin saatlerini sayı olarak (0-23) döndürür:
let birthHour = myBirthDate.getHours();
console.log(birthHour);

// The getMinutes() Method
//getMinutes() yöntemi, bir tarihin dakikalarını sayı (0-59) olarak döndürür:
let birthMinute = myBirthDate.getMinutes();
console.log(birthMinute);

// The getSeconds() Method
// getSeconds() yöntemi, bir tarihin saniyelerini sayı olarak (0-59) döndürür:
let birthSecond = myBirthDate.getSeconds();
console.log(birthSecond);

// The getMiliseconds() Method
// getMilliseconds() yöntemi, bir tarihin milisaniyesini sayı olarak (0-999) döndürür:
let birthMilisecond = myBirthDate.getMilliseconds();
console.log(birthMilisecond);

// The getDay() Method
// getDay() yöntemi, bir tarihin hafta içi gününü sayı (0-6) olarak döndürür.
let whichDay = myBirthDate.getDay();
console.log(whichDay);

// JavaScript'te haftanın ilk günü (0. gün) Pazar'dır. Dünyadaki bazı ülkeler haftanın ilk gününü Pazartesi olarak kabul etmektedir.

// Günü bir ad olarak döndürmek için bir ad dizisi kullanabilirsiniz:
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
console.log(days[whichDay]);
console.log(days[thisDay.getDay()]); // Bugün hangi gün? sorusunun cevabı

// The getTime() Method
// getTime() yöntemi, 1 Ocak 1970'ten bu yana geçen milisaniye "sayısını" döndürür:
// 1. getTime()
// let thisDay = new Date();
let ms1 = thisDay.getTime();
console.log(ms1);
console.log(new Date(ms1));

// 01-01-1970 den itibaren geçen milisaniyeyi bulmak için diğer yollar:
// 2. Date.now()
// Zamanlama saldırılarına ve parmak izine karşı koruma sağlamak için Date.now() işlevinin hassasiyeti tarayıcı ayarlarına bağlı olarak "2s" dir. Bu değiştirilebilir.
let ms2 = Date.now(thisDay);
console.log(ms2);
console.log(new Date(ms2));

// 3. Number()
// new Date() zaman nesnesini Number veri türüne döndürür.
let ms3 = Number(thisDay);
console.log(ms3);
console.log(new Date(ms3));

// 4. Date.parse()
// new Date() zaman nesnesini String veri türünde sayı olarak gösterir. Ayrıca milisaniye bilgisi kaybedilir. Yani yukarıdaki örnekler: 1.702.637.534.851 sonucunu verirken Date.parse() 1.702.637.534.000 çıktısını verir.
let ms4 = Date.parse(thisDay);
console.log(ms4);
console.log(new Date(ms4));

// Bir örnek:
let bulundugumuzYil = new Date().getFullYear();
let sifirYili = new Date(0).getFullYear();
let kacYil = bulundugumuzYil - sifirYili;
console.log(kacYil);

let bulundugumuzAy = new Date().getMonth() + 1;
let sifirAyi = new Date(0).getMonth() + 1;
let kacAy = bulundugumuzAy - sifirAyi;
console.log(kacAy);

let bulundugumuzGun = new Date().getDate();
let sifirGunu = new Date(0).getDate();
let kacGun = bulundugumuzGun - sifirGunu;
console.log(kacGun);

console.log(`Sıfır kabul edilen günden bu güne 
${kacYil} yıl, 
${kacAy} ay, 
${kacGun} gün geçti.
`);

// Peki toplam kaç gün geçti:
let kacMs = new Date().getTime();
let kacGün = kacMs / 86400000;
console.log(`Ve bu toplam ${parseInt(kacGün)} güne tekabül ediyor...`);

// The getTimezoneOffset() Method
// getTimezoneOffset() yöntemi, yerel saat ile UTC saati arasındaki farkı (dakika cinsinden) döndürür:
document.getElementById("demo9").innerHTML = `Yerel saatim ile standart kabul edilen UTC saati arasındaki fark: ${new Date().getTimezoneOffset()} dakika.`
