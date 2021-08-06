function Customer(id, name) {
    this.id = id;
    this.name = name;
}

Customer.prototype.getDetails = function() {
    return "Name: "+this.name+"\nid: "+this.id;
}


var c1 = new Customer(101, 'Anmol');
console.log(c1);
console.log(c1.getDetails());
console.log(c1.__proto__);

var c2 = new Customer(102, 'XYZ');
console.log(c2);
console.log(c2.getDetails());
console.log(c2.__proto__);

console.log(c1.__proto__==Customer.prototype);
console.log(c2.__proto__==Customer.prototype);
console.log(c1.__proto__==c2.__proto__)

console.log(Customer.prototype);
console.log(Customer.__proto__);
console.log(Customer.prototype.__proto__);
console.log(Object.__proto__);
console.log(Object.prototype.__proto__);