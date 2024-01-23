// JavaScript call() 
// call() yöntemi ile farklı nesneler üzerinde kullanabileceğiniz bir method çağırabilirsiniz.
const person4 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person5 = {
    firstName: "Nazan",
    lastName: "Öncel"
}

console.log(person4.fullName.call(person5));

// The call() Method with Arguments
const person6 = {
    identy: function(city, address) {
        return this.firstName + " " + this.lastName + " " + address + "-" + city;
    }
}
console.log(person6.identy.call(person5, "Çanakkale", "Merkez"));

// JavaScript apply()