// JavaScript Set Methods

// The setFullYear() Method
// setFullYear() yöntemi, bir tarih nesnesinin yılını ayarlar. Bu örnekte 2020'ye ayarlanır:
const d = new Date();
d.setFullYear(2020);
console.log(d);

// setFullYear() yöntemi isteğe bağlı olarak ay ve günü ayarlayabilir:
d.setFullYear(2020, 10, 17);
console.log(d);

// The setMonth() Method
// setMonth() yöntemi, bir tarih nesnesinin ayını ayarlar (0-11):
d.setMonth(11);
console.log(d);

// The setDate() Method
// setDate() yöntemi, bir tarih nesnesinin gününü ayarlar (1-31):
d.setDate(31);
console.log(d);

// setDate() yöntemi, bir tarihe gün eklemek için de kullanılabilir:
d.setDate(d.getDate() + 1);
console.log(d);

// The setHours() Method
// setHours() yöntemi, bir tarih nesnesinin saatlerini ayarlar (0-23):
d.setHours(15);
console.log(d);

// The setMinutes() Method
// setMinutes() yöntemi, bir tarih nesnesinin dakikalarını ayarlar (0-59):
d.setMinutes(58);
console.log(d);

