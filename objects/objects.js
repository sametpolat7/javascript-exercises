// Real Life Objects, Properties, and Methods
/*
In real life, a car is an object.
A car has "properties" like weight and color, and "methods" like start and stop:

All cars have the same "properties", but the property "values" differ from car to car.
All cars have the same "methods", but the methods are performed at "different times".
*/

// JavaScript Object
// JavaScript değişkenlerinin, veri değerleri için konteynırlar olduğunu zaten öğrenmiştiniz.Bu kod, car adlı bir değişkene basit bir değer (Fiat) atar:
let car = "Fiat";
console.log(car);

// Nesneler de değişkenlerdir. Ancak nesneler birçok değer içerebilir. Bu kod, araba adlı bir değişkene birçok değer (Fiat, 1998, Gri) atar:
const myCar = {car: "Fiat", model: "1998", color: "Gray"};
console.log(myCar);

// Nesneleri const anahtar sözcüğü ile bildirmek yaygın bir uygulamadır.

// Object Properties
// JavaScript nesnelerindeki isim:değer çiftleri özellik olarak adlandırılır:
const me = {
    name: "Samet", // name = Property , "Samet" = Property Value
    surName: "Polat",
    age: "25"
};
console.log(me);

// Accesing Object Properties
// İki yolu vardır:
let x = myCar.car
console.log(x);

let y = myCar["car"];
console.log(y);

// Object Methods
/*
Nesnelerin de yöntemleri olabilir.
Yöntemler, nesneler üzerinde gerçekleştirilebilen eylemlerdir.
Yöntem, property olarak saklanan bir fonksiyondur.
*/
const person = {
    name: "Mustafa Kemal",
    surName: "ATATÜRK",
    title: "Gazi",
    fullName : function() {
        return this.title + " " + this.name + " " + this.surName //this, person nesnesini ifade eder.
    }
};
console.log(person.fullName()); // Accessing Object Methods

// What is "this"?
/*
Bir fonksiyon tanımında this, fonksiyonun "sahibi" anlamına gelir.
Yukarıdaki örnekte this, fullName işlevinin "sahibi" olan person nesnesidir.
Başka bir deyişle, this.firstName bu nesnenin firstName özelliği anlamına gelir.
*/
/* JavaScript'te this anahtar sözcüğü bir nesneyi ifade eder.
this anahtar sözcüğü, nasıl kullanıldığına bağlı olarak farklı nesnelere atıfta bulunur:

Bir object method içinde "this", nesneyi ifade eder.
Tek başına "this" global nesneyi ifade eder.
Bir fonksiyonda, "this" global nesneye atıfta bulunur.
Bir fonksiyonda, strict modda, "this" tanımsızdır.
Bir olayda, bu, olayı alan öğeyi ifade eder.
call(), apply() ve bind() gibi yöntemler bunu herhangi bir nesneye yönlendirebilir.
*/

