// JavaScript Date Objects
// new Date() without arguments, creates a date "object" with the current date and time:
const dateEx = new Date();
console.log(dateEx);

const dateEx1 = new Date("98-01-02");
console.log(dateEx1);

// Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not.

// Creating Date Object
// Date nesneleri new Date() ile oluşturulur. Yeni bir tarih nesnesi oluşturmanın 9 yolu vardır:

// new Date(date string)
// new Date(date string) bir tarih dizesinden bir tarih nesnesi oluşturur:
const dateString = new Date("December 14, 2023 12:05:00");
console.log(dateString);

const dateString1 = new Date("2023-12-14");
console.log(dateString1);

// new Date(year, month, ...)
// new Date(year, month, ...), belirtilen tarih ve saate sahip bir tarih nesnesi oluşturur. yıl, ay, gün, saat, dakika, saniye ve milisaniyeyi belirtir (bu sırayla):
const dateEx2 = new Date(1998, 1, 2, 15, 33, 58, 0); // Doğum tarihim. Ancak YANLIŞ! Nedeni altaki notta...
const dateEx3 = new Date(1998, 0, 2, 15, 33, 58, 0);
console.log(dateEx2);
console.log(dateEx3);

// Not: JavaScript ayları 0'dan 11'e kadar sayar: Ocak = 0 --> Aralık = 11 gibi.

// Ayın 11'den büyük belirtilmesi hataya yol açmaz, ancak taşmayı bir sonraki yıla ekler:
const dateEx4 = new Date(1997, 12, 2, 15, 33, 58, 0); // 12. ay belirtmeme rağmen Aralık 11 kabul edildiği için bir sene artırıp ayı Ocak olarak kabul etmiştir.
console.log(dateEx4);

// Parametre içinde belirtilen 6 sayı yıl, ay, gün, saat, dakika, saniyeyi belirtir.
// Parametre içinde belirtilen 5 sayı yıl, ay, gün, saat, dakikayı belirtir.
// Parametre içinde belirtilen 4 sayı yıl, ay, gün, saati belirtir.
// Parametre içinde belirtilen 3 sayı yıl, ay, günü belirtir.
// Parametre içinde belirtilen 2 sayı yıl, ayı belirtir.
const dateEx5 = new Date(1998, 0);
console.log(dateEx5);

// // Parametre içinde belirtilen bir sayı "milisaniyeyi" belirtir.
const dateEx6 = new Date(1998);
console.log(dateEx6);

/** JavaScript Tarihleri Milisaniye Olarak Saklar
 * JavaScript tarihleri 01 Ocak 1970'ten bu yana geçen milisaniye sayısı olarak depolar. 
 * Sıfır zamanı 01 Ocak 1970 00:00:00 UTC'dir.
 * Bir gün (24 saat) 86 400 000 milisaniyedir.
 */

// Sıfır zamanından itibaren kaç milisaniye geçmiş?
let nowTime = new Date(2023, 11, 14, 12, 36);
console.log(Number(nowTime));

// Previous Century
// Bir ve iki haneli yıllar 19xx olarak yorumlanacaktır:
const dateEx7 = new Date(23, 11, 14);
console.log(dateEx7);

// Displaying Dates
const dateEx8 = new Date();
document.getElementById("demo").innerHTML = dateEx8;

// toString() metodu ile string ifadeye çevrilebilir:
document.getElementById("demo1").innerHTML = dateEx8.toString();

// toDateString() yöntemi, bir tarihi daha okunabilir bir biçime dönüştürür:
document.getElementById("demo2").innerHTML = dateEx8.toDateString();

// toUTCString() yöntemi, UTC standardını kullanarak bir tarihi string ifadeye dönüştürür:
document.getElementById("demo3").innerHTML = dateEx8.toUTCString();

// toISOString() yöntemi, ISO standardını kullanarak bir tarihi dizeye dönüştürür:
document.getElementById("demo4").innerHTML = dateEx8.toISOString();


// JavaScript Date Formats
// Genel olarak 3 tür JavaScript tarih giriş biçimi vardır:
/**
 * ISO Date   "2015-03-25" (The International Standard)
 * Short Date "03/25/2015"
 * Long Date  "Mar 25 2015" or "25 Mar 2015"
 
 * ISO formatı JavaScript'te katı bir standardı takip eder.
 * Diğer formatlar çok iyi tanımlanmamıştır ve tarayıcıya özgü olabilir.
 */

// ISO Dates
// ISO tarihleri saat, dakika ve saniye eklenerek yazılabilir (YYYY-MM-DDTHH:MM:SSZ)
const dateEx9 = new Date("2023-12-14T13:30:58Z"); 
console.log(dateEx9);
// Saat tarayıcıda 16:30 şeklinde gösterilir. Şimdiki zamanı göstermek istersen parametre kısmını boş bırakablirsin. Ya da "Z" parametresini kullanmazsın. Kullanırsan eklediğin saat UTC standardı olarak kabul edilecek ve tarayıcın üstüne saat farkını ekleyecektir. (Bulunduğun konuma göre)

// Tarih ve saat büyük T ile ayrılır.
// UTC zamanı büyük Z harfi ile tanımlanır.
// UTC'ye göre saati değiştirmek istiyorsanız, Z'yi kaldırın ve bunun yerine +HH:MM veya -HH:MM ekleyin


// Date.parse() Method
// Elinizde geçerli bir tarih dizesi varsa, bunu milisaniyeye dönüştürmek için Date.parse() yöntemini kullanabilirsiniz. Date.parse(), tarih ile 1 Ocak 1970 arasındaki milisaniye sayısını döndürür:
let msec = Date.parse("2023-12-14");
document.getElementById("demo5").innerHTML = msec;

// Daha sonra milisaniye sayısını kullanarak bunu bir tarih nesnesine dönüştürebilirsiniz:
let today = new Date(msec);
document.getElementById("demo6").innerHTML = today; // Tarayıcı üstüne GMT +3 eklemesi yapıyor. Niye??
document.getElementById("demo7").innerHTML = today.toUTCString();
document.getElementById("demo8").innerHTML = today.toISOString();