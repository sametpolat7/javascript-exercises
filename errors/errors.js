// JavaScript Errors

// Throw, and Try...Catch...Finally
//try deyimi çalıştırılacak (denenecek) bir kod bloğu tanımlar.

// catch deyimi, herhangi bir hatayı işlemek için bir kod bloğu tanımlar.

// finally deyimi, sonuçtan bağımsız olarak çalışacak bir kod bloğu tanımlar.

// throw deyimi özel bir hata tanımlar.

try {
    adddalert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
    document.getElementById("demo1").innerHTML = err.message;
}
// JavaScript adddlert'i bir hata olarak yakalar ve işlemek için catch kodunu çalıştırır.

// JavaScript Throws Errors
// Bir hata oluştuğunda, JavaScript normalde **durur** ve bir hata mesajı oluşturur. Bunun teknik terimi şudur: JavaScript bir "throw" atar. (hata verir).

// JavaScript aslında iki özelliğe sahip bir Error "nesnesi" oluşturacaktır: name ve message.

// Input Validation Example
// Bu örnek girdiyi inceler. Değer yanlışsa, bir istisna (err) atılır. Throw (err) catch deyimi tarafından yakalanır ve özel bir hata mesajı görüntülenir:
function testFunc() {
    const message = document.getElementById("demo2");
    message.innerHTML = "";
    let data = document.getElementById("testInput").value;

    try {
        if (data.trim() == "") {
            throw "Input cant empty";
        }
        else if (Number(data) < 5) {
            throw "Input cant lower than 5"
        }
        else if (Number(data) > 10) {
            throw "Input cant higher than 10"
        }
        else if (isNaN(data)) {
            throw "Input can only be numbers"
        }
    }
    catch(err) {
        message.innerHTML = "Error : " + err;
    }
    finally {
        document.getElementById("testInput").value = "";
      }
}

// The finally Statement
// finally deyimi, try ve catch işlemlerinden sonra sonuç ne olursa olsun kodu çalıştırmanızı sağlar:

// HTML Validation
// Yukarıdaki kod sadece bir örnektir.
// Modern tarayıcılar genellikle HTML özniteliklerinde tanımlanan önceden tanımlanmış doğrulama kurallarını kullanarak JavaScript ve yerleşik HTML doğrulamasının bir kombinasyonunu kullanır:
// <input type="number" min="5" max="10">

// The Error Object
// JavaScript, bir hata oluştuğunda hata bilgisi sağlayan yerleşik bir hata nesnesine sahiptir. Hata nesnesi iki faydalı özellik sağlar: name ve message.

// Error Name Values
// Hata adı özelliği tarafından altı farklı değer döndürülebilir:

// Eval Error
// EvalError, eval() işlevinde bir hata olduğunu gösterir. Ancak JavaScript'in daha yeni sürümleri "EvalError" atmaz. Bunun yerine "SyntaxError" kullanır.

// Range Error
// Yasal değerler aralığının dışında bir sayı kullanırsanız RangeError atılır. Örneğin: Bir sayının anlamlı basamak sayısını 500 olarak ayarlayamazsınız.
let num = 1;

try {
    num.toPrecision(500);
}
catch(err) {
    document.getElementById("demo3").innerHTML = err.name + " : " + err.message;
}

// Reference Error
// Bildirilmemiş bir değişkeni kullanırsanız (referans verirseniz) ReferenceError hatası verilir:
let x = 5;

try {
    x = y + 1;
}
catch(err) {
    document.getElementById("demo4").innerHTML = err.name + " : " + err.message;
}

// Syntax Error
// Sözdizimi hatası olan bir kodu değerlendirmeye çalışırsanız bir SyntaxError atılır.
try {
    eval("alert('Hello)");
}
catch(err) {
    document.getElementById("demo5").innerHTML = err.name + " : " + err.message;
}

// Type Error
// Bir işlenen veya bağımsız değişken, bir işleç veya işlev tarafından beklenen türle uyumsuzsa TypeError atılır.
let num1 = 8;

try {
    num1.toLowerCase();
}
catch(err) {
    document.getElementById("demo6").innerHTML = err.name + " : " + err.message;
}

// URI (Uniform Resource Identifier) Error
// Bir URI işlevinde yasa dışı karakterler kullanırsanız bir URIError atılır:
try {
    decodeURI("%%%");
}
catch(err) {
    document.getElementById("demo7").innerHTML = err.name + " : " + err.message;
}

