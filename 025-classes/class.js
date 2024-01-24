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