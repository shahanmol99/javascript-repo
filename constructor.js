function Customer(id, name) {
    var _id, _name;

    if(id>0) {
        _id = id;
    }
    this.foo = "I am foo, just to test";

    this.setName = function(name) {
        if(name.length>0) {
            _name = name;
        }
    }

    this.getName = function() {
        return _name;
    }

    this.getId = function() {
        return _id;
    }

    this.setName(name);
}

var c1 = new Customer(101, 'Anmol');
console.log(c1);
// console.log({c1});
// console.log(c1.getId());
// console.log(c1.getName());
// c1.setName('Abc');
// console.log(c1.getName())


var c2 = new Customer(102, 'XYZ');
console.log(c2);



