// JavaScript Object References And Notes (i think important)

// MY NOTES

// JavaScript nesneleri dildeki temel veri türlerinden (not primitive, its complex data type) biridir ve verilerin temsil edilmesi ve işlenmesinde merkezi bir rol oynarlar.

// Nesneler, her anahtarın (key) bir string (veya sembol) olduğu ve her değerin (value) diğer nesneler de dahil olmak üzere herhangi bir veri türünde olabileceği anahtar-değer çiftlerinden oluşan koleksiyonlardır.

// JavaScript'teki nesneler gerçek dünya varlıklarını ve özelliklerini modellemek için kullanılır.

const myNoteObj = {
    name: "Samet",
    surName: "Polat",
    bornDate: 1998,
    age() {
        return new Date().getFullYear() - this.bornDate;
    }
}
console.log(myNoteObj.name, myNoteObj.surName, myNoteObj.age());
