// JavaScript Maps
// Bir Map, anahtarların herhangi bir veri türü olabileceği anahtar-değer çiftlerini tutar. Bir Map, anahtarların orijinal ekleme sırasını hatırlar.

/** Şu şekilde bir JavaScript Haritası oluşturabilirsiniz:
    * Bir Diziyi new Map() fonksiyonuna aktarma
    * Bir Map oluşturun ve Map.set() işlevini kullanın
 */

// The new Map() Method
// new Map() yapıcısına bir array geçirerek bir map oluşturabilirsiniz:
const fruits = new Map([
    ["Apple", 500],
    ["Banana", 400],
    ["Strawberry", 300]
])
document.getElementById("demo6").innerHTML = fruits.get("Apple");

// The set() Method
// set() yöntemiyle bir Map'e öğeler ekleyebilirsiniz:
const vegetables = new Map();
vegetables.set("Tomato", 500);
vegetables.set("Spinach", 400);
vegetables.set("Potato", 300);
document.getElementById("demo7").innerHTML = vegetables.get("Spinach");

// set() yöntemi, mevcut Map değerlerini değiştirmek için de kullanılabilir:
vegetables.set("Spinach", 200);
document.getElementById("demo8").innerHTML = vegetables.get("Spinach");

// The get() Method
// get() yöntemi, bir Map içindeki bir anahtarın değerini alır:

// The delete() Method
// delete() yöntemi bir Map öğesini kaldırır:
vegetables.delete("Spinach");
document.getElementById("demo9").innerHTML = vegetables.size;

// The has() Method
// Map içinde bir anahtar varsa has() yöntemi true değerini döndürür:
document.getElementById("demo10").innerHTML = vegetables.has("Tomato");
