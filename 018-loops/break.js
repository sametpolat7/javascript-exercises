// JavaScript Break and Continue
// break deyimi bir döngüden "atlar".
// continue deyimi döngüdeki bir iterasyonun "üzerinden atlar".

// The Break Statement
// break deyiminin bu eğitimin daha önceki bir bölümünde kullanıldığını zaten görmüştünüz. Bir switch() deyiminden "atlamak" için kullanılmıştı. break deyimi bir döngüden çıkmak için de kullanılabilir:
let text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

// Yukarıdaki örnekte, döngü sayacı (i) 3 olduğunda break deyimi döngüyü sonlandırır ("keser").

// The Continue Statement
// continue deyimi, belirli bir koşul gerçekleşirse bir yinelemeyi (döngüde) keser ve döngüdeki bir sonraki yineleme ile devam eder.
let text1= "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {continue};
    text1 += "The Number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text1;

// JavaScript Labels
// JavaScript ifadelerini etiketlemek için ifadelerin önüne bir etiket adı ve iki nokta üst üste koyarsınız:

