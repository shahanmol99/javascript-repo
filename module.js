function makeCustomer() {
    var customer = {};
    var _id, _name;

    customer.setId = function(id) {
        _id = id;
    }

    customer.setName = function(name) {
        _name = name;
    }

    customer.getDetails = function() {
        return "Name: "+_name+"\nid: "+_id;
    }
    return customer;
}

var c1 = makeCustomer();

c1.setId(101);
c1.setName("Anmol");

console.log(c1.getDetails());
