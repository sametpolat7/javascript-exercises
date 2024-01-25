// JavaScript Object References And Notes
// REFERENCES

// Managing Objects

// 1. Object.create()
// JavaScript'te Object.create() yöntemi, belirtilen prototip ve propertylere sahip yeni bir nesne oluşturmak için kullanılır.
const referenceObj = {
    area: "Football Club",
    madeIn: "in Turkey",
    fullName: function(name) {
        return name + " " + this.area + " " + this.madeIn;
    }
}
const team = Object.create(referenceObj);
console.log(team.fullName("Galatasaray"));
console.log(team);

// referenceObj, yeni oluşturulan team nesnesi için prototip görevi gören bir nesnedir.
// Object.create(), prototipi referenceObj olan yeni bir nesne (team) oluşturur.
// fullName() yöntemi referenceObj nesnesinde tanımlanır ve team nesnesi tarafından erişilebilir, çünkü team nesnesi sahip olmadığı özellikler ve methodlar için referenceObj nesnesine temsilci gönderir.

// Bu yöntem, yapıcı işlevlere veya sınıflara ihtiyaç duymadan belirli bir prototipe sahip nesneler oluşturmak için kullanışlıdır. Özellikle mevcut nesnelerden daha esnek bir şekilde miras alan nesneler oluşturmak istediğinizde kullanışlıdır.


// 2. Object.defineProperty(obj, prop, descriptor)
// JavaScript'te Object.defineProperty(), doğrudan bir nesne üzerinde yeni bir özellik tanımlamak veya mevcut bir özelliği değiştirmek için kullanılır. Bir özelliğin değeri (value), writeable, numerable ve configureable gibi çeşitli yönlerini tam olarak kontrol etmenizi sağlar.
const referenceObj2 = {};

Object.defineProperty(referenceObj2, "firstProperty", {
    value: 1,
    writable: false, // Bu değer değiştirilemez.
    enumerable: true, // Döngülerde vs görünür.
    configurable: false // Silinemez veya nitelikleri değiştirilemez.
});

console.log(referenceObj2.firstProperty); // Output : 1
referenceObj2.firstProperty = 2; // Strict Modda Hata verir. Non-strict modda "sessizce" fail olur.
console.log(referenceObj2.firstProperty); // Output : 1

// Object.defineProperty() genellikle nesne özelliklerinin davranışı üzerinde ince ayarlı kontrole ihtiyaç duyduğunuzda kullanılır; örneğin salt okunur özellikler oluşturma, özellikleri numaralandırmadan gizleme veya özelliklerin silinmesini önleme gibi. Özellikle gelişmiş nesne manipülasyonu ile çalışırken ve basit atamanın ötesinde özellik davranışını tanımlarken kullanışlıdır.


// 3. Object.defineProperties()
const referenceObj3 = {};

Object.defineProperties(referenceObj3, {
    prop1: {
        value: 2,
        writable: false,
        enumerable: true,
        configurable: false
    },
    prop2: {
        value: 3,
        writable: false,
        enumerable: true,
        configurable: false
    }
});
console.log(referenceObj3.prop1);
console.log(referenceObj3.prop2);


// 4. Object.getOwnPropertyDescriptor(obj, prop)
// JavaScript'te Object.getOwnPropertyDescriptor(), bir nesne üzerindeki bir özelliğin tanımlayıcısını almak için kullanılır. Belirtilen özelliğin niteliklerini temsil eden bir nesne döndürür. Bu yöntem, bir özelliğin value, numerable, writeable ve configureable gibi yapılandırma özelliklerini incelemeniz gerektiğinde kullanışlıdır.
const descriptor = Object.getOwnPropertyDescriptor(referenceObj3, "prop1");
console.log(descriptor);


// 5. Object.getOwnPropertyNames(obj)
// JavaScript'te Object.getOwnPropertyNames(), belirli bir nesnenin tüm özellik adlarının (numaralandırılamayan özellikler dahil) bir dizisini almak için kullanılır. Nesnenin prototip zincirindeki özellikleri içermez. Bu yöntem, sayılabilirliklerine (aksi durumda for ... in döngüsünde gözükmez) bakılmaksızın bir nesnenin tüm özelliklerine erişmeniz gerektiğinde özellikle kullanışlıdır.
Object.defineProperty(referenceObj3, "prop3", {
    value: 4,
    writable: false,
    enumerable: false,
    configurable: false
});
const propertyNames = Object.getOwnPropertyNames(referenceObj3);
console.log(propertyNames);


// 6. Object.getPrototypeOf
// JavaScript'te Object.getPrototypeOf(), belirtilen bir nesnenin prototipini almak için kullanılır. JavaScript'teki her nesnenin, prototip nesnesine işaret eden [[Prototype]] (prototip bağlantısı olarak da bilinir) adı verilen dahili bir özelliği vardır. Bu yöntem, bu prototip nesnesine doğrudan erişmenizi sağlar.
const parent = {
    a: 1,
    b: 2,
    c: function() {
        return this.a + " " + this.b;
    }
}
const child = Object.create(parent);
console.log(child.c()); // My notes eklemesini yap. "Zincirde arıyor"

console.log(Object.getPrototypeOf(child) === parent);

// Object.getPrototypeOf(), özellikle miras (inheritance) veya nesne temsilcisiyle çalıştığınız senaryolarda, bir nesnenin prototipini incelemeniz veya ona erişmeniz gerektiğinde yaygın olarak kullanılır. [[Prototype]] dahili özelliğini doğrudan değiştirmeden veya ona erişmeden prototipe erişmenin basit bir yolunu sağlar.

























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
// JavaScript'te nesne kurucusu, nesneleri oluşturmak ve başlatmak için kullanılan bir işlevdir. Benzer özelliklere ve davranışlara sahip nesnelerin örneklerini oluşturmak için bir "plan" görevi görür. Aynı yapıya sahip birden fazla nesne oluşturmak istediğinizde, bir nesne kurucu işlevi tanımlayabilir ve ardından yeni nesneler oluşturmak için bu işlevi kullanabilirsiniz.
function ConstructorFunction(what, where, when) {
    this.ne = what;
    this.nerde = where;
    this.neZaman = when;

    // Ayrıca bir methodda tanımlayabilirim.
    this.generalInfo = function() {
        return this.ne + " " + this.nerde + " " + this.neZaman;
    }
}
const event1 = new ConstructorFunction("Football Match", "NEF Stadium", new Date().toDateString());
const event2 = new ConstructorFunction("Football Match", "Sukru Saracoglu", new Date(2024, 0, 24).toDateString());
console.log(event1.generalInfo());
console.log(event2.generalInfo());

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
console.log(typeof GS, Object.entries(GS));

// Bu örnekte, class anahtar sözcüğü, yapıcı ve yöntemleri daha kısa ve okunabilir bir şekilde tanımlamak için kullanılmıştır. Ancak, kaputun altında JavaScript sınıflarının hala prototip kalıtımına ve kurucu işlevlere dayandığını anlamak önemlidir.
