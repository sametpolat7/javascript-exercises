// JavaScript Modules
// JavaScript'te import ve export kavramları, modüler programlamayı destekleyen ECMAScript 6 (ES6) standardının bir parçasıdır. Bu kavramlar, kodu modüler parçalara bölmeyi ve farklı dosyalar arasında veri ve fonksiyonları paylaşmayı sağlar.

// export Kavramı:
// export ifadesi, bir dosyadaki değişkenleri, fonksiyonları veya nesneleri diğer dosyalara aktarmak için kullanılır. Bu, başka bir dosyadan bu dosyadaki belirli içeriklere erişim sağlar. İki temel export yöntemi vardır:

// 1. Named Export (İsimlendirilmiş Aktarım):
// module.js bak
import { add, multiply } from './module.js';
document.getElementById("demo").innerHTML = add(5, 4);
document.getElementById("demo1").innerHTML = multiply(5, 4);

// 2. Default Export
import divine from './module.js';
document.getElementById("demo2").innerHTML = divine(5,4);