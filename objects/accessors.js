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


// JavaScript Set Keyword (Setter)
// JavaScript'te bir nesnenin belirli bir özelliğine değer atarken özel bir davranış sağlamak için "setter" kullanılır. Setter, bir nesnenin belirli bir özelliğine değer atandığında otomatik olarak çalışan bir fonksiyondur. Bu, bir nesne özelliğine değer atarken arka planda belirli bir işlem gerçekleştirmemizi sağlar.
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

// Why Using Getters and Setters?

// 1. Properties ile Methods arasında ortak syntax kullanımı için --ve daha basit.
// 2. Daha iyi Data Quality.
// 3. Perde arkasında bir şeyler yapmak için kullanışlı.


