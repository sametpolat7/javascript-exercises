// JavaScript Classes
// JavaScript Sınıfları, JavaScript Nesneleri için şablonlardır.

// JavaScript Class Syntax
// Bir sınıf oluşturmak için "class" anahtar sözcüğünü kullanın.
// Her zaman constructor() adında bir yöntem ekleyin:

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new Car("Renault", 2018);
const yourCar = new Car("BMW", 2023);

document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year + "<br>" +
yourCar.name + " " + yourCar.year;

// JavaScript sınıfı bir nesne değildir. JavaScript nesneleri için bir şablondur.


// The Constructor Method
// Tam adı "constructor" olmalıdır
// Yeni bir nesne oluşturulduğunda otomatik olarak yürütülür.
// Nesne özelliklerini başlatmak için kullanılır.
// Bir kurucu yöntem tanımlamazsanız, JavaScript boş bir kurucu yöntem ekleyecektir.


// The Class Method
// Sınıf yöntemleri, nesne yöntemleriyle aynı sözdizimiyle oluşturulur.
// Bir sınıf oluşturmak için class anahtar sözcüğünü kullanın.
// Her zaman bir constructor() yöntemi ekleyin.
// Ardından istediğiniz sayıda property ekleyin.

class child {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myBoy = new child("Selim", 2007);
document.getElementById("demo1").innerHTML =
"My boy is " + myBoy.age() + " years old.";


// "use strict"
// Sınıflardaki sözdizimi "katı modda" yazılmalıdır. "Sıkı mod" kurallarına uymazsanız bir hata alırsınız. Örneğin class içinde bir değişkeni bildirmeden kullanmak isterseniz bir hata alırsınız.


// Class Inheritance
// JavaScript sınıf kalıtımı, yeni sınıfın mevcut sınıftan özellikleri ve yöntemleri miras aldığı mevcut sınıfları temel alan yeni sınıflar oluşturma kavramını ifade eder. Bu, kodun yeniden kullanılmasına ve paylaşılan işlevselliğe sahip bir sınıflar hiyerarşisi oluşturulmasına olanak tanır.
class companyCars {
    constructor(brand) {
        this.carBrand = brand;
    }
    present() {
        return `We have a ${this.carBrand}. `;
    }
};

class mainCars extends companyCars {
    constructor(brand, model) {
        super(brand);
        this.carModel = model;
    }
    show() {
        return this.present() + `Car model is ${this.carModel}.`;
    }
};
const businessCar = new mainCars("Ford", "Connect");
console.log(businessCar.show());

console.log(businessCar);

// The super() method refers (atıfta bulunmak) to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.


// Static Methods
// JavaScript'te, bir sınıf tanımı içindeki static anahtar sözcüğü, statik bir method veya property tanımlamak için kullanılır. Statik method veya propertyler, sınıfın örnekleri (sınıfı prototipi alan yeni nesneler) yerine sınıfın kendisiyle ilişkilendirilir. Bu, sınıfın bir örneğini oluşturmaya gerek kalmadan doğrudan sınıftan erişilebilecekleri anlamına gelir.
class StaticExample {
    static exampleProp = "This is static property";

    static exampleMeth() {
        return console.log(this.exampleProp);
    }
};
StaticExample.exampleMeth();

// Property'nin constructor içinde olmamasına dikkat et. Çünkü statik yöntemler veya özellikler, sınıfın örnekleri yerine sınıfın kendisiyle ilişkilendirilir.

// Bir perspektif olması açısından başka bir örnek:
class MathUtility {
    static add(a, b) {
        return a + b;
    }
    
    static substract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divine(a, b) {
        if(b === 0) {
            throw new Error("Division by zero")
        } else {
            return a / b;
        }
    }
}

console.log(MathUtility.add(10, 5));
console.log(MathUtility.substract(10, 5));
console.log(MathUtility.multiply(10, 5));
console.log(MathUtility.divine(10, 5));

console.log(MathUtility.divine(10, 0));
