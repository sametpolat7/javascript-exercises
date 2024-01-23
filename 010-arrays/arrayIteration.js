// JavaScript Array Iteration

// JavaScript Array forEach(forEach() yöntemi, her dizi öğesi için bir fonksiyonu (bir geriçağırım işlevi) bir kez çağırır.
const eachNumber = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let eachTxt = "";
eachNumber.forEach(eachFunc);
document.getElementById("demo33").innerHTML = eachTxt;

function eachFunc(value, index, array) {
    eachTxt += value + "<br>";
}

// JavaScript Array map()
// map() yöntemi, her bir dizi elemanı üzerinde bir fonksiyon gerçekleştirerek yeni bir dizi oluşturur.map() yöntemi, değerleri olmayan dizi öğeleri için işlevi çalıştırmaz. map() yöntemi orijinal diziyi değiştirmez. Bu örnek, her dizi değerini 2 ile çarpar:
const mapNumber = [10, 20, 30, 40, 50];
let mapNumber2 = mapNumber.map(mapFunc);

document.getElementById("demo34").innerHTML = mapNumber2;

function mapFunc(value) {
    return value * 2;
}

// JavaScript Array filter()
// filter() yöntemi, bir testi geçen dizi öğeleriyle yeni bir dizi oluşturur.Bu örnek, değeri 18'den büyük olan elemanlardan yeni bir dizi oluşturur:
const filterNumber = [5, 9, 18, 27, 88, 98, 130];
let filtered = filterNumber.filter(filterFunc);

document.getElementById("demo35").innerHTML = filtered;

function filterFunc(value) {
    return value > 18;
}

// Peki dizin değerleri 3 ten büyük elemanları yazdırmak isteseydik:
let filterIndexNum = filterNumber.filter(filterIndexFunc);
document.getElementById("demo36").innerHTML = filterIndexNum;

function filterIndexFunc(index) {
    return index > 3; // Expected the output is 88, 98, 130 but Yukarıdaki örnekte, geri arama işlevi dizin ve dizi parametrelerini kullanmaz, bu nedenle bunlar atlanabilir: index, array
}

// JavaScript Array every()
// every() yöntemi, tüm dizi değerlerinin bir testi geçip geçmediğini kontrol eder. Bu örnek, tüm dizi değerlerinin 18'den büyük olup olmadığını kontrol eder:
const everyNumb = [1, 2, 3, 4, 5, 88, 99];
let everyNumbGreaterThan = everyNumb.every(everyFunc);
document.getElementById("demo366").innerHTML = 
"Are all the numbers of this array greater than 18? : " + everyNumbGreaterThan;

function everyFunc(value) {
    return value > 18; // Booelan değer döndürür. (Filter yeni dizi oluşturur. Aradaki fark.)
}

// JavaScript Array some()
// some() yöntemi, bazı dizi değerlerinin bir testi geçip geçmediğini denetler. Bu örnek, bazı dizi değerlerinin 18'den büyük olup olmadığını kontrol eder:
let everyNumbHas18 = everyNumb.some(someFunc);
document.getElementById("demo362").innerHTML = 
"Are there numbers greater than 18 in this series?: " + everyNumbHas18;

function someFunc(value) {
    return value > 18;
}

// JavaScript Array find()
// find() yöntemi, bir test işlevini geçen ilk dizi öğesinin değerini döndürür. Bu örnek, 18'den büyük olan ilk öğeyi bulur (değerini döndürür):
let findFirstNumbOver18 = everyNumb.find(findFunc);
document.getElementById("demo363").innerHTML = 
"The First Number Over 18 : " + findFirstNumbOver18;

function findFunc(value) {
    return value > 18;
}

// JavaScript Array findIndex()
// findIndex() yöntemi, bir sınama işlevini geçen ilk dizi öğesinin dizinini döndürür. Bu örnek, 18'den büyük olan ilk elemanın indeksini bulur:
let findIndexFirstNumbOver18 = everyNumb.findIndex(findIndexFunc);
document.getElementById("demo365").innerHTML = 
"The First Number Over 18 has index: " + findIndexFirstNumbOver18;

function findIndexFunc(value) {
    return value > 18;
}


// Arraylerde indexOf() ve lastIndexOf() methodları da kullanılabilir. Ancak bu değer spesifik olarak belirtildiğinde işe yarar. find() ise bir koşula bağlı olarak çalıştırılabilir.

// JavaScript Array reduce()
// reduce() yöntemi, tek bir değer üretmek (azaltmak) için her dizi öğesi üzerinde bir fonksiyon çalıştırır. reduce() yöntemi dizide soldan sağa doğru çalışır. Ayrıca bkz. reduceRight(). reduce() yöntemi orijinal diziyi küçültmez.
// Bu örnek, bir dizideki tüm sayıların toplamını bulur:
const reduceNumber = [1, 2, 3, 4, 5, 6];
let totalReduce = reduceNumber.reduce(reduceFunc);

document.getElementById("demo37").innerHTML = totalReduce;

function reduceFunc(total, value, index, array) {
    return total + value;
}

// JavaScript Array.from()
// Array.from() yöntemi, bir uzunluğa sahip herhangi nesneden veya yinelenebilir herhangi bir nesneden bir Array döndürür.
let myFullName = "Samet Polat";
const myNameArray = Array.from(myFullName);
console.log(myNameArray);

