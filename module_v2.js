var service = function() {
    //var obj = {};
    console.log("Service Called");

    obj.doSomething = function() {
        console.log("Hello");
    }
    //return obj;
}();

service.doSomething();
service.doSomething();
service.doSomething();