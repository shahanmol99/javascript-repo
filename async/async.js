const { setImmediate } = require("async");


function hello() {
    console.log("hello");
}

function printS() {
    while(true) {
        console.log("world");
    }
}

function printA() {
    setImmediate(printS);
}