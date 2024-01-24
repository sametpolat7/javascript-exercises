// JavaScript Accessors (Getters and Setters)

// Getter ve setter'lar (nesne erişimcileri veya hesaplanmış özellikler olarak da adlandırılır), bir nesnenin özelliklerinin değerini okurken veya atarken özel davranışlar eklemenizi sağlayan bir özelliktir. Bu, bir özelliğin değerine erişildiğinde veya atıldığında belirli bir işlem gerçekleştirmenize olanak tanır.

// JavaScript Get Keyword (Getter)
// JavaScript'te, bir nesnenin belirli bir özelliğine erişirken özel bir davranış sağlamak için "getter" kullanılabilir. Getter, bir nesnenin belirli bir özelliğini okumak istediğimizde otomatik olarak çalışan bir fonksiyondur. Bu, bir nesne özelliğine erişirken arka planda belirli bir işlem gerçekleştirmemizi sağlar.
const person5 = {
    id: 48545,
    surName: "Colly",
    nationality: "en",
    get nation() {
        return this.nationality;
    }
}
console.log(person5.nation); // Bir getter kullanarak nesneden veri görüntüleyin.

const personFive = {
    _name: "John",
    get name() {
        console.log("Getting name...");
        return this._name;
    }
}
console.log(personFive.name);
// Bu örnekte get name(), name özelliği için bir getter yöntemi tanımlar. person.name öğesine eriştiğinizde get yöntemi çağrılır ve değeri döndürmeden önce ek mantık yürütebilir.

// JavaScript Set Keyword (Setter)
//Setter yöntemi, bir nesne özelliği ile ilişkili olan ve özellik değiştirildiğinde çağrılan bir işlevdir. Bir özellik ayarlandığında eylemler veya doğrulamalar gerçekleştirmenizi sağlar.
const person6 = {
    id: 5454,
    surName: "Kazim",
    nationality: "",
    set nation(value) {
        this.nationality = value;
    }
};

person6.nation = "TR"; // Bir setter kullanarak bir nesne özelliğini ayarlayın.
console.log(person6.nationality);

const personSix = {
    _name: "Cengiz",
    set name(value) {
        console.log("Setting name...");
        return this._name = value;
    }
}
personSix.name = "Ezel";
console.log(personSix._name);

// Faydaları:
// Encapsulation: Getter ve setter yöntemleri, bir nesnenin dahili durumuna erişimi kontrol etmenize olanak tanıyan bir kapsülleme düzeyi sağlar.

// Calculated Properties: Getter'lar, özelliklere erişirken değerleri dinamik olarak hesaplamanızı sağlar.

// Validation: Ayarlayıcılar, özelliklere atanan değerleri doğrulamanıza ve kontrol etmenize olanak tanır.


// Accessors with Classes
// JavaScript'te sınıflarla çalışırken, sınıf tanımının bir parçası olarak getter ve setter yöntemlerini kullanabilirsiniz:

class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        console.log("Getting Radius Value...");
        return this._radius;
    }
    set radius(value) {
        if(value <= 0) {
        console.log("Error. Radius value has not negative.")
    } else {
        this._radius = value;
    }
    } 
}
const myCircle = new Circle(50);
console.log(myCircle.radius);

myCircle.radius = 80;
console.log(myCircle.radius);

myCircle.radius = -20;
console.log(myCircle.radius);

// Bir değişken adından önce alt çizgi (_) kullanmak, değişkenin özel veya bir nesnenin dahili olması gerektiğini belirtmek için JavaScript'te yaygın bir kuraldır. Bu, diğer geliştiricilere bu değişkene nesnenin dışından doğrudan erişmemeleri veya değiştirmemeleri gerektiğini ve onunla etkileşim kurmak için genel yöntemler (getter ve setter yöntemleri gibi) olabileceğini belirtmenin bir yoludur.
