// MY NOTES

// JavaScript nesneleri dildeki temel veri türlerinden (not primitive, its complex data type) biridir ve verilerin temsil edilmesi ve işlenmesinde merkezi bir rol oynarlar.

// Nesneler, her anahtarın (key) bir string (veya sembol) olduğu ve her değerin (value) diğer nesneler de dahil olmak üzere herhangi bir veri türünde olabileceği anahtar-değer çiftlerinden oluşan koleksiyonlardır.

// JavaScript'teki nesneler gerçek dünya varlıklarını ve özelliklerini modellemek için kullanılır.

const myNoteObj = {
    name: "Samet",
    surName: "Polat",
    bornDate: 1998,
    age: function() {
        return new Date().getFullYear() - this.bornDate;
    }
}
console.log(myNoteObj.name, myNoteObj.surName, myNoteObj.age());

// Object Iteration
// for...in döngüsü veya Object.keys(), Object.values() ve Object.entries() gibi çeşitli yöntemleri kullanarak bir nesnenin properties üzerinde "yineleme" yapabilirsiniz. Ancak bu sadece yinelenecek property nin "enumerable" niteliğinin "true" olduğu durumlarda geçerlidir.

// for in
let myNoteTxt = "";
for(let x in myNoteObj) {
    myNoteTxt += x + ": " + myNoteObj[x] + "<br>";
}
document.getElementById("demo").innerHTML = myNoteTxt;

let keys = Object.keys(myNoteObj); // [Array] - Keys
console.log(keys);

let values = Object.values(myNoteObj); // [Array]- Values
console.log(values);

let entries = Object.entries(myNoteObj); // [Array] - [Key - Values]
console.log(entries);

// Object Constructor
// JavaScript'te nesne kurucusu, nesneleri oluşturmak ve başlatmak için kullanılan bir fonksiyondur. Benzer özelliklere ve davranışlara sahip nesnelerin örneklerini oluşturmak için bir "şablon" görevi görür. Aynı yapıya sahip birden fazla nesne oluşturmak istediğinizde, bir nesne kurucu fonksiyonu tanımlayabilir ve ardından yeni nesneler oluşturmak için bu fonksiyonu kullanabilirsiniz.
function ConstructorFunction(what, where, when) {
    this.what = what;
    this.where = where;
    this.when = when;

    // Ayrıca bir methodda tanımlayabilirim.
    this.generalInfo = function() {
        return this.what + " " + this.where + " " + this.when;
    }
}
const event1 = new ConstructorFunction("Football Match", "NEF Stadium", new Date().toDateString());
const event2 = new ConstructorFunction("Football Match", "Sukru Saracoglu", new Date(2024, 0, 24).toDateString());
console.log(event1.generalInfo());
console.log(event2.generalInfo());

console.log(event1);
console.log(event2);

// Yukarıdaki örnekte, ConstructorFunction bir" nesne kurucu fonksiyondur". Bu fonksiyonla birlikte "new" anahtar sözcüğünü kullandığınızda, yeni bir nesne oluşturulur ve yapıcıya aktarılan parametrelere göre özellikleri ayarlanır. Yapıcı içindeki "this" anahtar sözcüğü "yeni" oluşturulan "nesneyi" ifade eder.

// Nesne kurucularını kullanmak, kodun yeniden kullanılabilirliğini destekleyecek şekilde kod oluşturmanıza ve düzenlemenize yardımcı olur. Paylaşılan özelliklere ve davranışlara sahip nesneler için bir şablon tanımlamanıza olanak tanır. Modern JavaScript'te, nesne kurucuları oluşturmak ve prototipleri yönetmek için daha uygun bir yol sağlayan "sınıf" tabanlı sözdizimi ve "class" anahtar sözcüğünün de bulunduğunu unutmayın.
class FootballMatches {
    constructor(when, where, result) {
        this.when = when;
        this.where = where;
        this.result = result;
    }
    generalInfo() {
        return this.when + "<br>" + this.where + " " + this.result;
    }
}
const GS = new FootballMatches(new Date().toDateString(), "NEF Arena", "3-0");
const FB = new FootballMatches(new Date(2024, 0, 24).toDateString(), "Basaksehir Stadium", "0-1");
document.getElementById("demo1").innerHTML = GS.generalInfo();
document.getElementById("demo2").innerHTML = FB.generalInfo();

