// JavaScript Number Properties

// JavaScript EPSILON
// 1 ile 1den sonra en küçük kayan noktalı sayı arasındaki farktır.
let numb43 = Number.EPSILON;
document.getElementById("demo18").innerHTML = 
numb43 + "<br>" +
numb43.toFixed(8) + "<br>" + 
numb43.toFixed(16) + "<br>" + 
numb43.toFixed(32);

// JavaScript MAX_VALUE
// Number.MAX_VALUE, JavaScript'te mümkün olan en büyük sayıyı temsil eden bir sabittir.
document.getElementById("demo19").innerHTML = 
Number.MAX_VALUE;

// Number Properties Cannot be Used on Variables
// Number properties belong to the JavaScript Number Object. These properties can only be accessed as Number.MAX_VALUE. Using x.MAX_VALUE, where x is a variable or a value, will return "undefined".

// JavaScript MIN_VALUE
// Number.MIN_VALUE, JavaScript'te mümkün olan en düşük sayıyı temsil eden bir sabittir.
document.getElementById("demo20").innerHTML = 
Number.MIN_VALUE;

