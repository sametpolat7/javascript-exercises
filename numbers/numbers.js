// JavaScript Numbers
// JavaScript'te yalnızca bir tür sayı vardır. Sayılar ondalıklı veya ondalıksız olarak yazılabilir.
let numb = 3;
let numb1 = 3.14;
console.log(`${numb} + ${numb1}`);

// Ekstra büyük veya ekstra küçük sayılar bilimsel (üslü) gösterimle yazılabilir:
let numb2 = 123e5;
let numb3 = 123e-5;
console.log(numb2);
console.log(numb3);

// JavaScript Numbers are Always 64-bit Floating Point
// Diğer birçok programlama dilinin aksine, JavaScript integer, short, long, floating-point vb. gibi farklı sayı türleri tanımlamaz. JavaScript sayıları, uluslararası IEEE 754 standardına uygun olarak her zaman çift hassasiyetli kayan nokta sayıları olarak saklanır. Bu format sayıları 64 bitte saklar; burada sayı (kesir) 0 ila 51 bitlerinde, üs 52 ila 62 bitlerinde ve işaret 63 bitinde saklanır:

// Integer Precision (Tam sayıların hassasiyeti)
// Tamsayılar (nokta veya üs gösterimi olmayan sayılar) 15 basamağa kadar doğrudur:
let numb4 = 999999999999999; // Expected 9999999..
let numb5 = 9999999999999999; // Expected 10000000...
console.log(numb4);
console.log(numb5);

// Not : Maksimum ondalık sayısı 17'dir.

// Floating Precision (Kayan noktalı sayıların hassasiyeti)
// Kayan nokta aritmetiği her zaman %100 doğru değildir:
let numb6 = 0.1;
let numb7 = 0.2; // (Sadece 0.2 değerinde bu durumla karşılaştım.)
console.log(numb6 + numb7); // 0.3 olması gereken çıktı 0.3000...4 şeklinde çıkar

// Yukarıdaki problemi çözmek için çarpma ve bölme işlemlerine yardımcı olur:
console.log(((numb6 * 10) + (numb7 * 10))/10);

// Adding Numbers and Strings
// JavaScript hem toplama hem de birleştirme için "+" operatörünü kullanır. Sayılar eklenir. Dizeler birleştirilir.

// Eğer iki sayıyı toplarsanız, sonuç bir sayı olacaktır:
let numb8 = 10;
let numb9 = 20;
console.log(numb8 + numb9);

// İki dizeyi eklerseniz, sonuç bir dize birleştirme olacaktır:
let numb10 = "10";
let numb11 = "20";
console.log(numb10 + numb11);

// Bir sayı ve bir dize eklerseniz, sonuç bir dize birleştirme olacaktır. (Burada 10 değerinden sonra toplanması için başka bir değişken tanımlansaydı, Örneğin: console.log( 10 + 10 + "20") şeklinde olsaydı sonuç "2020" olurdu.)
let numb12 = 10;
let numb13 = "20";
console.log(numb12 + numb13);

// Bir dize ve bir sayı eklerseniz, sonuç bir dize birleştirme olacaktır:
let numb14 = "10";
let numb15 = 20;
console.log(numb14 + numb15);

// Yaygın bir hata, bu sonucun 30 olmasını beklemektir:
let numb16 = 10;
let numb17 = 20;
console.log("Result = " + numb16 + numb17); // Çıktı için string ifadeyle başlanması komutu, değişken değerlerininde string ifade olarak algılanmasına yol açar. Bunun çözümü (şimdiye kadar farkettiğim) "Template Literals" kullanmaktır.
console.log(`Result = ${numb16 + numb17}`);

// Yaygın bir hata, bu sonucun 102030 olmasını beklemektir:
let numb18 = 10;
let numb19 = 20;
let numb20 = "30";
console.log(numb18 + numb19 + numb20);

// Numeric Strings
// JavaScript dizeleri sayısal içeriğe sahip olabilir. JavaScript tüm sayısal işlemlerde dizeleri sayılara dönüştürmeye çalışacaktır. Bu işe yarayacak:
let numb21 = "100";
let numb22 = "10";
console.log(numb21 / numb22);

// Ve bu da:
console.log(numb21 * numb22);

// Ve bu da:
console.log(numb21 - numb22);

// Ancak bu yaramayacak. Çünkü JavaScript, dizeleri birleştirmek için de "+" operatörünü kullanır.
console.log(numb21 + numb22);