console.log(GS);
console.log(FB);

// Bu örnekte, class anahtar sözcüğü, yapıcı ve yöntemleri daha kısa ve okunabilir bir şekilde tanımlamak için kullanılmıştır. Ancak, kaputun altında JavaScript sınıflarının hala prototip kalıtımına ve kurucu işlevlere dayandığını anlamak önemlidir.

// Bu ne demek? JavaScript'te, ECMAScript 2015'te (ES6) tanıtılan class sözdizimi, yapıcı işlevler ve prototiplerle çalışmak için daha kullanışlı ve etkileyici bir yol sağlar. class anahtar sözcüğünü kullandığınızda, geleneksel sınıf tabanlı nesne yönelimli programlama dilleriyle çalışıyormuşsunuz gibi görünür, ancak JavaScript'in sınıf sisteminin mevcut prototip tabanlı kalıtımın üzerine inşa edildiğini anlamak çok önemlidir.

// Bir class oluşturduğunuzda ve new anahtar sözcüğünü kullanarak nesneleri ondan örneklediğinizde, JavaScript hala prototip zincirlerini ve kurucu işlevlerini kullanır. Class sözdizimi, esasen mevcut prototip tabanlı sistem üzerinde yapıcı işlevleri ve yöntemlerini tanımlamak için daha temiz ve daha yapılandırılmış bir yol sağlar.

class myNotesConstructor {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    fullName() {
        return this.name + " " + this.surname;
    }
};
const myNotesPerson = new myNotesConstructor("Mauro", "Icardi");
console.log(myNotesPerson.fullName());

console.log(myNotesPerson instanceof myNotesConstructor);
console.log(myNotesPerson instanceof Object);

// Bu örnekte, myNotesPerson, myNotesConstructor sınıfının bir örneğidir, ancak aynı zamanda Object sınıfının da bir örneğidir. Bunun nedeni, sonuçta JavaScript'teki tüm nesnelerin Object prototipinden miras almasıdır.
console.log(myNotesPerson);

// Peki, nesne kalıtımı nedir? Prototype zinciri ne anlama gelir?
// "JavaScript'in prototip tabanlı doğası", nesne kalıtımı ve nesne ilişkileri için dilin temel mekanizmasını ifade eder. JavaScript'te her nesnenin, özelliklerini miras aldığı başka bir nesne olan ilişkili bir prototipi vardır. Bu, prototip zinciri olarak bilinen bir nesne zinciri oluşturur.

// JavaScript'teki her nesnenin, tüm prototip zincirlerinin kökü olan "temel nesne" prototipi vardır. Prototip başka bir nesnedir. Bir nesne üzerindeki bir özelliğe eriştiğinizde, JavaScript o özelliği nesnenin kendisinde arar. Bulamazsa, nesnenin prototipine bakar ve böylece bir zincir oluşturur.

// JavaScript'te nesne oluşturmak için kurucu işlevler kullanılır. Bir kurucu işlev kullanarak bir nesne oluşturduğunuzda, yeni nesne kurucunun prototipinden özellikleri ve yöntemleri devralır. Bir kurucu fonksiyonun prototip özelliği, o kurucu kullanılarak oluşturulan nesnelerin prototipi haline gelen bir nesnedir.

// Nesneler prototipleri aracılığıyla birbirine bağlanarak bir zincir oluşturur. Bir nesne üzerindeki bir özelliğe eriştiğinizde, JavaScript özelliği bulana veya zincirin sonuna ulaşana kadar prototip zincirini dolaşır. Bu zincir, nesnelerin prototiplerinden özellikleri ve davranışları miras alabildiği bir kalıtım biçimine olanak sağlar.

























// In JavaScript, there isn't a built-in method to directly set an entire object's properties as non-configurable. The configurable attribute applies at the level of individual properties rather than the entire object.

// However, you can achieve similar behavior by iterating over the object's properties and using Object.defineProperty() to set the configurable attribute to false for each property. Here's an example of how you can do this:

// javascript
// Copy code
// const obj = { a: 1, b: 2 };

// // Iterate over the object's properties
// Object.keys(obj).forEach(key => {
//     // Define property with configurable set to false
//     Object.defineProperty(obj, key, { configurable: false });
// });

// // Try to delete property 'a' (this won't work)
// delete obj.a;
// console.log(obj); // Output: { a: 1, b: 2 }