// JavaScript Type Conversion

// JavaScript değişkenleri yeni bir değişkene ve başka bir veri türüne dönüştürülebilir:
// Bir JavaScript işlevi kullanarak
// JavaScript'in kendisi tarafından otomatik olarak

// Converting String to Numbers
// Number() global yöntemi bir değişkeni (veya değeri) sayıya dönüştürür. Sayısal bir string ("3.14") bir sayıya (3.14) dönüştürülür. Boş bir string ("") 0'a dönüştürülür. Sayısal olmayan bir dize ("John") NaN'ye (Not a Number) dönüştürülür.
document.getElementById("demo").innerHTML = 
Number("3.14") + "<br>" +
Number(" ") + "<br>" +
Number("") + "<br>" + 
Number("99 98") + "<br>" +  // NaN
Number("Samet"); // NaN

// Number Methods
/**
 * Number()
 * parseFloat()
 * parseInt()
 */

// Tek + Operatörü
// Tek + işleci bir değişkeni sayıya dönüştürmek için kullanılabilir:
let x = "314";
let y = + x;
console.log(typeof x + " " + typeof y);

// Converting Numbers to String
// String() global yöntemi sayıları dizelere dönüştürebilir. Her tür sayı, değişmez, değişken veya ifade üzerinde kullanılabilir:
let numb = 123;
document.getElementById("demo1").innerHTML = 
String(123) + "<br>" +
String(123) + "<br>" +
String(100 + 23);

// toString() yöntemi de aynı şeyi yapar.

// Converting Dates to Number
// Tarihleri sayılara dönüştürmek için global Number() yöntemi kullanılabilir.
let date = new Date()
let msec = Number(date);
document.getElementById("demo2").innerHTML = msec;

// getTime() tarih yöntemi de aynı şeyi yapar.
let msec1 = date.getTime();
document.getElementById("demo3").innerHTML = msec1;

// Converting Dates to String
// String() global yöntemi tarihleri dizelere dönüştürebilir.
document.getElementById("demo4").innerHTML = String(new Date());
document.getElementById("demo5").innerHTML = String(msec);
document.getElementById("demo6").innerHTML = msec.toString();

// Converting Booleans to Numbers
document.getElementById("demo7").innerHTML = Number(true);
document.getElementById("demo8").innerHTML = Number(false);

// Converting Booleans to String
document.getElementById("demo9").innerHTML = String(true);
document.getElementById("demo10").innerHTML = String(false);

// Automatic String Conversion
// Bir nesneyi veya değişkeni "çıktılamaya" çalıştığınızda JavaScript otomatik olarak değişkenin toString() işlevini çağırır:
// let variable = [1, 2, 3];
// let variable = {name: "Samet"};
let variable = new Date();

document.getElementById("demo11").innerHTML = variable + typeof variable;
