// JavaScript Form Validation
// Bir form alanı (fname) boşsa, bu fonksiyon bir mesaj uyarır ve formun gönderilmesini önlemek için false döndürür:
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if(x == "") {
        alert ("Input undefined. Please write anything.");
        return false;
    }
}

// Bu fonksiyon, form gönderildiğinde çağrılabilir. (HTML koduna bakabilrsin. onsubmit?)
// return false ifadesi koşul gerçekleştiği durumda sunucuya form yollamayı engeller.


// JavaScript Can be Validate Number
function validateNumber() {
    const numberRef = document.getElementById("input1");
    let numberInp = numberRef.value;
    if(isNaN(numberInp)) {
        alert ("Please write a number in input.")
    } else if(numberInp < 5 || numberInp > 10) {
        alert ("Fuck you mate. Please follow the rule.")
    } else {
        numberRef.value = "";
    }
}


// Data Validation
// Veri doğrulama, kullanıcı girdisinin temiz, doğru ve kullanışlı olmasını sağlama sürecidir.

// Tipik doğrulama görevleri şunlardır:
// kullanıcı gerekli tüm alanları doldurdu mu?
// kullanıcı geçerli bir tarih girdi mi?
// Kullanıcı sayısal bir alana metin girdi mi?
// Çoğu zaman, veri doğrulamanın amacı doğru kullanıcı girişini sağlamaktır.

// Doğrulama birçok farklı yöntemle tanımlanabilir ve birçok farklı şekilde uygulanabilir.
// Sunucu tarafı doğrulama (Server Side Validation), girdi sunucuya gönderildikten sonra bir web sunucusu tarafından gerçekleştirilir.
// İstemci tarafı doğrulama (Client Side Validation), girdi bir web sunucusuna gönderilmeden önce bir web tarayıcısı tarafından gerçekleştirilir.


// HTML Constraint Validation
// HTML constraint validation is based on:

// Constraint validation HTML Input Attributes
// Constraint validation CSS Pseudo Selectors
// Constraint validation DOM Properties and Methods

/** Constraint Validation HTML Input Attributes
 * disabled --> Giriş öğesini devre dışı bırakma.
 * max and min --> Giriş öğesinin başlangıç ve bitiş sınırını belirleme.
 * pattern --> Giriş öğesi için bir "value" modeli belirleme.
 * required --> Giriş öğesi için "herhangi" bir değer olmasını isteme.
 * type --> Giriş öğesinin tipini belirleme.
 */

/** Constraint Validation CSS Pseudo Class
 * :disabled --> "disabled" özniteliği belirtilen giriş öğelerini seçer.
 * :invalid --> Geçersiz değerlere sahip giriş öğelerini seçer.
 * :optional --> "required" özniteliği belirtilmemiş girdi öğelerini seçer.
 * required --> "required" özniteliği belirtilen giriş öğelerini seçer.
 * :valid --> Geçerli değerlere sahip giriş öğelerini seçer.
 */