// JavaScript DOM Navigation
// HTML DOM ile düğüm (node) ilişkilerini kullanarak düğüm ağacında (node tree)gezinebilirsiniz.

/** W3C HTML DOM standardına göre, bir HTML belgesindeki her şey bir düğümdür:

* Belgenin tamamı bir belge düğümüdür
* Her HTML öğesi bir öğe düğümüdür
* HTML öğelerinin içindeki metinler metin düğümleridir
* Her HTML özniteliği bir öznitelik düğümüdür (kullanımdan kaldırılmıştır)
* Tüm yorumlar yorum düğümleridir
 */

// HTML DOM ile, düğüm ağacındaki tüm düğümlere JavaScript tarafından erişilebilir.

/** Düğüm ağacındaki düğümlerin birbirleriyle hiyerarşik bir ilişkisi vardır.
* İlişkileri tanımlamak için parent, child ve sibling terimleri kullanılır:

* Bir düğüm ağacında, en üstteki düğüme root (veya kök düğüm) denir. (html)
* Kök (ebeveyni olmayan) hariç her düğümün tam olarak bir ebeveyni vardır.
* Bir düğümün çok sayıda child olabilir.
* Sibling, aynı parent'e sahip düğümlerdir.
 */

/**
  <html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
 */

// <html> is the root node
// <html> has no parents
// <html> is the parent of <head> and <body>
// <head> is the first child of <html>
// <body> is the last child of <html></html>

// <head> has one child: <title>
// <title> has one child (a text node): "DOM Tutorial"
// <body> has two child: <h1> and <p>
// <h1> has one child: "DOM Lesson one"
// <p> has one child: "Hello world!"
// <h1> and <p> are siblings.

// Navigating Between Nodes
/** JavaScript ile düğümler arasında gezinmek için aşağıdaki düğüm özelliklerini kullanabilirsiniz:
* parentNode
* childNodes[nodenumber]
* firstChild
* lastChild
* nextSibling
* previousSibling
 */

// Child Nodes and Node Values
// DOM işlemede yaygın bir hata, bir öğe düğümünün metin içermesini beklemektir.

// <title id="demo">JS DOM Nodes</title>

// <title> öğe düğümü (yukarıdaki örnekte) metin içermez. "JS DOM Nodes" değerine sahip bir metin düğümü içerir. Ve bu düğüme şu şekillerde erişilebilir:

let myTitle = document.getElementById("demo");
console.log(myTitle.innerHTML);

// innerHTML özelliğine erişmek, firstChild'ın nodeValue özelliğine erişmekle aynıdır:
console.log(myTitle.firstChild.nodeValue);

// İlk çocuğa erişim de bu şekilde yapılabilir:
console.log(myTitle.childNodes[0].nodeValue);

// DOM Root Nodes
// Belgenin tamamına erişim sağlayan iki özel özellik vardır:
// document.body - Belgenin gövdesi.
// document.documentElement - Belgenin tamamı. (Also includes <head> tag)

console.log(document.body);
console.log(document.documentElement);

// // The nodeName property
// nodeName özelliği bir düğümün adını belirtir.

// nodeName salt okunurdur
// Bir öğe düğümünün nodeName'i etiket adıyla aynıdır
// nodeName bir öznitelik düğümünün öznitelik adıdır
// Bir metin düğümünün nodeName'i her zaman #text'tir
// belge düğümünün nodeName'i her zaman #document'tir

let nodeNameH1 = document.body.childNodes[1].nodeName;
console.log(nodeNameH1);

// Not: nodeName her zaman bir HTML öğesinin büyük harfli etiket adını içerir.

// Neden firstChild property veya childNodes[0] kullanamadık. Çünkü bu iki property body içindeki ilk "tab" yani girintiyi ele alıyor. So interesting :)

let nodeNameFirstChild = document.body.childNodes[0].nodeName; 
console.log(nodeNameFirstChild); // Expected #text. nodeName kaldırırsan data propertysinin değerinin "/n   " olacağını göreceksin.

// // The nodeValue property
// nodeValue özelliği bir düğümün değerini belirtir.

// eleman düğümleri için nodeValue değeri "null"
// metin düğümleri için nodeValue metnin kendisidir.
// öznitelik düğümleri için nodeValue öznitelik değeridir.
let nodeValueH1 = document.body.childNodes[1].nodeValue;
console.log(nodeValueH1);

