// HTML DOM Events
// HTML DOM (Belge Nesne Modeli) olayları, bir web sayfasının veya uygulamanın yürütülmesi sırasında meydana gelen ve JavaScript tarafından algılanabilen ve işlenebilen eylemler veya olaylardır. Bu olaylar fare tıklamaları, klavyeye basmalar veya form öğelerindeki değişiklikler gibi kullanıcı eylemleri olabileceği gibi, bir öğenin yüklenmesinin tamamlanması veya tarayıcı penceresinin yeniden boyutlandırılması gibi tarayıcı veya DOM'un kendisi tarafından da tetiklenebilir.

// animationstart, animationiteration and animationend events
const animeItem = document.getElementById("anime-item");

animeItem.addEventListener("animationstart", () => {
    document.getElementById("demo").innerHTML = "Animation Started!";
});
animeItem.addEventListener("animationiteration", () => {
    document.getElementById("demo").innerHTML = "Animation Second Start!";
});
animeItem.addEventListener("animationend", () => {
    document.getElementById("demo").innerHTML = "Animation Ended!";
});


// beforeunload event
// Sayfa boşaltılmadan hemen önce (örneğin, kullanıcı sayfadan uzaklaştığında, sayfayı yenilediğinde veya tarayıcı sekmesini/penceresini kapattığında) etkisini gösterir. Ancak, tarayıcılar genellikle güvenlik nedenleriyle bu mesajı özelleştirme yeteneğini kısıtlar.

window.addEventListener("beforeunload", (event) => {
    event.returnValue = "Write something clever here..";
    console.log(event)
  }, true);

// Bazı durumlarda, beforeunload olayı animasyon sona erene kadar tetiklenmiyor gibi görünür. Bu davranış, beforeunload olay işleyicisinin yürütülmesini güvenli olana kadar geciktiren tarayıcı optimizasyonlarından veya güvenlik önlemlerinden kaynaklanır; bu, animasyonlar gibi bekleyen diğer görevlerin bitmesini beklemeyi içerebilir.

// blur event
const blurItem = document.getElementById("demo1");
blurItem.addEventListener('blur', () => {
    document.getElementById("demo2").innerHTML = "Focus lost.";
})

// change event
const changeItem = document.getElementById("demo3");
changeItem.addEventListener("change", () => {
    let itemValue = changeItem.value;
    document.getElementById("demo4").innerHTML = "You selected " + itemValue;
})

// click event
const clickItem = document.getElementById("myDropdown");
const dropdownItems = document.getElementsByClassName("dropdown-list")[0];
console.log(dropdownItems);
clickItem.addEventListener("click", () => {
    dropdownItems.classList.toggle("show");
})

// contextmenu event
const contxtItem = document.getElementById("demo5");
contxtItem.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log(event);
})

// copy event
const copyItem = document.getElementById("demo6");
copyItem.addEventListener("copy", () => {
    document.getElementById("demo7").innerHTML = "Please do not copy your e-mail. Write again."
})

// dblclick event
const dblclickItem = document.getElementById("demo8");
const asistedItem = document.getElementById("demo9");
dblclickItem.addEventListener("dblclick", () => {
    dblclickItem.style.display = "none";
    asistedItem.style.display = "block";
})

document.body.addEventListener("click", () => {
    dblclickItem.style.display = "block";
    asistedItem.style.display = "none";
})