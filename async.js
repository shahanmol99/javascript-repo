function doSomething(input) {
    var result = Math.random() * input;
    console.log(result);

    if(result>5) {
        return {sucess: result};
    }

    return {error : "Something is wrong "}
}

console.log(doSomething(7));
console.log("End Of Main");