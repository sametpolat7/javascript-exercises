// JavaScript call() 
// call() yöntemi ile farklı nesneler üzerinde kullanabileceğiniz bir method çağırabilirsiniz.
const person4 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person5 = {
    firstName: "Nazan",
    lastName: "Öncel"
}

console.log(person4.fullName.call(person5));

// The call() Method with Arguments
const person6 = {
    identy: function(city, address) {
        return this.firstName + " " + this.lastName + " " + address + "-" + city;
    }
}
console.log(person6.identy.call(person5, "Çanakkale", "Merkez"));

// JavaScript apply()
// call() ile aynı aynı işleve sahiptir. Ancak call() argümanları ayrı ayrı, apply() ise bir "DİZİ" olarak alır.
console.log(person6.identy.apply(person5, ["Oslo", "7th Street"]));

// Simulate a Max Method on Array
// Math.max() yöntemini kullanarak en büyük sayıyı (bir sayı listesinde) bulabilirsiniz:
console.log(Math.max(1, 2, 3));

// JavaScript dizilerinde max() yöntemi bulunmadığından, bunun yerine Math.max() yöntemini uygulayabilirsiniz.
console.log(Math.max.apply(null, [1, 2, 3]));

// İlk bağımsız değişken (null) önemli değildir. Bu örnekte kullanılmamıştır. Bu örnekler de aynı sonucu verecektir:
console.log(Math.max.apply(Math, [1, 2, 3]));

// Bunlarda
console.log(Math.max.apply(" ", [1, 2, 3]));
console.log(Math.max.apply(0, [1, 2, 3,]));

// JavaScript bind()
// bind() fonksiyonu bind() fonksiyonu, bir fonksiyonu çağırmak yerine, o fonksiyonun "belirli" bir this değeri ile bağlanmış bir kopyasını oluşturur.
const person7 = {
    firstName: "John",
    lastName: "Doe",
    id: 5454512,
    card: function() {
        return this.firstName + this.lastName + this.id;
    },
    showTime: function() {
        let x = document.getElementById("demo22");
        x.innerHTML = this.firstName + "<br>" + this.lastName;
    }
}

const member = {
    firstName: "John",
    lastName: "Terry",
    id: 7845121
}

const newMember = person7.card.bind(member);
console.log(newMember());

// Preserving This (This'i korumak)
// Bazen this'in değerinin kaybetmemek için bind() kullanmak gerekebilir. (call ve apply fonksiyonlarında ki ilk parametre this'in değerini kendi üzerine çekiyordu.)

// Örnek olarak person7 nesnesine bir method ekleyelim (person7.showTime())
// Ve bunu bir "callback" fonksiyonu ile çağırmayı deneyelim:
setTimeout(person7.showTime, 3000); // undefined sonucunu alırız.

// Bunu şu şekilde fixleyebiliriz:
const newMethod = person7.showTime.bind(person7);

setTimeout(newMethod, 3000);

// Differences
// call() ve apply() fonksiyonları anında bir fonksiyon çağrısı yapar. call() argümanları sırasıyla, apply() ise bir dizi içinde alır.

// bind() fonksiyonu ise yeni bir fonksiyon döndürür ve çağrıldığında belirli bir this değeri ile çalışır. Ancak, fonksiyonun anında çağrılmasını sağlamaz.

// bind() kullanılarak oluşturulan fonksiyon, yeni bir fonksiyon referansı oluşturur ve bu referansın çağrılması sonucu orijinal fonksiyon çalışır.

// call() ve apply() fonksiyonları, fonksiyonun çalışma anında this değerini belirlerken, bind() fonksiyonu bu bağlamı oluşturarak bu bağlamı korur.