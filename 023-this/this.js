// JavaScript this keyword
// JavaScript'te this anahtar sözcüğü bir nesneyi ifade eder. Hangi nesne olduğu, bunun nasıl çağrıldığına (kullanıldığına veya çağrıldığına) bağlıdır.

// this anahtar sözcüğü, nasıl kullanıldığına bağlı olarak farklı nesnelere atıfta bulunur:
/**
 * Bir nesne yönteminde bu, nesneyi ifade eder.
 * Tek başına, this global nesneyi ifade eder. (window object)
 * Bir fonksiyonda, this global nesneye atıfta bulunur.
 * Bir fonksiyonda, strict modda, this tanımsızdır. (undefided)
 * Bir eventte, this, eventi alan öğeyi ifade eder. (Event handlers)
 * call(), apply() ve bind() gibi yöntemler thisi herhangi bir nesneye yönlendirebilir.
 */

// this in a object method
// Bir nesne yönteminde kullanıldığında, bu, nesneye atıfta bulunur.
const person = {
    name : "John",
    surName : "Doe",
    fullName : function() {
        return this.name + " " + this.surName;
    }
}
document.getElementById("demo").innerHTML = person.fullName();

// this alone
// Tek başına kullanıldığında, bu global nesneye atıfta bulunur. Çünkü bu global kapsamda çalışmaktadır. Bir tarayıcı penceresinde global nesne [object Window]'dir:
let x = this;
document.getElementById("demo1").innerHTML = x;

//  Sıkı modda, tek başına kullanıldığında da , global nesneye de atıfta bulunur:
{
    "use strict";
    let y = this;
    document.getElementById("demo2").innerHTML = y;
}

// this in a Function (Default)
// Bir fonksiyonda, this'in varsayılan bağlayıcısı "Global Object"tir.
function myFunction() {
    return this;
}
document.getElementById("demo3").innerHTML = myFunction();

// this in a Function (Strict)
// JavaScript katı modu varsayılan bağlamaya izin vermez. Dolayısıyla, bir işlevde kullanıldığında, katı modda, bu "tanımsızdır".
function myFunction1() {
    "use strict";
    return this;
}
document.getElementById("demo4").innerHTML = myFunction1();

// this in Event Handlers
// HTML olay işleyicilerinde bu, olayı alan HTML öğesini ifade eder:

// demo4ten sonraki div

// Explicit Function Binding
// call() ve apply() yöntemleri önceden tanımlanmış JavaScript yöntemleridir. Her ikisi de argüman olarak başka bir nesneyle bir nesne yöntemini çağırmak için kullanılabilir.
const person1 = { 
    fullName : function() {
        return this.name + " " + this.surName;
    }
}

const person2 = {
    name : "Samet",
    surName : "Polat"
}

let x1 = person1.fullName.call(person2);
document.getElementById("demo5").innerHTML = x1;