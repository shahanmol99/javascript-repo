function doSomething(input, successFun, errFun) {
    var result = Math.random() * input;
    console.log(result);

    if(result>5) {
        successFun({sucess: result});
        return;
    }

    errFun({error : "Something is wrong "});
}

doSomething((7), function(data) {
    console.log("sucess happend "+data.sucess)
}, function(err) {
    console.log("errr "+err.error);
});
console.log("End Of Main");