// NaN - Not a Number
// NaN, bir sayının yasal bir sayı olmadığını belirten ayrılmış bir JavaScript sözcüğüdür. Sayısal olmayan bir dize ile aritmetik yapmaya çalışmak NaN (Not a Number) ile sonuçlanacaktır:
let numb23 = 100;
let text = "Apple";
console.log(numb23 / text);

// Ancak, dize sayısal ise, sonuç bir sayı olacaktır:
let numb24 = "10";
console.log(numb23 / numb24);

// Bir değerin sayı olup olmadığını anlamak için isNaN() global JavaScript fonksiyonunu kullanabilirsiniz:
console.log(isNaN(text));
console.log(isNaN(numb24));

// NaN'a dikkat edin. Matematiksel bir işlemde NaN kullanırsanız, sonuç da NaN olacaktır:
let numb25 = NaN;
let numb26 = 5;
let result = numb25 + numb26;
console.log(result);

// Ya da sonuç NaN5 gibi bir birleştirme olabilir:
let numb27 = "5";
let result1 = numb25 + numb27;
console.log(result1);

// Infinity
// Sonsuz (veya -Sonsuz), mümkün olan en büyük sayının dışında bir sayı hesaplarsanız JavaScript'in döndüreceği değerdir.
let numb28 = 2;
let txt = "";
while (numb28 != Infinity) {
    numb28 = numb28 * numb28;
    txt += numb28 + "<br>"
}
document.getElementById("demo").innerHTML = txt;

// 0 (sıfır) ile bölme işlemi de "Infinity" üretir:
let numb29 = 2;
console.log(numb29 / 0);
let numb30 = -2;
console.log(numb30 / 0);

// Hexadecimal
// JavaScript, önünde 0x varsa sayısal sabitleri onaltılık olarak yorumlar.
let numb31 = 0xFF;
console.log(numb31);

// Asla başında sıfır olan bir sayı yazmayın (07 gibi). Bazı JavaScript sürümleri, baştaki sıfır ile yazıldıklarında sayıları sekizli olarak yorumlar.

/*
Varsayılan olarak, JavaScript sayıları 10 tabanlı ondalıklar olarak görüntüler.
Ancak 2 tabanından 36 tabanına kadar sayıların çıktısını almak için "toString()" yöntemini kullanabilirsiniz.
Hexadecimal 16 tabanıdır. Decimal 10 tabanıdır.
*/
let numb32 = 32;
document.getElementById("demo1").innerHTML = 
"Decimal: " + numb32 + "<br>" + 
"Hexatrigesimal(Base 36): " + numb32.toString(36) + "<br>" + 
"Duotrigesimal(Base 32): " + numb32.toString(32) + "<br>" +
"Hexadecimal(Base 16): " + numb32.toString(16) + "<br>" + 
"Decimal(Base 10): " + numb32.toString(10) + "<br>" + 
"Octal(Base 8): " + numb32.toString(8) + "<br>" + 
"Binary (Base 2): " + numb32.toString(2);

// JavaScript Numbers as Objects
// Sayılar "new" anahtar sözcüğü ile nesne olarak da tanımlanabilir:
let numb33 = 123;
console.log(numb33 + " " + typeof numb33);
let numb34 = new Number(123);
console.log(numb34 + " " + typeof numb34);

// Ancak "sayı nesneleri" oluşturmayın! Yeni anahtar kelime kodu karmaşıklaştırır ve yürütme hızını yavaşlatır.Ayrıca sayı Nesneleri beklenmedik sonuçlar üretebilir:
console.log(numb33 == numb34); // True
console.log(numb33 === numb34); // False (Çünkü ayrıca type olarak eşit midir diye de kontrol edildi.)

let numb35 = new Number(500);
let numb36 = new Number(500);
// İki aynı ifade gibi görünüyor:
console.log(numb35 == numb36);
console.log(numb35 === numb36);

// Ama "false" döndürecektir. Çünkü iki nesnenin karşılaştırılması her zaman "false" döndürür. Çünkü JavaScript'te, iki nesne sadece aynı özelliklere ve değerlere sahip olduklarında değil, aynı nesne olduklarında eşit kabul edilir. Bunun nedeni, JavaScript'te nesnelerin değere göre değil referansa göre atanması ve karşılaştırılmasıdır.

