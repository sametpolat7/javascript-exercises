// JavaScript HTML DOM (Document Object Model)
// HTML DOM, HTML ve XML belgeleri için bir programlama arayüzüdür. Bir belgenin yapısını nesnelerden oluşan bir ağaç olarak temsil eder ve geliştiricilerin JavaScript kullanarak bir web sayfasının içeriğini, yapısını ve stilini dinamik olarak değiştirmesine olanak tanır.

// HTML DOM'a JavaScript (ve diğer programlama dilleri) ile erişilebilir.
// DOM'da tüm HTML öğeleri nesne olarak tanımlanır.
// Programlama arayüzü, her nesnenin propertyleri ve methodlarıdır.
// Property, alabileceğiniz veya ayarlayabileceğiniz bir değerdir (bir HTML öğesinin içeriğini değiştirmek gibi).
// Method, yapabileceğiniz bir eylemdir (bir HTML öğesi eklemek veya silmek gibi).

const findElement0 = document.getElementById("demo");
findElement0.innerHTML = "Hello World!";

// HTML DOM belge nesnesi, web sayfanızdaki diğer tüm nesnelerin sahibidir.
// Ancak bu şu ile karıştırılmamalıdır. Window object tarayıcı penceresini temsil eder ve global özellikler ve yöntemler sağlarken, document object bu pencere içindeki HTML belgesini temsil eder ve DOM yapısına ve içeriğine erişim sağlar.

// Document object web sayfanızı temsil eder. Bir HTML sayfasındaki herhangi bir öğeye erişmek istiyorsanız, her zaman document nesnesine erişmekle başlarsınız.


// Finding HTML Elements
// Genellikle JavaScript ile HTML öğelerini manipüle etmek istersiniz. Bunu yapmak için önce öğeleri bulmanız gerekir. Bunu yapmanın birkaç yolu vardır:

// Finding HTML Element By Id
const findElement = document.getElementById("demo1");
console.log("findElement (getElementById): " , findElement);

document.getElementById("demo2").innerHTML = 
`Here. It's #demo1: ${findElement.innerHTML}`;

// Eleman bulunursa, yöntem elemanı bir "object" olarak döndürür. Eleman bulunamazsa, eleman "null" içerecektir.


// Finding Element by Tag Name
// Bu örnek tüm <p> öğelerini bulur:
const findElement1 = document.getElementsByTagName("p");
console.log("findElement1 (getElementsByTagName): " , findElement1);

// Konsolda çıkan outputa baktığımızda her property'nin hem dizin numarası ile hemde "isimleri" ile olmak üzere ikişer kere yazıldığını görürüz. Çünkü HTMLCollection nesneleri, öğelere hem dizinle hem de ID'leriyle erişim imkanı sağlar. Bu normal bir davranıştır ve koleksiyon içindeki öğelere çeşitli erişim yolları sağlamak amaçlıdır.

document.getElementById("demo3").innerHTML = 
`Here. It's first paragraph : ${findElement1[0].innerHTML};`

const findElement2 = document.getElementById("find-element");
console.log("findElement2 (getElementById): " , findElement2);

const findElement3 = findElement2.getElementsByTagName("p");
console.log("findElement3 (getElementsByTagName): " , findElement3);

document.getElementById("demo6").innerHTML = 
`Here. It's first paragraph in find-element class : ${findElement3[0].innerHTML}`;


// Finding Element by Class Name
// Aynı sınıf adına sahip tüm HTML öğelerini bulmak istiyorsanız getElementsByClassName() işlevini kullanın. Bu örnek, class="intro" içeren tüm öğelerin bir listesini döndürür.
const findElement4 = document.getElementsByClassName("intro");
console.log("findElement4 (getElementsByClassName): " , findElement4);

document.getElementById("demo9").innerHTML = 
`Here. It's first paragragh in "intro" class: ${findElement4[0].innerHTML}`;


// Finding Element by CSS Selectors
// Belirli bir CSS selector'u (id, class names, types, attributes, values of attributes, etc) eşleşen tüm HTML öğelerini bulmak istiyorsanız querySelectorAll() yöntemini kullanın.
const findElement5 = document.querySelectorAll("p.intro");
console.log("findElement5 (querySelectorAll): " , findElement5);

document.getElementById("demo10").innerHTML = findElement5[1].innerHTML;


// Finding HTML Elements by HTML Object Collections
const formList = document.forms['frm'];
console.log(formList);

let txt = "";
for(let i = 0; i < formList.length; i++) {
    txt += formList.elements[i].value + "<br>";
}
document.getElementById("demo11").innerHTML = txt;

// Aşağıdaki HTML nesnelerine (ve nesne koleksiyonlarına) da erişilebilir:
// document.anchors
// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title


// Changing HTML 

// Changing HTML Content
const chContent = document.getElementById("demo12");
console.log("id = demo12 : ", chContent);
chContent.innerHTML = "New Heading!"


// Changing the Value of an Attribute
const chAttribute = document.getElementById("demo13");
console.log(chAttribute.attributes)

chAttribute.type = "number";
chAttribute.value = 171717;
chAttribute.setAttribute("disabled", true);





















// document (küçük harf), tarayıcı penceresinde yüklü olan geçerli HTML belgesi nesnesini ifade eder. Bir web sayfasının içeriğini değiştirmek için JavaScript kullandığınızda etkileşimde bulunduğunuz asıl nesnedir.

// Belge (büyük harf), DOM belirtiminde tanımlanan arabirimi ifade eder. Bu arayüz, DOM'daki belgelerin (hem HTML hem de XML) uyduğu ortak yöntemleri ve özellikleri tanımlar. JavaScript kodunuzda doğrudan etkileşimde bulunduğunuz bir şeyden ziyade kavramsal bir tanımdır. DOM spesifikasyonu içinde bir belgenin yeteneklerini ve yapısını tanımlayan şeydir.

// Dolayısıyla, document JavaScript kodunuzdaki gerçek belge nesnesini temsil ederken, Document bir belge nesnesinin DOM spesifikasyonu içinde nasıl görünmesi gerektiğine ilişkin planı veya arayüz tanımını temsil eder.