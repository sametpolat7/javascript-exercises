// JS DOM HTMLCollection
// HTMLCollection, HTML öğelerinden oluşan bir koleksiyonu temsil eden özel bir NodeList türüdür.
// HTMLCollection getElementsByTagName, getElementsByClassName ve children gibi belirli DOM yöntemleri tarafından döndürülür.
// HTMLCollection canlıdır, yani DOM değiştiğinde otomatik olarak güncellenir. HTMLCollection'ı oluşturmak için kullanılan ölçütlerle eşleşen öğeler DOM'a eklenir veya DOM'dan kaldırılırsa, HTMLCollection bu değişiklikleri otomatik olarak yansıtır.
// HTMLCollection yalnızca öğeleri içerir, metin düğümleri veya yorumlar gibi diğer düğüm türlerini içermez.

// length özelliği, bir HTMLCollection'daki öğe sayısını tanımlar:

// Bir HTMLCollection bir dizi gibi görünebilir, ancak değildir.

// Liste boyunca döngü yapabilir ve öğelere bir sayı ile başvurabilirsiniz (tıpkı bir dizi gibi).

// Ancak, bir HTMLCollection üzerinde valueOf(), pop(), push() veya join() gibi dizi yöntemlerini kullanamazsınız.


// JS DOM NodeList
// NodeList, querySelectorAll, childNodes ve gibi çeşitli DOM yöntemleri tarafından döndürülen düğümlerin bir koleksiyonudur.
// NodeList genel bir düğüm koleksiyonudur ve öğeler, metin düğümleri, yorumlar vb. gibi farklı düğüm türlerini içerebilir.
// NodeList tipik olarak statik bir koleksiyondur, yani yöntem çağrıldığı anda DOM'un anlık görüntüsünü temsil eder. NodeList oluşturulduktan sonra DOM'da yapılan değişiklikler NodeList'i etkilemez.
// NodeList canlı değildir, yani DOM değiştiğinde otomatik olarak güncellenmez. DOM'da NodeList'teki düğümleri etkileyen değişiklikler yaparsanız, bu değişiklikleri yansıtmak için yeni bir NodeList oluşturmanız gerekir.


// The Difference Between an HTMLCollection and a NodeList
// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeler). Düğümlere dizin numaraları ile erişilebilir. Dizin 0'dan başlar.

// Her ikisi de listedeki (koleksiyondaki) öğe sayısını döndüren bir length özelliğine sahiptir.

// HTMLCollection, belge öğelerinin bir koleksiyonudur.

// NodeList, belge düğümlerinin (öğe düğümleri, nitelik düğümleri ve metin düğümleri) bir koleksiyonudur.

// HTMLCollection öğelerine adlarına, kimliklerine veya dizin numaralarına göre erişilebilir.

// NodeList öğelerine yalnızca dizin numaraları ile erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList çoğunlukla statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmeyecektir.

// getElementsByClassName() ve getElementsByTagName() yöntemleri canlı bir HTMLCollection döndürür.

// querySelectorAll() yöntemi statik bir NodeList döndürür.

// childNodes özelliği canlı bir NodeList döndürür.


// Genel olarak, öncelikle HTML öğeleriyle çalışıyorsanız ve koleksiyonun DOM'daki değişikliklerle otomatik olarak güncellenmesini istiyorsanız, HTMLCollection daha avantajlıdır. Ancak, farklı düğüm türleriyle çalışmanız gerekiyorsa veya DOM'un statik bir anlık görüntüsünü istiyorsanız, NodeList daha uygun olabilir.