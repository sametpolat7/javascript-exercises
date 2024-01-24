// JavaScript Object Constructors
function Person(first, last, age, nation) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality = nation;
}

const myFather = new Person("Koksal", "Polat", 56, "Turkish");
document.getElementById("demo14").innerHTML = "My father name is " + myFather.firstName + " " + myFather.lastName + "." + " He is " + myFather.age + "."

// Constructor fonksiyonlarını ilk harfi büyük olacak şekilde adlandırmak iyi bir uygulama olarak kabul edilir.

// Object Types (Blueprints) (Classes)
// Bazen aynı "türde" birçok nesne oluşturmak için bir "blueprint (plana)" ihtiyaç duyarız. Bir "nesne türü" oluşturmanın yolu, bir nesne constructor fonksiyonu kullanmaktır. Yukarıdaki örnekte, Person() fonksiyonu bir nesne kurucu işlevidir.Aynı türden nesneler, new anahtar sözcüğü ile constructor fonksiyonu çağrılarak oluşturulur:
const myMother = new Person("Dilek", "Polat", 50, "Turkish");
document.getElementById("demo15").innerHTML = "My mother name is " + myMother.firstName + " " + myMother.lastName + ". " + "She is " + myMother.age + "."

// Veya şu şekilde de olabilir... ***
class myFamily {
    constructor(first, last, age, nation, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.nationality = nation;
        this.eyeColor = eye;
    }
    name() {
        return this.firstName + " " + this.lastName; // Bir closure olduğu için mi constructor dışına yazıldı?
    }
}

// Class syntaxı, esasen mevcut prototip tabanlı sistem üzerinde sözdizimsel bir şekerdir ve constructor "fonksiyonları" ve "methodlarını" tanımlamak için daha temiz ve daha yapılandırılmış bir yol sağlar.

const mySister = new myFamily("Melek", "Polat", 30, "Turkish", "Black");
document.getElementById("demo16").innerHTML = 
`My sister name is ${mySister.firstName} ${mySister.lastName}. She is ${mySister.age}`;

// Her iki kullanımda da "this" o sınıftan (ya da kurucu işlevinden) yeni bir nesne oluşturulduğunda o nesneyi ifade eder.

// Adding a Property to an "Object"
myFather.eyeColor = "Green";
console.log(myFather.eyeColor);
console.log(myMother.eyeColor);

// Property myFather'a eklenecektir. Anneme değil. (Başka herhangi bir kişi nesnesine değil).

// Adding a Property to a Constructor
// Bir objeye property ekler gibi, bir kurucuya property ekleyemezsiniz.
// myFamily.eyeColor gibi..
// Bir kurucuya yeni bir özellik eklemek için, bunu kurucu fonksiyona eklemeniz gerekir:
console.log(mySister.eyeColor);

// Adding a Method to an Object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
}
console.log(myFather.name());

// Adding a Method to a Constructor
// Bir objeye method ekler gibi bir kurucuya method eklemeyemezsiniz. Bunun yolu constructorın içine method eklemektir.
console.log(mySister.name());

// JavaScript Prototype
// Tüm JavaScript nesneleri özellikleri ve yöntemleri bir prototipten miras alır. (Object.prototype)

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype

// Object.prototype ise bu zincirin en üstünde yer alır...
// Date objects, Array objects, and Person objects inherit from Object.prototype.

// Adding Properties and Methods to Objects Prototypes
Person.prototype.from = "Çanakkale";
console.log(myFather.from, myMother.from);
console.log(mySister.from) // Undefined. Çünkü Person constructorunun prototypeına bir property ekledik. myFamily'nin değil.

// mySister.prototype.from = "Çanakkale";
// console.log(mySister.from); Tekrar undefined. Çünkü prototype özelliği DOĞRUDAN bir nesnenin üzerinde KULLANILAMAZ! Bu nesnenin kurucısu olan constructor üzerinde kullanılır. Şöyle:
myFamily.prototype.from = "Çanakkale";
console.log(mySister.from);

// *** Sadece kendi prototiplerinizi değiştirin. Standart JavaScript nesnelerinin prototiplerini asla değiştirmeyin.

const myBrother = new myFamily("Samet", "Polat");
console.log(myBrother.name());







