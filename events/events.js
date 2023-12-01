// HTML olayları, HTML öğelerinin başına gelen "şeylerdir".
// HTML sayfalarında JavaScript kullanıldığında, JavaScript bu olaylara react "tepki" verebilir.

/*
In HTML onclick is the "event listener", myFunction is the "event handler":
    <button onclick="myFunction()">Click me</button>

In JavaScript click is the "event", myFunction is the "event handler":
    button.addEventListener("click", myFunction);
*/

function timeFunction () {
    document.getElementById("time").innerHTML =
    Date();
}

// Common HTML Events
/*
onchange = Bir HTML öğesi değiştirildi.
onclick = Kullanıcı bir HTML öğesine tıklar.
onmouseover = Kullanıcı fareyi bir HTML öğesinin üzerine getirir.
onmouseout = Kullanıcı fareyi bir HTML öğesinden uzaklaştırır.
onkeydown = Kullanıcı bir klavye tuşuna basar.
onload = Tarayıcı sayfayı yüklemeyi bitirdi.
*/
// onblur Events 
function upperCase() {
    let x = document.getElementById("blur");
    x.value = x.value.toUpperCase();
}
// change Events
function myCar() {
    let x = document.getElementById("mySelect").value;
    document.getElementById("print").innerHTML =
    "You selected :" + " " + x;
}
// oncopy Events
function copier() {
    document.getElementById("nocopy").innerHTML = "\"Borrowing\" is not cool."
}