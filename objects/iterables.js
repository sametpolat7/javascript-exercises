// JavaScript Iterables
// Iterable nesneler, üzerinde for..of ile yinelenebilen nesnelerdir.
// Teknik olarak, iterable'lar [Symbol.iterator] adlı özel bir yöntemi (method) uygulamalıdır.

// Iterating over a String
const company = "W3Schools";
let txt2 = "";
for(let x of company) {
    txt2 += x + "<br>";
}
document.getElementById("demo17").innerHTML = txt2;

// Iterating over an Array
const letters = ["a", "b", "c", "d", "e"];
let txt3 = "";
for(let x of letters) {
    txt3 += x + "<br>";
}
document.getElementById("demo18").innerHTML = txt3;

// JavaScript Iterators
// Yineleyici protokolü, bir nesneden bir dizi değerin nasıl "üretileceğini" tanımlar. Display edileceğini demiyor.(for in ile gayet sağlayabilirdim.) Dikkat edelim!
// Bir nesne next() yöntemini uyguladığında bir yineleyici haline gelir.
// next() yöntemi iki özelliğe sahip bir nesne döndürmelidir:
// value (bir sonraki değer)
// done (true veya false)

// Home Made Iterable
function myNumber() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {
                value:n,
                done:false
            };
        }
    };
}

const n = myNumber();
console.log(n.next()); // 10
console.log(n.next()); // 20
console.log(n.next()); // 30
console.log(n.next()); // 40

// Ev yapımı bir yinelenebilir ile ilgili sorun: JavaScript for..of ifadesini desteklemez.

// Bir JavaScript iterable, [Symbol.iterator] yöntemine sahip bir nesnedir.

// [Symbol.iterator], next() işlevini döndüren bir yöntemdir.

// Bir iterable üzerinde şu kodla iterasyon yapılabilir: 
// for (const x of iterable) { }

const myNumbers = {};

myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if(n == 100) {done = true}
            return {value:n, done:done};
        }
    };
}

let txt4 = "";
for(let x of myNumbers) {
    txt4 += x + "<br>";
}
document.getElementById("demo19").innerHTML = txt4;

const sex = {
    male: "dfdf",
    female: "dfdfdfg"
};