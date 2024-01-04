// JavaScript Comparison and Logical Operators
/**
 * Bir JavaScript Boolean'ı iki değerden birini temsil eder: true veya false.
 * "Değeri" olan her şey "True"dur. (Varlık)
 * "Değeri" olmayan her şey "False"dur. (Yokluk)
 *  */ 
console.log(Boolean(10));
console.log(Boolean("10"));
console.log(Boolean(true));

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(0));

// Comparison Operators
// Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitliği veya farkı belirlemek için mantıksal ifadelerde kullanılır.

// x = 5 ise;
let x = 5;

// Equal to ( == )
console.log(x == 5);
console.log(x == "5");
console.log(x == 8);

// Equal Value and Equal Type ( === )
console.log(x === 5);
console.log(x === "5");
console.log(x === 8);

// Not Equal ( != )
console.log(x != 5);
console.log(x != "5");
console.log(x != 8);

// Not Equal Value or Not Equal Type ( !== )
console.log(x !== 5);
console.log(x !== "5")
console.log(x !== 8);
console.log(x !== "8");

// Greater than ( > )
console.log(x > 5);
console.log(x > "5");
console.log(x > 8);
console.log(x > 4);

// Less than ( < )
console.log(x < 5);
console.log(x < "5");
console.log(x < 8);

// Greater than or Equal to ( >= )
console.log(x >= 5);
console.log(x >= "5");
console.log(x >= 8);
console.log(x >= 4);

// Less than or Equal to ( <= )
console.log(x <= 5);
console.log(x <= "5");
console.log(x <= 8);
console.log(x <= 4);

// Logical Operator
// Mantıksal operatörler, değişkenler veya değerler arasındaki mantığı belirlemek için kullanılır.
let y = 6, z = 3;

// And ( && ) işlemi
// Operandların her ikisi de "doğruysa" True (1) döndürür. Aksi halde False (0) döndürür.
console.log(y > 5 && z < 5);
console.log(y > 5 && z > 5);

// Or ( || ) işlemi
// Operandların herhangi biri "ya da" ikisi doğruysa True (1) döndürür. İkiside yanlışsa False (0) döndürür.
console.log(y > 5 || z < 5);
console.log(y > 5 || z > 5);
console.log(y < 5 || z > 5);

// Not ( ! ) işlemi
// NOT operatörü (!), yanlış ifadeler için true değerini, doğru ifadeler için false değerini döndürür.
console.log(!(z == y)); 
console.log(!(z !== y));

console.log(!(y > 5 && z < 5));
console.log(!(y < 5 || z > 5));

// Conditional (Ternary) Operator ( ? )
// JavaScript ayrıca, bazı koşullara bağlı olarak bir değişkene değer atayan bir koşullu işleç içerir.
// Syntax : variablename = (condition) ? value1:value2 
function ageFunc() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote";
}

function numb() {
    let numb = document.getElementById("number").value;
    let higherOrLess = 
    (numb >= 0) ? `${numb} : Higher than 0`:`${numb} : Less than 0`;
    document.getElementById("demo1").innerHTML = higherOrLess;
}

// Comparing Different Types
// Farklı türlerdeki verilerin karşılaştırılması beklenmedik sonuçlar verebilir.
// Bir stringi bir sayıyla karşılaştırırken, JavaScript karşılaştırmayı yaparken stringi bir sayıya dönüştürür. 
//Boş bir string 0'a, sayısal olmayan bir string ise her zaman yanlış olan NaN'a dönüştürülür.
console.log(2 < 12); // True
console.log(2 < "12"); // True
console.log("12" < 2); // False
console.log(2 < "John"); // False
console.log(2 < "John"); // False
console.log(2 == "John"); // False
console.log("2" < "12"); // False
console.log("2" > "12"); // True
console.log("2" == "12"); // False

// Doğru bir sonuç elde etmek için, değişkenler karşılaştırmadan önce uygun türe dönüştürülmelidir:
function isNumb() {
    let numb1 = document.getElementById("isNumb").value;
    if (isNaN(numb1)){
        document.getElementById("demo2").innerHTML = "This is not Number";
    } else {
        let isHigherThanFive =
        (numb1 > 5) ? "This Number Higher Than 5":"This Number Less Than Five";
        document.getElementById("demo2").innerHTML = isHigherThanFive;
    }
}

// The Nullish Coalescing Operator (??)
// İlk operatör "Null" ya da "Undefined" değilse onu döndürür. Değilse ikinci operatörü döndürür.
let name1 = null;
let name2 = "Samet";
document.getElementById("demo3").innerHTML = `The Winner is : ${name1 ?? name2}`;

// The Optional Chaining Operator (?.)
// ?. işleci, bir nesne tanımsız veya null ise (hata vermek yerine) undefined değerini döndürür.
const car = {type:"Fiat", model:"500", color:"white"};
let name3 = car?.name;
document.getElementById("demo4").innerHTML = name3;
