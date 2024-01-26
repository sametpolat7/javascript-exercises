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
    writable: false, // Value değeri değiştirilemez.
    enumerable: true, // Döngülerde vs görünür.
    configurable: false // Silinemez veya nitelikleri değiştirilemez. Sadece belirtilen property için. Object.seal() ile karıştırılmamalıdır. Bknz: Line 141.
});

console.log(referenceObj2.firstProperty); // Output : 1
referenceObj2.firstProperty = 2; // Strict Modda hata verir. Non-strict modda "sessizce" fail olur.
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

console.log(Object.getPrototypeOf(child));
console.log(Object.getPrototypeOf(child) === parent);

// Object.getPrototypeOf(), özellikle miras (inheritance) veya nesne temsilcisiyle çalıştığınız senaryolarda, bir nesnenin prototipini incelemeniz veya ona erişmeniz gerektiğinde yaygın olarak kullanılır. [[Prototype]] dahili özelliğini doğrudan değiştirmeden veya ona erişmeden prototipe erişmenin basit bir yolunu sağlar.


// Protecting Objects

// 1. Object.preventExtensions(obj)
// JavaScript'te Object.preventExtensions(), bir nesneye yeni özellikler eklenmesini engellemek için kullanılır. Bu yöntem bir nesne üzerinde çağrıldığında, nesne "genişletilemez" (non-extensible) hale gelir; yani nesneye yeni özellikler eklenemez, ancak mevcut özellikler değiştirilebilir veya silinebilir.
const referenceObj4 = {
    a: 1,
    b: 2
};
Object.preventExtensions(referenceObj4);
referenceObj4.c = 3;
console.log(referenceObj4); // Output: a:1, b:2
referenceObj4.a = 10;
console.log(referenceObj4); // Output: a:10, b:2

// Bunu iyi anlamak gerekir. Object.preventExtension() yeni bir property eklenmesini engelleyecektir. Value, writeable, numareable veya configureable attributes hala değiştirilebilir.
console.log(Object.getOwnPropertyDescriptor(referenceObj4, "a")) // Output: {true, true, true}
const deneme = Object.defineProperty(referenceObj4, "a", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(referenceObj4, "a")) // Output: {false, false, false}

// Bu yöntem, bir nesnenin yapısının sabit kalmasını sağlamak istediğinizde ve yanlışlıkla veya kötü niyetle yeni özellikler eklenmesini istemediğinizde kullanışlıdır. Değişmezliği zorlamaya ve kodunuzda tutarlılığı korumaya yardımcı olabilir.

// Ancak Object.preventExtensions() işlevinin yalnızca doğrudan nesnenin kendisine yeni özellikler eklenmesini engellediğini unutmamak önemlidir. Mevcut özelliklerde değişiklik yapılmasını veya nesnenin prototip zincirinin özelliklerinde değişiklik yapılmasını engellemez. Ayrıca, prototip zincirinin bir parçası olan nesnelerdeki özelliklerin genişletilebilirliğini etkilemez.

const referenceObj4Child = Object.create(referenceObj4);
console.log(referenceObj4Child);
// Parent konumundaki prototype nesne (referenceObj4) non-extensible olarak kalmaya devam eder. Ancak child konumundaki nesne referenceObj4Child üzerine yeni nesneler eklenebilir.
referenceObj4Child.c = 5;
console.log(referenceObj4Child);


// 2. Object.isExtensible(obj)
// JavaScript'te Object.isExtensible(), bir nesnenin genişletilebilir olup olmadığını belirlemek için kullanılır. Bir nesneye yeni özellikler eklenebiliyorsa nesne genişletilebilirdir. Bu yöntem, nesnenin genişletilebilir (true) veya genişletilemez (false) olduğunu belirten boolean bir değer döndürür.
const isExtensible = Object.isExtensible(referenceObj4);
console.log(isExtensible);


// 3. Object.seal()
// JavaScript'te Object.seal() bir nesneyi mühürlemek için kullanılır; bu, nesneyi genişletilemez hale getirmek ve yeni özelliklerin eklenmesini engellemek anlamına gelir. Ayrıca, mevcut tüm özellikleri non-configurable olarak işaretler, yani silinemez veya nitelikleri (writeable veya ennumerable gibi) değiştirilemez. Ancak, mevcut özelliklerin değerleri yine de değiştirilebilir. (Çünkü writeable: false ayarlanır demiyor. Değiştirilemez diyor.)
const referenceObj5 = {
    a: 0,
    b: 1
}
console.log(Object.getOwnPropertyDescriptor(referenceObj5, "a")); // Output: configureable: true;

Object.seal(referenceObj5);
referenceObj5.c = 10;
console.log(referenceObj5); // Output: {a: 0, b: 1}

// Değerleri değiştirilebilir.
referenceObj5.a = 1;
console.log(referenceObj5); // Output: {a: 1, b: 1}

// Non-configureable olarak işaretlenir. Mühürlendi.
console.log(Object.getOwnPropertyDescriptor(referenceObj5, "a")) // Output: configureable: false BKNZ: Line 147


// 4. Object.isSealed()
// JavaScript'te Object.isSealed(), bir nesnenin mühürlü olup olmadığını belirlemek için kullanılan bir yöntemdir. Bir nesne genişletilebilir değilse (Object.preventExtension) (yani, yeni özellikler eklenemiyorsa) ve mevcut tüm özellikleri yapılandırılamıyorsa (configureable: false ya da Object.seal) (yani, nitelikleri değiştirilemiyorsa) mühürlü olarak kabul edilir.
console.log(Object.isSealed(referenceObj5));


// 5. Object.freeze()
// JavaScript'te Object.freeze(), bir nesneyi değişmez hale getirmek için kullanılan bir yöntemdir. Bir nesneyi dondurduğunuzda, nesne "donmuş" hale gelir, yani property eklenemez, silinemez veya değiştirilemez. Ayrıca, mevcut tüm özellikler configureable: false ve writeable: false durumuna gelir.
const referenceObj6 = {
    a: 0,
    b: 1,
    c: 10
};
Object.freeze(referenceObj6);
const descriptor1 = Object.getOwnPropertyDescriptors(referenceObj6);
console.log(descriptor1)

referenceObj6.d = 101;
console.log(referenceObj6);

referenceObj6.c = 101;
console.log(referenceObj6);


// 6. Object.isFrozen()
// JavaScript'te Object.isFrozen(), bir nesnenin dondurulmuş olup olmadığını belirlemek için kullanılan bir yöntemdir. Bir nesne genişletilebilir değilse (yani, yeni özellikler eklenemiyorsa) ve mevcut tüm özellikleri yapılandırılamaz ve yazılamazsa donmuş olarak kabul edilir.
console.log(Object.isFrozen(referenceObj6));