let nodeValueFirstChildOfH1 = document.body.childNodes[1].firstChild.nodeValue;
console.log(nodeValueFirstChildOfH1);

// The nodeType property
// nodeType özelliği, Belge Nesne Modeli'ndeki (DOM) her düğümün salt okunur bir özelliğidir. Düğüm türünü temsil eden bir tamsayı değeri sağlar. nodeType özelliği, DOM ağacını dolaşırken veya değiştirirken uğraştığınız düğümün türünü belirlemek için kullanışlıdır.

// Eleman Düğümü (Node.ELEMENT_NODE): Bu tür, <div>, <p>, <a> vb. gibi bir öğe düğümünü temsil eder. Eleman düğümleri için nodeType değeri 1'dir.

// Öznitelik Düğümü (Node.ATTRIBUTE_NODE): Bu tür, bir öğenin bir niteliğini temsil eder. Çoğu durumda, DOM ağacında gezinirken öznitelik düğümleriyle doğrudan karşılaşmazsınız. Öznitelik düğümleri için nodeType değeri 2'dir.

// Metin Düğümü (Node.TEXT_NODE): Bu tür, bir öğe içindeki metin içeriğini temsil eder. Metin düğümleri, elemanlar içindeki boşluk karakterleri de dahil olmak üzere gerçek metin içeriğini içerir. Metin düğümleri için nodeType değeri 3'tür.

// Yorum Düğümü (Node.COMMENT_NODE): Bu tür, HTML'de <!-- --> ile gösterilen bir yorum düğümünü temsil eder. Yorum düğümleri HTML belgesi içindeki yorumları içerir. Yorum düğümleri için nodeType değeri 8'dir.

// Belge Düğümü (Node.DOCUMENT_NODE): Bu tür, tüm belgenin kendisini temsil eder. DOM ağacının köküdür. Belge düğümü için nodeType değeri 9'dur.

// Belge Türü Düğümü (Node.DOCUMENT_TYPE_NODE): Bu tür, HTML belgesindeki <!DOCTYPE> bildirimini temsil eder. Belge türü hakkında bilgi sağlar ve genellikle XML belgelerinde karşılaşılır. Belge türü düğümleri için nodeType değeri 10'dur.

// Belge Parçası Düğümü (Node.DOCUMENT_FRAGMENT_NODE): Bu tür bir belge parçasını temsil eder. Belge parçaları, düğümleri ana DOM ağacına eklemeden bir araya getirmenize olanak tanıyan hafif kapsayıcılardır. Belge parçası düğümleri için nodeType değeri 11'dir.


// HTML DOM Elements (Nodes)

// Creating new element with DOM (Create Nodes)
const appendElemNode = document.createElement("p");
const appendTextNode = document.createTextNode("I was a node text. Now im inside a div.");

appendElemNode.appendChild(appendTextNode);

const divElem = document.getElementById("demo1");
divElem.appendChild(appendElemNode);

// Creating new element -- insertBefore()
// Önceki örnekteki appendChild() yöntemi, yeni öğeyi ebeveynin son çocuğu olarak ekler. Bunu istemiyorsanız insertBefore() yöntemini kullanabilirsiniz:
const appendElemNode2 = document.createElement("p");
const appendTextNode2 = document.createTextNode("Im first bitches!");

appendElemNode2.appendChild(appendTextNode2);

divElem.insertBefore(appendElemNode2, appendElemNode);

// Remove the existing element
function removeElem() {
    const falseElem = document.getElementById("demo3");
    falseElem.remove();
}

// Removing child nodes
// remove() yöntemini desteklemeyen tarayıcılarda, bir öğeyi kaldırmak için üst düğümü bulmanız gerekir:
const divElem2 = document.getElementById("demo4");
divElem2.removeChild(divElem2.childNodes[3])
console.log(divElem2) // Nasıl kolay yolunun blurum.

// Replacing HTML Elements
// Bir öğeyi HTML DOM'a yerleştirmek için replaceChild() yöntemini kullanın:
const addNodeElem = document.createElement("p");
const addTextNode = document.createTextNode("I was a lorem text. But im changed.");

addNodeElem.appendChild(addTextNode);

divElem2.replaceChild(addNodeElem, divElem2.childNodes[1]);
