// JavaScript Array Methods

// JavaScript Array length
// length özelliği, bir dizinin uzunluğunu (boyutunu) döndürür:
const lolHeros = ["Samira", "Garen", "Darius"];
let lolHerosSize = lolHeros.length;
console.log(lolHerosSize);

// JavaScript Array toString()
// JavaScript toString() yöntemi, bir arrayi (virgülle ayrılmış) array değerlerinden oluşan bir stringe dönüştürür.
let lolHerosString = lolHeros.toString();
console.log(lolHerosString);

// join() yöntemi ayrıca tüm string öğelerini bir arrayde birleştirir. Tıpkı toString() gibi davranır, ancak ek olarak ayırıcıyı belirtebilirsiniz:
let stringWithPlus = lolHeros.join(" + ");
console.log(stringWithPlus);

// Popping and Pushing
// Dizilerle çalışırken, öğeleri kaldırmak ve yeni öğeler eklemek kolaydır.
// Popping = Öğeleri bir diziden çıkarma
// Pushing = Öğeleri bir diziye ekleme

// JavaScript Array pop()
// pop() yöntemi, bir dizideki son öğeyi kaldırır:
let popping = lolHeros.pop();
console.log(popping); // pop() yöntemi "dışarı atılan" değeri döndürür.
console.log(lolHeros);

// JavaScript Array push()
// push() yöntemi bir diziye (sonuna) yeni bir eleman ekler:
let pushing = lolHeros.push("Kalista");
console.log(pushing); // push() yöntemi yeni dizi "uzunluğunu" döndürür.
console.log(lolHeros);

// JavaScript Array shift()
// shift() yöntemi ilk dizi elemanını kaldırır ve diğer tüm elemanları bir düşük dizine "kaydırır".
let shifting = lolHeros.shift();
console.log(shifting); // shift() yöntemi "dışarı kaydırılan" değeri döndürür.
console.log(lolHeros);

// JavaScript Array unshift()
// unshift() yöntemi bir diziye (başlangıçta) yeni bir eleman ekler ve eski elemanların "kaydırmasını kaldırır".
let unshifting = lolHeros.unshift("Draven");
console.log(unshifting);
console.log(lolHeros);

// pop() ile shift() array öğelerinin kaldırılmasını sağlar.(Sırayla sondan ve baştan)
// push() ile unshift() array öğesi eklenmesini sağlar. (Sırayla sondan ve baştan)

// Changing Elements
console.log(lolHeros.toString());
lolHeros[0] = "Vi";
console.log(lolHeros.toString());

// JavaScript Array length
// length özelliği, bir diziye yeni bir eleman eklemek için kolay bir yol sağlar:
document.getElementById("demo11").innerHTML = lolHeros;
lolHeros[lolHeros.length] = "Karthus";
document.getElementById("demo12").innerHTML = lolHeros;

// length her zaman son öğenin indeks numarasının bir fazlasıdır.

// JavaScript Array delete()
// Dizi elemanları JavaScript operatörü delete kullanılarak silinebilir. Delete kullanmak dizide tanımlanmamış boşluklar bırakır. Bunun yerine pop() veya shift() kullanılması önerilir.
document.getElementById("demo13").innerHTML = lolHeros[2];
delete lolHeros[2];
document.getElementById("demo14").innerHTML = lolHeros;
document.getElementById("demo15").innerHTML = lolHeros[2];

// Merging (Concatenating) Arrays
// concat() yöntemi, mevcut dizileri birleştirerek (concatenating) yeni bir dizi oluşturur:
const myBoys = ["Ali", "Kel", "Onur"];
const myGirl = ["Özlem"];
const myChildren = myBoys.concat(myGirl);
console.log(myChildren);

// concat() yöntemi mevcut dizileri değiştirmez. Her zaman yeni bir dizi döndürür.

// concat() yöntemi herhangi bir sayıda diziyi bağımsız değişkeni olarak alabilir:
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];
const myChildren1 = array1.concat(array2, array3); 
console.log(myChildren1);

// concat() yöntemi ayrıca string ifadeleri de bağımsız değişkeni olarak alabilir:
const array4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = array4.concat("Peter");
console.log(myChildren2);

// Flattening an Array
// Bir diziyi düzleştirme, bir dizinin boyutluluğunu azaltma işlemidir. flat() yöntemi, alt dizi öğeleri belirli bir derinliğe kadar birleştirilen yeni bir dizi oluşturur.
const numbArr = [[1,2], [3,4], [5,6]];
console.log(numbArr);
let flattening = numbArr.flat();
console.log(flattening);

// JavaScript Splicing and Slicing Arrays
// splice() yöntemi bir diziye yeni öğeler ekler.
// slice() yöntemi bir dizinin bir parçasını keser.

// JavaScript Array splice()
// Bir diziye yeni öğeler eklemek için splice() yöntemi kullanılabilir:
const animals = ["Lion", "Monkey", "Dog", "Mouse"];
let splicing = animals.splice(2, 2, 'Cheetah', 'Elephant'); //Çıkarılan kısmı döndürür.
document.getElementById("demo16").innerHTML = "Splice: " + splicing + "<br>"
+ "Animals: " + animals;

/**
 * İlk parametre (2), yeni öğelerin eklenmesi gereken konumu tanımlar (eklenir).
 * İkinci parametre (0) kaç elemanın kaldırılması gerektiğini tanımlar.
 * Parametrelerin geri kalanı ("Lemon" , "Kiwi") eklenecek yeni öğeleri tanımlar.
 * splice() yöntemi, silinen öğeleri içeren bir dizi döndürür:
 */

// Using splice() to remove elements
// Akıllı parametre ayarlarıyla, dizide "delik" bırakmadan öğeleri kaldırmak için splice() işlevini kullanabilirsiniz:
document.getElementById("demo17").innerHTML = 
"Original Array: " + animals + "<br>" +
"Removed First Element: " + animals.splice(1,1) + "<br>" + 
"Last Form of Array: " + animals;

// JavaScript Array slice()
// slice() yöntemi, bir dizinin bir parçasını yeni bir diziye böler.
const games = ["CoD", "LoL", "FIFA", "Warcraft"];
let slicing = games.slice(2);
document.getElementById("demo18").innerHTML = 
games + "<br>" +
slicing;

// slice() yöntemi yeni bir dizi oluşturur. slice() yöntemi kaynak diziden herhangi bir öğe kaldırmaz.

// slice() yöntemi slice(0, 2) gibi iki argüman alabilir.Yöntem daha sonra başlangıç bağımsız değişkeninden başlayarak bitiş bağımsız değişkenine kadar (ancak bu bağımsız değişken dahil değildir) öğeleri seçer.
let slicing1 = games.slice(0, 2);
console.log(slicing1);