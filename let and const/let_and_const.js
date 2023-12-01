/* JavaScript Let
- The let keyword was introduced in ES6 (2015)
- Variables defined with let cannot be Redeclared (Yeniden bildirilemez)
- Variables defined with let must be Declared before use
- Variables defined with let have Block Scope

*Cannot be Redeclared
let x = "Hello";
let x = 0; --Hatalı Kullanım-- (With let you can not do this)
But var can do
var x = "Hello";
var x = 0;
console.log(x);

*Block Scope
- Before ES6 (2015), JavaScript had Global Scope and Function Scope.
- ES6 introduced two important new JavaScript keywords: let and const.
- These two keywords provide Block Scope in JavaScript.
- Variables declared inside a { } block cannot be accessed from outside the block:
 */
{
    let x1 = "Hello";
}
// console.log(x1);  --x1 değişkenine {} dışından erişilemez--

//But var can do again
{
    var y = 88;
}
console.log(y);

/* Redeclaring Variables
- let and const have block scope.
- let and const can not be redeclared. (Except when used within block scope)
- let and const must be declared before use.
- var anahtar sözcüğünü kullanarak bir değişkeni yeniden bildirmek sorunlara yol açabilir.
- Bir blok içinde bir değişkenin yeniden bildirilmesi, blok dışındaki değişkeni de yeniden bildirecektir:
*/
var z = 55;
//Burada kullanılan z 55dir.
{
    z = 56;
}
console.log(z); //Burada 56 değerine atanmıştır.

// Bu durumdan sıyrılmak için let kullanılabilir.
let t = 55; //Burada t 55dir
{
    let t = 56; //Burada t 56dır
}
console.log(t); //Burada t yine 55dir

// Bir değişkenin başka bir blokta let ile yeniden bildirilmesine izin verilir.
let w = 1;
{
    let w = 2;
    console.log(w);
}
{
    let w = 3;
    console.log(w);
}
console.log(w); // w 1 değerindedir

/* Let Hoisting
- var ile tanımlanan değişkenler en üste kaldırılır ve herhangi bir zamanda başlatılabilir.
- Anlamı: Değişkeni bildirilmeden önce kullanabilirsiniz:
*/
carName = "Volvo";
var carName;
console.log(carName);

/* Ancak bunu let ile yapamazsın. Çünkü let ile tanımlanan değişkenler de bloğun en üstüne kaldırılır, ancak başlatılmaz.
carModel = 2018;
let carModel;
console.log(carModel);
*/

/* JavaScript Const
- The const keyword was introduced in ES6 (2015)
- Variables defined with const cannot be Redeclared.
- Variables defined with const cannot be Reassigned. (Yeniden Atanamaz!)
- Variables defined with const have Block Scope

const pi = 3.14;
pi = 3;
console.log(pi); "ReferenceError: pi is not defined" hatası verir.
*/

/* When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:
- A new Array
- A new Object
- A new Function
- A new RegExp
*/

/* ****!! Constant Objects and Arrays !!****
The keyword const is a little misleading.
It does not define a constant value. It defines a constant "reference" to a value.

Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object
*/

// Constant Array
const carBrand = ["Volvo", "BMW", "Audi"];
carBrand[0] = "Toyota"; //Sabit bir dizinin elemanlarını değiştirebilirsiniz.
carBrand.push("Mercedes Benz"); //Sabit bir diziye eleman ekleyebilirsiniz.
console.log(carBrand);
document.getElementById("carBrand").innerHTML = carBrand;
/* Ancak diziyi yeniden atayamazsınız:
const carBrand = ["Volvo", "BMW", "Audi"];
carBrand = ["Toyota", "Fiat", "TOGG"];
*/

// Constant Objects
const myCar = {type:"Renault", model:"2016", color:"Gray"};
myCar.color = "Black";
myCar.owner = "Samet Polat";
console.log(myCar);
document.getElementById("myCar").innerHTML = "" + myCar.owner; // Tırnakla başlamasak makine değerin string olduğunu anlayamayacak ve "NaN" çıktısı verecekti.

//const ile let aynı "redeclaring" ve "hoisting" özelliklerine sahiptir. Let kısmında "scope" içinde yazdığımız örnek (53.satır) const içinde geçerlidir.
