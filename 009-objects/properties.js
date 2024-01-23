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

/* In JavaScript, almost "everything" is an object:

 * Booleans can be objects (if defined with the new keyword)
 * Numbers can be objects (if defined with the new keyword)
 * Strings can be objects (if defined with the new keyword)
 * Dates are always objects
 * Maths are always objects
 * Regular expressions are always objects
 * Arrays are always objects
 * Functions are always objects
 * Objects are always objects
 * All JavaScript values, except primitives, are objects.
*/

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

// Creating a JavaScript Object
/**Yeni nesneler oluşturmanın farklı yolları vardır:

 * Bir nesne "değişmezi" {} kullanarak tek bir nesne oluşturun.
 * "new" anahtar sözcüğünü kullanarak tek bir nesne oluşturun.
 * Bir nesne "constructor" tanımlayın ve ardından oluşturulan türde nesneler oluşturun.
 * "Object.create()" kullanarak bir nesne oluşturun.
 */

// JavaScript Objects are Mutable.
// Nesneler değiştirilebilir: Değere göre değil referansa göre adreslenirler.

const myProjects = {firstProjects : "Target Dummy", secondProjects : "Naafiri"};

let project = myProjects;
project.secondProjects = "He2s All In";

console.log(project);
console.log(project.secondProjects);

// JavaScript Object Properties
// Bir JavaScript nesnesi, sıralı olmayan propertylerden oluşan bir koleksiyondur.
// Özellikler genellikle eklenebilir, değiştirilebilir, silinebilir ama bazıları sadece okunabilir.

// Accesing JavaScript Properties
const UsTitles = {
    superLig : "24",
    uefaCup : "1",
    localCup : "14"
};

// There are two ways for access
console.log(UsTitles.uefaCup);
console.log(UsTitles["uefaCup"]);

// JavaScript for in Loops
// JavaScript for...in ifadesi bir nesnenin "propertyleri" arasında döngü sağlar. for...in döngüsünün içindeki kod bloğu her özellik için bir kez yürütülecektir.
let titleText = "";
for(let x in UsTitles) {
    titleText += x + ":" + UsTitles[x] + " ";
}
console.log(titleText);

// Adding New Properties 
UsTitles.superCup = "1";
console.log(UsTitles);

// Delete Properties
delete UsTitles.superCup;
console.log(UsTitles);

// Delete anahtar sözcüğü sadece nesneler için geçerlidir.
// Delete, hem property hemde property value yu kaldırır.


// Nested Objects (Yuvalanmış)
const person1 = {
    name : "Samet",
    surName : "Polat",
    age : 26,
    cars : {
        car1: "Renault",
        car2 : "Skoda",
        car3 : "Mondial"
    }
}

console.log(person1);
console.log(person1.cars)
// Alt properties e erişmek için 4 yol vardır.
let p1 = "cars";
let p2 = "car1";
console.log(person1.cars.car1);
console.log(person1.cars["car1"]);
console.log(person1["cars"]["car1"]);
console.log(person1[p1][p2]);

// Nested Arrays and Objects
const person2 = {
    name : "John",
    surName : "Doe",
    age : 30,
    cars : [
        {carName: "Ford", models: [2017, 2020, 2023]},
        {carName: "BMW", models: [2022,2024]},
        {carName: "Mercedes Benz", models: [1998, 2005]}
    ]
};
let person2Text = "";
for(let x in person2.cars) {
    person2Text += "<h2>" + person2.cars[x].carName + "</h2>";
    for(let y in person2.cars[x].models) {
        person2Text += "<p>" + person2.cars[x].models[y] + "</p>";
    }
};
document.getElementById("demo").innerHTML = person2Text;

// Property Attributes
// Tüm propertylerin bir adı vardır. Aynı zamanda bir değere de sahiptir.
// Değer, propertylerin özniteliklerinden sadece biridir.
// Diğer öznitelikler : sayılabilme, yapılandırılabilme, yazılabilme vs...
// Bu öznitelikler propertye nasıl erişilebileceğini tanımlar (okunabilir mi?, yazılabilir mi?)
// JavaScript'te tüm öznitelikler okunabilir, ancak yalnızca değer özniteliği değiştirilebilir (ve yalnızca property yazılabilirse).

// Prototip Özellikleri
// JavaScript nesneleri, prototiplerinin özelliklerini miras alır.
// delete anahtar sözcüğü miras alınan özellikleri silmez, ancak bir prototip özelliği silerseniz, bu prototipten miras alınan tüm nesneleri etkiler.


// JavaScript Object Methods
const person3 = {
    name: "Jennifer",
    surName: "Lopez",
    age: 53,
    id: 54487,
    identy: function () {
        return this.name + this.surName + this.id;
    }
}
console.log(person3.identy());

// Methods, object property olarak saklanan fonksiyonlardır.

// Accesing Object Methods
// Yukarıdaki örnekte identy person3 nesnesinin bir "propertysi", idendty() ise person3 nesnesinin bir metodudur.

// Yani identy propertysine ulaşmak isterseniz;
console.log(person3.identy); // Output: this.name + this.surName + this.id
console.log(person3.identy()); // Output: JenniferLopez54487

// Adding Method to an Object
// Çok basit. Bir property ekler gibi method ekleyebilirsiniz.
person3.userAge = function() {
    return "Name:" + this.name + " Age:" + this.age;
}
console.log(person3.userAge());

// Using Built-In Methods (Yerleşik Yöntemleri Kullanma)
console.log((person3.identy()).toUpperCase());